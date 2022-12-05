import axios from "axios";
import router from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSwr, { mutate } from "swr";

export default function EditCategory({ bannerSubEditId, bannersSubarr }) {
  const [bannersSubTitle, setBannerSubTitle] = useState("");
  const [bannersSubText, setBannerSubText] = useState("");
  const [bannersSubLink, setBannerSubLink] = useState("");
  const [bannersSubButton, setBannerSubButton] = useState("");
  const [bannersSub, setBannersSub] = useState("");
  const [bannersSubIsActive, setActive] = useState(1);
  const [id_, setId_] = useState(0);


  useEffect(() => {
    bannersSubarr?.map(item => {
      if (item.id === bannerSubEditId) {
        setBannerSubTitle(item.title);
        setBannerSubText(item.text);
        setBannerSubButton(item.btnText);
        setBannerSubLink(item.btnLink);
        setBannersSub(item.image);
        setActive(item.active);
        setId_(item.id)
      }
    })
  }, [bannerSubEditId]);

  function changeImageSrc(files) {
    const reader = new FileReader();

    reader.onload = function () {
      setBannersSub(reader.result);
    };

    reader.readAsDataURL(files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(`/api/subBanners/` + id_, {
      title: bannersSubTitle,
      text: bannersSubText,
      btnText: bannersSubButton,
      btnLink: bannersSubLink,
      image: bannersSub,
      active: bannersSubIsActive,
    });
    mutate(`/api/subBanners`);
    if (data.data) router.push("/b2b/banners");
  };


  return (
    <div className="card-body">
      <div className="ec-cat-form">
        <h4>Editar Banner</h4>

        <form onSubmit={onSubmit}>
          <div className="form-group row">
            <label htmlFor="text" className="col-12 col-form-label">
              Titulo
            </label>
            <div className="col-12">
              <input
                id="text"
                name="text"
                defaultValue={bannersSubTitle}
                className="form-control here slug-title p-0"
                type="text"
                onChange={(e) => setBannerSubTitle(e.target.value)}
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
                defaultValue={bannersSubText}
                className="form-control here slug-title p-0"
                style={{ borderRadius: '0px' }}
                rows="5"
                onChange={(e) => setBannerSubText(e.target.value)}
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
                defaultValue={bannersSubButton}
                className="form-control here slug-title p-0"
                type="text"
                onChange={(e) => setBannerSubButton(e.target.value)}
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
                defaultValue={bannersSubLink}
                className="form-control here slug-title p-0"
                type="text"
                onChange={(e) => setBannerSubLink(e.target.value)}
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
                src={bannersSub}
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
            {bannersSubIsActive === 1 ?
              <>
                <div className="col-auto d-flex align-items-center" style={{ height: '50px' }}>
                  <input
                    type="radio"
                    name="active"
                    defaultChecked
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
              </>
              :
              <>
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
                  defaultChecked
                  value={0}
                  style={{ width: '20px', margin: '0 15px 0 0' }}
                  onChange={(e) => setActive(e.target.value)}
                />
                Não
              </div>
            </>
            }

          </div>

          <div className="row">
            <div className="col-12">
              <button name="submit" type="submit" className="btn btn-primary">
                Editar Banner
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
