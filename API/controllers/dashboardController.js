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
		(
		select
			count(cs.id)
		from
			ClassStudent cs
		WHERE
			cs.classID = Class.id )
	FROM
		Class
	WHERE
		Class.branchID = b.id
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
