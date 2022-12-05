import axios from "axios";
import router from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSwr, { mutate } from "swr";

export default function EditCategory({ bannerEditId, banners }) {
  const [promotionsTitle, setPromotionTitle] = useState("");
  const [promotionsText, setPromotionText] = useState("");
  const [promotionsLink, setPromotionLink] = useState("");
  const [promotionsButton, setPromotionButton] = useState("");
  const [promotions, setPromotion] = useState("");
  const [promotionsIsActive, setActive] = useState(1);
  const [id_, setId_] = useState(0);


  useEffect(() => {
    banners?.map(item => {
      if (item.id === bannerEditId) {
        setPromotionTitle(item.title);
        setPromotionText(item.text);
        setPromotionButton(item.btnText);
        setPromotionLink(item.btnLink);
        setPromotion(item.image);
        setActive(item.active);
        setId_(item.id)
      }
    })
  }, [bannerEditId]);

  function changeImageSrc(files) {
    const reader = new FileReader();

    reader.onload = function () {
      setPromotion(reader.result);
    };

    reader.readAsDataURL(files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(`/api/banners/` + id_, {
      title: promotionsTitle,
      text: promotionsText,
      btnText: promotionsButton,
      btnLink: promotionsLink,
      image: promotions,
      active: promotionsIsActive,
    });
    mutate(`/api/banners`);
    if (data.data) router.push("/b2b/banners");
  };


  return (
    <div className="card-body">
      <div className="ec-cat-form">
        <h4>Editar Promoção</h4>

        <form onSubmit={onSubmit}>
          <div className="form-group row">
            <label htmlFor="text" className="col-12 col-form-label">
              Titulo
            </label>
            <div className="col-12">
              <input
                id="text"
                name="text"
                defaultValue={promotionsTitle}
                className="form-control here slug-title p-0"
                type="text"
                onChange={(e) => setBannerTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="text" className="col-12 col-form-label">
              Texto
            </label>
            <div className="col-12">
              <textarea
                id="text"
                name="text"
                defaultValue={promotionsText}
                className="form-control here slug-title p-0"
                style={{ borderRadius: '0px' }}
                rows="5"
                onChange={(e) => setBannerText(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="text" className="col-12 col-form-label">
              Escrita Botão
            </label>
            <div className="col-12">
              <input
                id="text"
                name="text"
                defaultValue={promotionsButton}
                className="form-control here slug-title p-0"
                type="text"
                onChange={(e) => setBannerBtnText(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="text" className="col-12 col-form-label">
              Link Botão
            </label>
            <div className="col-12">
              <input
                id="text"
                name="text"
                defaultValue={promotionsLink}
                className="form-control here slug-title p-0"
                type="text"
                onChange={(e) => setBannerBtnLink(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="color" className="col-12 col-form-label">
              Imagem
            </label>
            <div style={{ height: '60px', display: 'flex' }}>
              <Image
                className="ec-brand-icon"
                style={{ minWidth: "300px", objectFit: 'cover' }}
                src={promotions}
                alt=""
                width={150}
                height={150}
              /></div>
            <div className="col-12">
              <input
                id="color"
                name="color"
                className="form-control here slug-title p-0"
                style={{ paddingLeft: '10px !important', height: '30px' }}
                type="file"
                onChange={(e) => changeImageSrc(e.target.files)}
              />
            </div>
          </div>

          <div className="row align-items-center">
            <label className="form-label">Ativado</label>
            {promotionsIsActive === 1 ?
              <>
                <div className="col-auto d-flex align-items-center" style={{ height: '50px' }}>
                  <input
                    type="radio"
                    name="active"
                    defaultChecked
                    value={1}
                    style={{ width: '20px', margin: '0 15px 0 0' }}
                    onChange={(e) => setBannerActive(e.target.value)}
                  />
                  Sim
                </div>
                <div className="col-auto d-flex align-items-center" style={{ height: '50px' }}>
                  <input
                    type="radio"
                    name="active"
                    value={0}
                    style={{ width: '20px', margin: '0 15px 0 0' }}
                    onChange={(e) => setBannerActive(e.target.value)}
                  />
                  Não
                </div>
              </>
              :
              <>
              <div className="col-auto d-flex align-items-center" style={{ height: '50px' }}>
                <input
                  type="radio"
                  name="active"
                  value={1}
                  style={{ width: '20px', margin: '0 15px 0 0' }}
                  onChange={(e) => setBannerActive(e.target.value)}
                />
                Sim
              </div>
              <div className="col-auto d-flex align-items-center" style={{ height: '50px' }}>
                <input
                  type="radio"
                  name="active"
                  defaultChecked
                  value={0}
                  style={{ width: '20px', margin: '0 15px 0 0' }}
                  onChange={(e) => setBannerActive(e.target.value)}
                />
                Não
              </div>
            </>
            }

          </div>

          <div className="row">
            <div className="col-12">
              <button name="submit" type="submit" className="btn btn-primary">
                Editar Promoção
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
