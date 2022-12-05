import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllCategories,
  updateCategories,
  saveCategories,
  deleteCategoriesById,
  
} from "../../../controller/categories/categories";
const handler = nc(onError);
handler.get(getAllCategories);
handler.put(updateCategories);
handler.post(saveCategories);
handler.delete(deleteCategoriesById);
export default handler;
