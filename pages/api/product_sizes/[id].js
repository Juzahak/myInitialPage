
import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllProductsSizes,
  saveProductsSizes,
  deleteProductsSizesById,
  updateProductsSizes,
  getProductsSizesById,
  
} from "../../../controller/productSizes/productSizes";
const handler = nc(onError);
handler.get(getAllProductsSizes);
handler.post(saveProductsSizes);
handler.delete(deleteProductsSizesById);
handler.put(updateProductsSizes);
handler.get(getProductsSizesById);
export default handler;

