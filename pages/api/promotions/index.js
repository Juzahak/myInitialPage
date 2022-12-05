import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllPromotions,
  updatePromotions,
  savePromotions,
  deletePromotionsById,
  
} from "../../../controller/promotions/promotions";
const handler = nc(onError);
handler.get(getAllPromotions);
handler.put(updatePromotions);
handler.post(savePromotions);
handler.delete(deletePromotionsById);
export default handler;
