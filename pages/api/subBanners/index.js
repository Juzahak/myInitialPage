import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllBannersSub,
  updateBannersSub,
  saveBannersSub,
  deleteBannersSubById,
  
} from "../../../controller/bannersSub/bannersSub";
const handler = nc(onError);
handler.get(getAllBannersSub);
handler.put(updateBannersSub);
handler.post(saveBannersSub);
handler.delete(deleteBannersSubById);
export default handler;
