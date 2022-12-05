import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllTerms,
  saveTerms,
  deleteTermsById,
  updateTerms,
  getTermsById,
  
} from "../../../controller/terms/terms";
const handler = nc(onError);
handler.get(getAllTerms);
handler.post(saveTerms);
handler.delete(deleteTermsById);
handler.put(updateTerms);
handler.get(getTermsById);
export default handler;
