import { executeQuery } from "../../config/db";

const getAllColors = async (req, res) => {
  try {
    let employeeData = await executeQuery("select * from colors ORDER BY `name`", []);
    res.send(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveColors = async (req, res) => {
  const result = req.body;
  const { name, color } = result;
  try {
    console.log("post request");
    let CategoriesData = await executeQuery(
      "insert into colors (name, color) values(?,?)",
      [name, color]
    );
    CategoriesData = await executeQuery(
      `select * from colors where id=${CategoriesData.insertId}`
    );
    res.status(201).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err);
  }};

  const deleteColorsById = async (req, res, next) => {
    let id = req.query.id;
    try {
      let CategoriesData = await executeQuery(
        "delete from colors where id=?",
        [id]
      );
      res.status(200).json("colors Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updateColors = async (req, res) => {
    let id = req.query.id;

    const { name, color, id_ } = req.body;

    try {
      let colors = await executeQuery(
        "select * from colors where id=?",
        [id]
      );
      if (colors.length > 0) {
        colors = await executeQuery(
          `update colors set name=?,color=? where id=${id}`,
          [name, color]
        );
        res.status(200).json(colors);
      } else {
        res.status(400).json(`colors not found on this id=${id}`);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const getColorsById = async (req, res, next) => {
    let id = req.query.id;
    try {
      console.log("categories by id");
      let categoriesData = await executeQuery(
        `select * from colors where id=${id}`,
        []
      );
      if (categoriesData.length > 0) res.status(200).json(categoriesData);
      else {
        next(new ErrorHandler(`no colors found with this id ${id}`, 404));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export {
    getAllColors,
    updateColors,
    getColorsById,
    saveColors,
    deleteColorsById,
  };
