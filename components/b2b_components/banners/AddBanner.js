import { useState } from "react";
import axios from "axios";
import useSwr, { mutate } from "swr";
import router from 'next/router'
import { toast } from "react-toastify";

export default function AddBanner() {
  const [bannersTitle, setBannerTitle] = useState("");
  const [bannersText, setBannerText] = useState("");
  const [bannersLink, setBannerLink] = useState("");
  const [bannersButton, setBannerButton] = useState("");
  const [banners, setBanners] = useState("");
  const [bannersIsActive, setActive] = useState(1);

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(`/api/banners`, {
      title: bannersTitle,
      text: bannersText,
      btnText: bannersButton,
      btnLink: bannersLink,
      image: banners,
      active: bannersIsActive,
    });
    mutate(`/api/banners`);
    if (data.data) router.push("/b2b/banners");
  };

  function changeImageSrc(files) {
    const reader = new FileReader();

    reader.onload = function () {
      setBanners(reader.result);
    };

    reader.readAsDataURL(files[0]);
  };

  console.log(bannersTitle, banners, bannersIsActive)

  return (
    <div className="card-body">
      <div className="ec-cat-form">
        <h4>Adicionar Banner</h4>
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
                className="form-control here slug-title p-0"
                style={{borderRadius: '0px'}}
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
                className="form-control here slug-title p-0"
                type="text"
                onChange={(e) => setBannerButton(e.target.value)}
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
                onChange={(e) => setBannerLink(e.target.value)}
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
                Adicionar Banner
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
