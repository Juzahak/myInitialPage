import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getPromotionsById,
  updatePromotions,
  savePromotions,
  deletePromotionsById,

} from "../../../controller/promotions/promotions";

const handler = nc({ onError });
handler.get(getPromotionsById);
handler.put(updatePromotions);
handler.post(savePromotions);
handler.delete(deletePromotionsById);
export default handler;