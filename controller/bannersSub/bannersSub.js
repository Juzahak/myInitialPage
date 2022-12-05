import { executeQuery } from "../../config/db";

const getAllBannersSub = async (req, res) => {
  try {
    let employeeData = await executeQuery("select * from banners_sub ORDER BY `title`", []);
    res.send(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveBannersSub = async (req, res) => {
  const result = req.body;
  const { title, text, btnText, btnLink, image, active } = result;
  try {
    console.log("post request");
    let CategoriesData = await executeQuery(
      "insert into banners_sub (title, text, btnText, btnLink, image, active) values(?,?,?,?,?,?)",
      [title, text, btnText, btnLink, image, active]
    );
    CategoriesData = await executeQuery(
      `select * from banners_sub where id=${CategoriesData.insertId}`
    );
    res.status(201).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err);
  }};

  const deleteBannersSubById = async (req, res, next) => {
    let id = req.query.id;
    try {
      let CategoriesData = await executeQuery(
        "delete from banners_sub where id=?",
        [id]
      );
      res.status(200).json("banners_sub Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updateBannersSub = async (req, res) => {
    let id = req.query.id;

    const { title, text, btnText, btnLink, image, active } = req.body;

    try {
      let banners_sub = await executeQuery(
        "select * from banners_sub where id=?",
        [id]
      );
      if (banners_sub.length > 0) {
        banners_sub = await executeQuery(
          `update banners_sub set title=?,text=?,btnText=?,btnLink=?,image=?,active=? where id=${id}`,
          [title, text, btnText, btnLink, image, active]
        );
        res.status(200).json(banners_sub);
      } else {
        res.status(400).json(`banners_sub not found on this id=${id}`);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const getBannersSubById = async (req, res, next) => {
    let id = req.query.id;
    try {
      console.log("categories by id");
      let categoriesData = await executeQuery(
        `select * from banners_sub where id=${id}`,
        []
      );
      if (categoriesData.length > 0) res.status(200).json(categoriesData);
      else {
        next(new ErrorHandler(`no banners_sub found with this id ${id}`, 404));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export {
    getAllBannersSub,
    updateBannersSub,
    getBannersSubById,
    saveBannersSub,
    deleteBannersSubById,
  };
