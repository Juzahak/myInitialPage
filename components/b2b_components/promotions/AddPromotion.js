import { useState } from "react";
import axios from "axios";
import useSwr, { mutate } from "swr";
import router from 'next/router'
import { toast } from "react-toastify";

export default function AddPromotion() {
  const [promotionsTitle, setPromotionTitle] = useState("");
  const [promotionsText, setPromotionText] = useState("");
  const [promotionsLink, setPromotionLink] = useState("");
  const [promotionsButton, setPromotionButton] = useState("");
  const [promotions, setPromotion] = useState("");
  const [promotionsIsActive, setActive] = useState(1);

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(`/api/promotions`, {
      title: promotionsTitle,
      text: promotionsText,
      btnText: promotionsButton,
      btnLink: promotionsLink,
      image: promotions,
      active: promotionsIsActive,
    });
    mutate(`/api/promotions`);
    if (data.data) router.push("/b2b/promotions");
  };

  function changeImageSrc(files) {
    const reader = new FileReader();

    reader.onload = function () {
      setPromotion(reader.result);
    };

    reader.readAsDataURL(files[0]);
  };

  return (
    <div className="card-body">
      <div className="ec-cat-form">
        <h4>Adicionar Promoção</h4>
        <form onSubmit={onSubmit}>
          <div className="form-group row">
            <label htmlFor="text" className="col-12 col-form-label">
              Titulo
            </label>
            <div className="col-12">
              <input
                id="text"
                name="text"
                className="form-control here slug-title p-0"
                type="text"
                onChange={(e) => setPromotionTitle(e.target.value)}
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
                className="form-control here slug-title p-0"
                style={{borderRadius: '0px'}}
                rows="5"
                onChange={(e) => setPromotionText(e.target.value)}
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
                className="form-control here slug-title p-0"
                type="text"
                onChange={(e) => setPromotionButton(e.target.value)}
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
                className="form-control here slug-title p-0"
                type="text"
                onChange={(e) => setPromotionLink(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="color" className="col-12 col-form-label">
              Imagem
            </label>
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
            <div className="col-auto d-flex align-items-center" style={{ height: '50px' }}>
              <input
                type="radio"
                name="active"
                value={1}
                style={{ width: '20px', margin: '0 15px 0 0' }}
                onChange={(e) => setActive(e.target.value)}
              />
              Sim
            </div>
            <div className="col-auto d-flex align-items-center" style={{ height: '50px' }}>
              <input
                type="radio"
                name="active"
                value={0}
                style={{ width: '20px', margin: '0 15px 0 0' }}
                onChange={(e) => setActive(e.target.value)}
              />
              Não
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button name="submit" type="submit" className="btn btn-primary mt-4">
                Adicionar Promoção
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
