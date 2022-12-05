import { executeQuery } from "../../config/db";

const getAllTerms = async (req, res) => {
  try {
    let employeeData = await executeQuery("select * from terms_responsibility", []);
    res.send(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveTerms = async (req, res) => {
  const result = req.body;
  const { text, active } = result;
  try {
    console.log("post request");
    let CategoriesData = await executeQuery(
      "insert into terms_responsibility (text, active) values(?,?)",
      [text, active]
    );
    CategoriesData = await executeQuery(
      `select * from terms_responsibility where id=${CategoriesData.insertId}`
    );
    res.status(201).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err);
  }};

  const deleteTermsById = async (req, res, next) => {
    let id = req.query.id;
    try {
      let TermsData = await executeQuery(
        "delete from terms_responsibility where id=?",
        [id]
      );
      res.status(200).json("terms_responsibility Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updateTerms = async (req, res) => {
    let id = req.query.id;

    const { text, active } = req.body;

    try {
      let terms_responsibility = await executeQuery(
        "select * from terms_responsibility where id=?",
        [id]
      );
      if (terms_responsibility.length > 0) {
        terms_responsibility = await executeQuery(
          `update terms_responsibility set text=?,active=? where id=${id}`,
          [text, active]
        );
        res.status(200).json(terms_responsibility);
      } else {
        res.status(400).json(`terms_responsibility not found on this id=${id}`);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const getTermsById = async (req, res, next) => {
    let id = req.query.id;
    try {
      console.log("policy by id");
      let policyData = await executeQuery(
        `select * from policy_privacity where id=${id}`,
        []
      );
      if (policyData.length > 0) res.status(200).json(policyData);
      else {
        next(new ErrorHandler(`no terms_responsibility found with this id ${id}`, 404));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export {
    getAllTerms,
    updateTerms,
    getTermsById,
    saveTerms,
    deleteTermsById,
  };
