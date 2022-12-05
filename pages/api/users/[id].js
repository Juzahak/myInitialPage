import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllUsers,
  updateUsers,
  getUsersById,
  saveUsers,
  deleteUsersById,

} from "../../../controller/users/users";

const handler = nc({ onError });
handler.get(getAllUsers);
handler.put(updateUsers);
handler.post(saveUsers);
handler.delete(deleteUsersById);
export default handler;