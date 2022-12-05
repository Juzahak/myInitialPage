
const mysql = require("serverless-mysql")();

mysql.config({
  host: "189.113.169.212",
  database: "suaempre_bellas",
  user: "suaempre_bellas",
  password: "be_07al14z9",
});


const executeQuery = (query, arraParms) => {
  return new Promise((resolve, reject) => {
    try {
      mysql.query(query, arraParms, (err, data) => {
        if (err) {
          console.log("error in executing the query");
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { executeQuery };
