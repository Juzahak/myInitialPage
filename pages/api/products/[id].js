
import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllProducts,
  saveProducts,
  deleteProductsById,
  updateProducts,
  getProductsById,
  
} from "../../../controller/products/products";
const handler = nc(onError);
handler.get(getAllProducts);
handler.post(saveProducts);
handler.delete(deleteProductsById);
handler.put(updateProducts);
handler.get(getProductsById);
export default handler;

