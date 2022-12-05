import { executeQuery } from "../../config/db";

const getAllPromotions = async (req, res) => {
  try {
    let employeeData = await executeQuery("select * from promotions ORDER BY `title`", []);
    res.send(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const savePromotions = async (req, res) => {
  const result = req.body;
  const { title, text, btnText, btnLink, image, active } = result;
  try {
    console.log("post request");
    let CategoriesData = await executeQuery(
      "insert into promotions (title, text, btnText, btnLink, image, active) values(?,?,?,?,?,?)",
      [title, text, btnText, btnLink, image, active]
    );
    CategoriesData = await executeQuery(
      `select * from promotions where id=${CategoriesData.insertId}`
    );
    res.status(201).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err);
  }};

  const deletePromotionsById = async (req, res, next) => {
    let id = req.query.id;
    try {
      let CategoriesData = await executeQuery(
        "delete from promotions where id=?",
        [id]
      );
      res.status(200).json("promotions Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updatePromotions = async (req, res) => {
    let id = req.query.id;

    const { title, text, btnText, btnLink, image, active } = req.body;

    try {
      let promotions = await executeQuery(
        "select * from promotions where id=?",
        [id]
      );
      if (promotions.length > 0) {
        promotions = await executeQuery(
          `update promotions set title=?,text=?,btnText=?,btnLink=?,image=?,active=? where id=${id}`,
          [title, text, btnText, btnLink, image, active]
        );
        res.status(200).json(promotions);
      } else {
        res.status(400).json(`promotions not found on this id=${id}`);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const getPromotionsById = async (req, res, next) => {
    let id = req.query.id;
    try {
      console.log("categories by id");
      let categoriesData = await executeQuery(
        `select * from banners where id=${id}`,
        []
      );
      if (categoriesData.length > 0) res.status(200).json(categoriesData);
      else {
        next(new ErrorHandler(`no banners found with this id ${id}`, 404));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export {
    getAllPromotions,
    updatePromotions,
    getPromotionsById,
    savePromotions,
    deletePromotionsById,
  };
