import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getColorsById,
  updateColors,
  saveColors,
  deleteColorsById,

} from "../../../controller/colors/colors";

const handler = nc({ onError });
handler.get(getColorsById);
handler.put(updateColors);
handler.post(saveColors);
handler.delete(deleteColorsById);
export default handler;