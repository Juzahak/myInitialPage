import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getBannersById,
  updateBanners,
  saveBanners,
  deleteBannersById,

} from "../../../controller/banners/banners";

const handler = nc({ onError });
handler.get(getBannersById);
handler.put(updateBanners);
handler.post(saveBanners);
handler.delete(deleteBannersById);
export default handler;