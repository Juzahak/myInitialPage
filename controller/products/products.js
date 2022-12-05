import { executeQuery } from "../../config/db";

const getAllProducts = async (req, res) => {
  try {
    console.log("all the products");
    let productData = await executeQuery("select * from products", []);
    res.send(productData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveProducts = async (req, res) => {
  const result = req.body;
  const { name, category, subcategory, fullDescription, shortDescription, price, image1, image2, image3, image4, image5, largura, altura, comprimento, peso, featured, active } = result;
  try {
    console.log("post request");
    let ProductData = await executeQuery(
      "insert into products (name, category, subcategory, full_description, short_description, price, image1, image2, image3, image4, image5, largura, altura, comprimento, peso, featured, active) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [name, category, subcategory, fullDescription, shortDescription, price, image1, image2, image3, image4, image5, largura, altura, comprimento, peso, featured, active]
    );
    ProductData = await executeQuery(
      `select * from products where id=${ProductData.insertId}`
    );
    res.status(201).json(ProductData);
  } catch (err) {
    res.status(400).json(err);
  }};

  const deleteProductsById = async (req, res, next) => {
    let id = req.query.id;
    try {
      let ProductData = await executeQuery(
        "delete from products where id=?",
        [id]
      );
      res.status(200).json("products Deleted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updateProducts = async (req, res) => {
    let id = req.query.id;
    const { name, category, subcategory, fullDescription, shortDescription, price, image1, image2, image3, image4, image5, largura, altura, comprimento, peso, featured, active } = req.body;

    try {
      let products = await executeQuery(
        "select * from products where id=?",
        [id]
      );
      if (products.length > 0) {
        products = await executeQuery(
        `update products set name=?,category=?,subcategory=?,short_description=?,price=?,full_description=?,image1=?,image2=?,image3=?,image4=?,image5=?,largura=?,altura=?,comprimento=?,peso=?,featured=?,active=? where id=${id}`,
          [name, category, subcategory, shortDescription, price, fullDescription, image1, image2, image3, image4, image5, largura, altura, comprimento, peso, featured, active]
        );
        res.status(200).json(products);
      } else {
        res.status(400).json(`products not found on this id=${id}`);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };

  const getProductsById = async (req, res, next) => {
    let id = req.query.id;
    try {
      console.log("categories by id");
      let ProductData = await executeQuery(
        `select * from products where id=${id}`,
        []
      );
      if (ProductData.length > 0) res.status(200).json(ProductData);
      else {
        next(new ErrorHandler(`no products found with this id ${id}`, 404));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export {
    getAllProducts,
    saveProducts,
    deleteProductsById,
    updateProducts,
    getProductsById,
  };
