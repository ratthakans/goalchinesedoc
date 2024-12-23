const { sequelize, Account } = require("../models");

exports.getSummaryUser = async (req, res) => {
  try {
    const result = await sequelize.query(
      `SELECT
            (SELECT COUNT(*) FROM User WHERE role = 'student') AS totalStudent,
            (SELECT COUNT(*) FROM User WHERE role = 'teacher') AS totalTeacher,
            (SELECT COUNT(*) FROM User WHERE role in ('admin', 'superadmin')) AS totalAdmin`,
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
    	SUM(student_count) 
	FROM (
		SELECT 
			COUNT(cs.id) AS student_count
		FROM
			Class
		LEFT JOIN
			ClassStudent cs ON cs.classID = Class.id
		WHERE
			Class.branchID = b.id
		GROUP BY
			Class.id
	) subquery
	) as totalStudent,
	(
	SELECT 
		count(Class.id)
	FROM
		Class
	WHERE
		Class.branchID = b.id
		and Class.endDate < NOW() 
	) as totalExpireClass,
    (
	SELECT 
		count(Class.id)
	FROM
		Class
	WHERE
		Class.branchID = b.id
		and Class.endDate > NOW() 
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

// summary income by year and branch optional
exports.getSummaryIncome = async (req, res) => {
  try {
    let year = new Date().getFullYear();

    let where = ` AND YEAR(FeeStructure.payDate) = ${year}`;

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
