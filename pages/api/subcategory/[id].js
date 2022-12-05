import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getsubCategoriesById,
  updatesubCategories,
  savesubCategories,
  deletesubCategoriesById,

} from "../../../controller/subcategories/subcategories";

const handler = nc({ onError });
handler.get(getsubCategoriesById);
handler.put(updatesubCategories);
handler.post(savesubCategories);
handler.delete(deletesubCategoriesById);
export default handler;