import { executeQuery } from "../../config/db";

const getAllUsers = async (req, res) => {
  try {
    let employeeData = await executeQuery("select * from acess ORDER BY `name`", []);
    res.send(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveUsers = async (req, res) => {
  const result = req.body;
  const { name, email, user, password, userlevel, active } = result;
  try {
    console.log("post request");
    let CategoriesData = await executeQuery(
      "insert into acess (name, email, login, password, level, active) values(?,?,?,?,?,?)",
      [name, email, user, password, userlevel, active]
    );
    CategoriesData = await executeQuery(
      `select * from acess where id=${CategoriesData.insertId}`
    );
    res.status(201).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err);
  }};

  const deleteUsersById = async (req, res, next) => {
    let id = req.query.id;
    try {
      let CategoriesData = await executeQuery(
        "delete from acess where id=?",
        [id]
      );
      res.status(200).json("acess Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updateUsers = async (req, res) => {
    let id = req.query.id;

    const { name, email, user, password, userlevel, active, id_ } = req.body;

    try {
      let colors = await executeQuery(
        "select * from acess where id=?",
        [id]
      );
      if (colors.length > 0) {
        colors = await executeQuery(
          `update acess set name=?,email=?,login=?,password=?,level=?,active=? where id=${id}`,
          [name, email, user, password, userlevel, active]
        );
        res.status(200).json(colors);
      } else {
        res.status(400).json(`acess not found on this id=${id}`);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const getUsersById = async (req, res, next) => {
    let id = req.query.id;
    try {
      console.log("acess by id");
      let categoriesData = await executeQuery(
        `select * from acess where id=${id}`,
        []
      );
      if (categoriesData.length > 0) res.status(200).json(categoriesData);
      else {
        next(new ErrorHandler(`no acess found with this id ${id}`, 404));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export {
    getAllUsers,
    updateUsers,
    getUsersById,
    saveUsers,
    deleteUsersById,
  };
