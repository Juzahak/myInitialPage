import { executeQuery } from "../../config/db";

const getAllProductsSizes = async (req, res) => {
  try {
    console.log("all the productsSizes");
    let productSizesData = await executeQuery("select * from product_sizes", []);
    res.send(productSizesData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveProductsSizes = async (req, res) => {
  const result = req.body;
  const { name, active } = result;
  try {
    console.log("post request");
    let CategoriesData = await executeQuery(
      "insert into product_sizes (name, active) values(?,?)",
      [name, active]
    );
    CategoriesData = await executeQuery(
      `select * from product_sizes where id=${CategoriesData.insertId}`
    );
    res.status(201).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err);
  }};

  const deleteProductsSizesById = async (req, res, next) => {
    let id = req.query.id;
    try {
      let ProductsSizesData = await executeQuery(
        "delete from product_sizes where id=?",
        [id]
      );
      res.status(200).json("product_sizes Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updateProductsSizes = async (req, res) => {
    let id = req.query.id;

    const { name, active } = req.body;

    try {
      let productsizes = await executeQuery(
        "select * from product_sizes where id=?",
        [id]
      );
      if (productsizes.length > 0) {
        productsizes = await executeQuery(
          `update product_sizes set name=?,active=? where id=${id}`,
          [name, active]
        );
        res.status(200).json(productsizes);
      } else {
        res.status(400).json(`product_sizes not found on this id=${id}`);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const getProductsSizesById = async (req, res, next) => {
    let id = req.query.id;
    try {
      console.log("policy by id");
      let policyData = await executeQuery(
        `select * from policy_privacity where id=${id}`,
        []
      );
      if (policyData.length > 0) res.status(200).json(policyData);
      else {
        next(new ErrorHandler(`no product_sizes found with this id ${id}`, 404));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

export {
    getAllProductsSizes,
    saveProductsSizes,
    deleteProductsSizesById,
    updateProductsSizes,
    getProductsSizesById,
};
