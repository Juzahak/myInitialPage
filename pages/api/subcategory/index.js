import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllsubCategories,
  updatesubCategories,
  savesubCategories,
  deletesubCategoriesById,
  
} from "../../../controller/subcategories/subcategories";
const handler = nc(onError);
handler.get(getAllsubCategories);
handler.put(updatesubCategories);
handler.post(savesubCategories);
handler.delete(deletesubCategoriesById);
export default handler;
