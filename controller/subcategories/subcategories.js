import { executeQuery } from "../../config/db";

const getAllsubCategories = async (req, res) => {
  try {
    let employeeData = await executeQuery("select * from sub_category ORDER BY `name`", []);
    res.send(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const savesubCategories = async (req, res) => {
  const result = req.body;
  const { name, mainCategory, active } = result;
  console.log(result)
  try {
    console.log("post request");
    let CategoriesData = await executeQuery(
      "insert into sub_category (name, main_category, active) values(?,?,?)",
      [name, mainCategory, active]
    );
    CategoriesData = await executeQuery(
      `select * from sub_category where id=${CategoriesData.insertId}`
    );
    res.status(201).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err);
  }};

  const deletesubCategoriesById = async (req, res, next) => {
    let id = req.query.id;
    try {
      let CategoriesData = await executeQuery(
        "delete from sub_category where id=?",
        [id]
      );
      res.status(200).json("sub_category Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updatesubCategories = async (req, res) => {
    let id = req.query.id;

    const { name, mainCategory, active, id_ } = req.body;

    console.log("id", id);
    console.log("req.body", req.body)

    try {
      let sub_category = await executeQuery(
        "select * from sub_category where id=?",
        [id]
      );
      if (sub_category.length > 0) {
        console.log("putrequest", sub_category);
        sub_category = await executeQuery(
          `update sub_category set name=?, main_category=?, active=? where id=${id}`,
          [name, mainCategory, active]
        );
        res.status(200).json(sub_category);
      } else {
        res.status(400).json(`sub_category not found on this id=${id}`);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const getsubCategoriesById = async (req, res, next) => {
    let id = req.query.id;
    try {
      console.log("categories by id");
      let categoriesData = await executeQuery(
        `select * from sub_category where id=${id}`,
        []
      );
      if (categoriesData.length > 0) res.status(200).json(categoriesData);
      else {
        next(new ErrorHandler(`no sub_category found with this id ${id}`, 404));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export {
    getAllsubCategories,
    updatesubCategories,
    getsubCategoriesById,
    savesubCategories,
    deletesubCategoriesById,
  };
