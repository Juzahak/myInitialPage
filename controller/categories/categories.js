import { executeQuery } from "../../config/db";

const getAllCategories = async (req, res) => {
  try {
    let employeeData = await executeQuery("select * from main_category ORDER BY `name`", []);
    res.send(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveCategories = async (req, res) => {
  const result = req.body;
  const { name, active } = result;
  try {
    console.log("post request");
    let CategoriesData = await executeQuery(
      "insert into main_category (name, active) values(?,?)",
      [name, active]
    );
    CategoriesData = await executeQuery(
      `select * from main_category where id=${CategoriesData.insertId}`
    );
    res.status(201).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err);
  }};

  const deleteCategoriesById = async (req, res, next) => {
    let id = req.query.id;
    try {
      let CategoriesData = await executeQuery(
        "delete from main_category where id=?",
        [id]
      );
      res.status(200).json("main_category Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updateCategories = async (req, res) => {
    let id = req.query.id;

    const { name, active, id_ } = req.body;

    console.log("id", id);
    console.log("req.body", req.body)

    try {
      let main_category = await executeQuery(
        "select * from main_category where id=?",
        [id]
      );
      if (main_category.length > 0) {
        console.log("putrequest", main_category);
        main_category = await executeQuery(
          `update main_category set name=?,active=? where id=${id}`,
          [name, active]
        );
        res.status(200).json(main_category);
      } else {
        res.status(400).json(`main_category not found on this id=${id}`);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const getCategoriesById = async (req, res, next) => {
    let id = req.query.id;
    try {
      console.log("categories by id");
      let categoriesData = await executeQuery(
        `select * from main_category where emp_id=${id}`,
        []
      );
      if (categoriesData.length > 0) res.status(200).json(categoriesData);
      else {
        next(new ErrorHandler(`no main_category found with this id ${id}`, 404));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export {
    getAllCategories,
    updateCategories,
    getCategoriesById,
    saveCategories,
    deleteCategoriesById,
  };
