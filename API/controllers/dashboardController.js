const { sequelize, Account } = require("../models");

exports.getSummaryUser = async (req, res) => {
  try {
    const result = await sequelize.query(
      `SELECT
            (SELECT COUNT(*) FROM User WHERE role = 'student') AS totalStudent,
            (SELECT COUNT(*) FROM User WHERE role = 'teacher') AS totalTeacher,
            (SELECT COUNT(*) FROM User WHERE role in ('user', 'admin', 'superadmin')) AS totalAdmin`,
      { type: sequelize.QueryTypes.SELECT }
    );

    res.status(200).json(result[0]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving summary", error: error.message });
  }
};

exports.getSummaryBranch = async (req, res) => {
  try {
    const currentDate = new Date();
    const result = await sequelize.query(
      `

	  SELECT 
	  id,
	  name,
	  (
	SELECT 
		  count(Class.id)
	FROM
		  Class
	WHERE
		  Class.branchID = b.id
	  ) as totalClass,
	  (
	SELECT 
			  COUNT(a.id) AS student_count
		FROM
		Account a
		WHERE 
			a.branchID = b.id
		AND
          MONTH(a.addmissionDate) = MONTH(CURRENT_DATE())
		and YEAR(a.addmissionDate) = YEAR(CURRENT_DATE())
		GROUP BY
			 	a.branchID
	  ) as totalStudent,
	  (
	SELECT
		  count(id)
	FROM
		  (
		SELECT 
			  id
		FROM
			  Class c
		WHERE
			  c.id in (
			select
				  classId
			from
				  Attendance a
			GROUP by
				  classId
			having
				  c.registeredTimes - count(a.id) < 3 
	  )
				and c.branchID = b.id
				and c.status = 'Active'
			GROUP BY
				  id,
				  b.id
	  ) subquery
	  ) as totalExpireClass,
	  (
	SELECT
		sum(totalIncomeClass)
	FROM
		(
		SELECT
			sum(fs.classFee) as totalIncomeClass
		FROM
			Account a,
			FeeStructure fs
		WHERE
			a.id = fs.accountID
			and
			a.branchID = b.id
			AND
          MONTH(fs.payDate) = MONTH(CURRENT_DATE())
				and YEAR(fs.payDate) = YEAR(CURRENT_DATE())
			GROUP BY
				a.branchID
          )subquery
  
  ) as totalIncomeClass
FROM
	  Branch b ;
	  
      `,
      { type: sequelize.QueryTypes.SELECT }
    );

    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving summary", error: error.message });
  }
};

// Combined dashboard data - single API call for all dashboard data
exports.getDashboardData = async (req, res) => {
  try {
    // Run all queries in parallel
    const [summaryUser, summaryBranch, summaryIncome] = await Promise.all([
      // Query 1: Summary User
      sequelize.query(
        `SELECT
          (SELECT COUNT(*) FROM User WHERE role = 'student') AS totalStudent,
          (SELECT COUNT(*) FROM User WHERE role = 'teacher') AS totalTeacher,
          (SELECT COUNT(*) FROM User WHERE role in ('user', 'admin', 'superadmin')) AS totalAdmin`,
        { type: sequelize.QueryTypes.SELECT }
      ),
      // Query 2: Summary Branch
      sequelize.query(
        `SELECT 
          id, name,
          (SELECT count(Class.id) FROM Class WHERE Class.branchID = b.id) as totalClass,
          (SELECT COUNT(a.id) FROM Account a WHERE a.branchID = b.id 
            AND MONTH(a.addmissionDate) = MONTH(CURRENT_DATE()) 
            AND YEAR(a.addmissionDate) = YEAR(CURRENT_DATE()) 
            GROUP BY a.branchID) as totalStudent,
          (SELECT count(id) FROM (
            SELECT id FROM Class c WHERE c.id in (
              SELECT classId FROM Attendance a GROUP BY classId HAVING c.registeredTimes - count(a.id) < 3
            ) AND c.branchID = b.id AND c.status = 'Active' GROUP BY id, b.id
          ) subquery) as totalExpireClass,
          (SELECT sum(totalIncomeClass) FROM (
            SELECT sum(fs.classFee) as totalIncomeClass FROM Account a, FeeStructure fs 
            WHERE a.id = fs.accountID AND a.branchID = b.id 
            AND MONTH(fs.payDate) = MONTH(CURRENT_DATE()) AND YEAR(fs.payDate) = YEAR(CURRENT_DATE()) 
            GROUP BY a.branchID
          ) subquery) as totalIncomeClass
        FROM Branch b`,
        { type: sequelize.QueryTypes.SELECT }
      ),
      // Query 3: Summary Income
      sequelize.query(
        `SELECT YEAR(FeeStructure.payDate) as year, SUM(FeeStructure.classFee) as totalIncome
         FROM FeeStructure WHERE FeeStructure.classFee > 0 AND YEAR(FeeStructure.payDate) = YEAR(CURRENT_DATE())
         GROUP BY YEAR(FeeStructure.payDate)`,
        { type: sequelize.QueryTypes.SELECT }
      ),
    ]);

    res.status(200).json({
      summaryUser: summaryUser[0] || {},
      summaryBranch: summaryBranch || [],
      summaryIncome: summaryIncome || [],
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving dashboard data", error: error.message });
  }
};

// summary income by year and branch optional
exports.getSummaryIncome = async (req, res) => {
  try {
    let where = ` AND YEAR(FeeStructure.payDate) = YEAR(CURRENT_DATE())`;

    const result = await sequelize.query(
      `
SELECT
	YEAR(FeeStructure.payDate) as year,
	SUM(FeeStructure.classFee) as totalIncome
FROM
	FeeStructure
WHERE
	FeeStructure.classFee > 0
	${where}
GROUP BY
	YEAR(FeeStructure.payDate)
	  `,
      { type: sequelize.QueryTypes.SELECT }
    );

    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving summary", error: error.message });
  }
};
