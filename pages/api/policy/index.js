import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllPolicy,
  savePolicy,
  deletePolicyById,
  updatePolicy,
  getPolicyById,
  
} from "../../../controller/policy/policy";
const handler = nc(onError);
handler.get(getAllPolicy);
handler.post(savePolicy);
handler.delete(deletePolicyById);
handler.put(updatePolicy);
handler.get(getPolicyById);
export default handler;
