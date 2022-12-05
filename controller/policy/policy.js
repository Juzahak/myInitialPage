import { executeQuery } from "../../config/db";

const getAllPolicy = async (req, res) => {
  try {
    let employeeData = await executeQuery("select * from policy_privacity", []);
    res.send(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const savePolicy = async (req, res) => {
  const result = req.body;
  const { text, active } = result;
  try {
    console.log("post request");
    let CategoriesData = await executeQuery(
      "insert into policy_privacity (text, active) values(?,?)",
      [text, active]
    );
    CategoriesData = await executeQuery(
      `select * from policy_privacity where id=${CategoriesData.insertId}`
    );
    res.status(201).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err);
  }};

  const deletePolicyById = async (req, res, next) => {
    let id = req.query.id;
    try {
      let PolicyData = await executeQuery(
        "delete from policy_privacity where id=?",
        [id]
      );
      res.status(200).json("policy_privacity Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updatePolicy = async (req, res) => {
    let id = req.query.id;

    const { text, active } = req.body;

    try {
      let policy_privacity = await executeQuery(
        "select * from policy_privacity where id=?",
        [id]
      );
      if (policy_privacity.length > 0) {
        policy_privacity = await executeQuery(
          `update policy_privacity set text=?,active=? where id=${id}`,
          [text, active]
        );
        res.status(200).json(policy_privacity);
      } else {
        res.status(400).json(`policy_privacity not found on this id=${id}`);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const getPolicyById = async (req, res, next) => {
    let id = req.query.id;
    try {
      console.log("policy by id");
      let policyData = await executeQuery(
        `select * from policy_privacity where id=${id}`,
        []
      );
      if (policyData.length > 0) res.status(200).json(policyData);
      else {
        next(new ErrorHandler(`no policy_privacity found with this id ${id}`, 404));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export {
    getAllPolicy,
    updatePolicy,
    getPolicyById,
    savePolicy,
    deletePolicyById,
  };
