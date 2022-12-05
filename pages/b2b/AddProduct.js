import axios from "axios";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";

import { toast } from "react-toastify";
import router from 'next/router';
import Link from "next/link";
import Image from "next/image";
import { FaEdit, FaCheck, FaTrash } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";


import useSwr, { mutate } from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

import PriceAndQuantity from "../../components/b2b_components/products/PriceAndQuantity";
import FormInputs from "../../components/b2b_components/products/FormInputs";
import Header from "../../components/b2b_components/Header";
import Menu from "../../components/b2b_components/Menu";
import Footer from "../../components/b2b_components/Footer";

export default function AddProduct() {
  const { data: mainCategories } = useSwr(`/api/category`, fetcher);
  const { data: subCategories } = useSwr(`/api/subcategory`, fetcher);
  const { data: productSizes } = useSwr(`/api/product-sizes`, fetcher);
  const { data: colors } = useSwr(`/api/colors`, fetcher);

  const [imagesNames1, setImagesNames1] = useState("");
  const [imagesNames2, setImagesNames2] = useState("");
  const [imagesNames3, setImagesNames3] = useState("");
  const [imagesNames4, setImagesNames4] = useState("");
  const [imagesNames5, setImagesNames5] = useState("");
  const [imageToUpload, setImageToUpload] = useState("");

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productsubCategory, setsubProductCategory] = useState([]);
  const [fullProductDescription, setFullProductDescription] = useState("");
  const [shortProductDescription, setShortProductDescription] = useState("");

  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productSizeArr, setProductSizeArr] = useState([]);

  const [largura, setLargura] = useState("");
  const [altura, setAltura] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [peso, setPeso] = useState("");

  const [featured, setFeatured] = useState(1);
  const [active, setActive] = useState(1);

  const [imagePreview, setImagePreview] = useState(
    require("../../assets/images/default.png")
  );

  const [imagesUploaded, setImagesUploaded] = useState([]);
  const imageInput = useRef();
  const miniImagePreview = useRef();

  function saveSize() {
    setProductSizeArr((current) => [
      ...current,
      {
        id: Math.floor((1 + Math.random()) * 0x10000),
        size: productSize,
        color: productColor,
        price: productPrice,
        quantity: productQuantity,
      },
    ]);
  };

  function changeImageSrc(files) {
    const reader = new FileReader();

    reader.onload = function () {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(files[0]);
  };

  function saveImage(e) {
    e.preventDefault();
    if (imagesNames1 === "") {
      setImagesNames1(imagePreview);
      setImagesUploaded((current) => [
        ...current,
        {
          image: imageToUpload,
          imageName: imageToUpload.name,
          imageLink: imagePreview,
        },
      ]);
    } else if (imagesNames2 === "") {
      setImagesNames2(imagePreview);
      setImagesUploaded((current) => [
        ...current,
        {
          image: imageToUpload,
          imageName: imageToUpload.name,
          imageLink: imagePreview,
        },
      ]);
    } else if (imagesNames3 === "") {
      setImagesNames3(imagePreview);
      setImagesUploaded((current) => [
        ...current,
        {
          image: imageToUpload,
          imageName: imageToUpload.name,
          imageLink: imagePreview,
        },
      ]);
    } else if (imagesNames4 === "") {
      setImagesNames4(imagePreview);
      setImagesUploaded((current) => [
        ...current,
        {
          image: imageToUpload,
          imageName: imageToUpload.name,
          imageLink: imagePreview,
        },
      ]);
    } else if (imagesNames5 === "") {
      setImagesNames5(imagePreview);
      setImagesUploaded((current) => [
        ...current,
        {
          image: imageToUpload,
          imageName: imageToUpload.name,
          imageLink: imagePreview,
        },
      ]);
    } else if (alert('Maximo de cinco imagens'));

  };

  const subcategories = (e) => {
    setsubProductCategory(e)
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(`/api/products`, {
      name: productName,
      category: parseInt(productCategory),
      subcategory: parseInt(productsubCategory),
      fullDescription: fullProductDescription,
      shortDescription: shortProductDescription,
      price: JSON.stringify(productSizeArr),
      image1: imagesNames1,
      image2: imagesNames2,
      image3: imagesNames3,
      image4: imagesNames4,
      image5: imagesNames5,
      largura: largura,
      altura: altura,
      comprimento: comprimento,
      peso: peso,
      featured: parseInt(featured),
      active: parseInt(active),
    });
    if (data.data) router.push("/b2b/ProductsList");
  };

  const deleteImage = (e, imagem) => {
    e.preventDefault();
    if (imagem === imagesNames1) {
      const newarr = imagesUploaded.filter((item) => item.imageLink !== imagesNames1);
      setImagesUploaded(newarr);
      setImagesNames1("");
      return;
    } else if (imagem === imagesNames2) {
      const newarr = imagesUploaded.filter((item) => item.imageLink !== imagesNames2);
      setImagesUploaded(newarr);
      setImagesNames2("");
      return;
    } else if (imagem === imagesNames3) {
      const newarr = imagesUploaded.filter((item) => item.imageLink !== imagesNames3);
      setImagesUploaded(newarr);
      setImagesNames3("");
      return;
    } else if (imagem === imagesNames4) {
      const newarr = imagesUploaded.filter((item) => item.imageLink !== imagesNames4);
      setImagesUploaded(newarr);
      setImagesNames4("");
      return;
    } else if (imagem === imagesNames5) {
      const newarr = imagesUploaded.filter((item) => item.imageLink !== imagesNames5);
      setImagesUploaded(newarr);
      setImagesNames5("");
      return;
    }

  };

  function deleteSize(id) {
    setProductSizeArr(
      productSizeArr.filter(a =>
        a.id !== id
      ));
  };

  return (
    <div style={{ backgroundColor: '#f3f3f3' }}>
      <div style={{ display: 'flex' }}>
        <Menu />
        <div className="ec-page-wrapper">
          <div className="ec-content-wrapper">
            <div className="content">
              <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
                <div>
                  <h1>Adicionar Produto</h1>
                  <p className="breadcrumbs">
                    <span>
                      <Link href="/b2b">Dashboard</Link>
                    </span>
                    <span>
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                    Adicionar Produto
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card card-default">
                    <div className="card-body">
                      <div className="row ec-vendor-uploads">
                        <div className="col-lg-8">
                          <div className="ec-vendor-upload-detail">
                            <form
                              onSubmit={onSubmit}
                              className="row g-3"
                              encType="multipart/form-data"
                            >

                              <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label">
                                  Nome do Produto
                                </label>
                                <input
                                  type="text"
                                  className="form-control slug-title"
                                  id="inputEmail4"
                                  onChange={(e) => setProductName(e.target.value)}
                                />
                              </div>
                              <div className="col-md-12">
                                <label className="form-label">Selecionar Categoria</label>
                                <select
                                  name="categories"
                                  onChange={(e) => setProductCategory(e.target.value)}
                                  id="Categories"
                                  className="form-select"
                                >
                                  <option value="">
                                    Escolha uma categoria
                                  </option>
                                  {mainCategories?.map((mainCategory, index) => {
                                    return (
                                      <option key={index} value={mainCategory?.id}>
                                        {mainCategory?.name}
                                      </option>)
                                  })};
                                </select>
                              </div>

                              <div className="col-md-12 mb-3">
                                <label className="form-label">Selecionar subCategoria</label>
                                <div className="checkboxinputs">
                                  {subCategories?.map((subCategory, index) => {
                                    if (subCategory.main_category === productCategory) {
                                      return (
                                        <div className="row align-items-center" key={index}>
                                          <div className="col-auto d-flex" style={{ height: '50px' }}>
                                            <input
                                              type="radio"
                                              id="actived"
                                              name="subcategory"
                                              value={subCategory?.id}
                                              style={{ width: '20px' }}
                                              onChange={(e) => subcategories(e.target.value)}
                                            />
                                          </div>
                                          {subCategory?.name}
                                        </div>
                                      )
                                    }
                                  })}
                                </div>
                              </div>

                              <div className="col-md-3">
                                <label className="form-label">Largura</label>
                                <input
                                  type="text"
                                  className="form-control slug-title col-md-3"
                                  id="largura"
                                  onChange={(e) => setLargura(e.target.value)}
                                />
                              </div>
                              <div className="col-md-3">
                                <label className="form-label">Altura</label>
                                <input
                                  type="text"
                                  className="form-control slug-title col-md-3"
                                  id="altura"
                                  onChange={(e) => setAltura(e.target.value)}
                                />
                              </div>
                              <div className="col-md-3">
                                <label className="form-label">Comprimento</label>
                                <input
                                  type="text"
                                  className="form-control slug-title col-md-3"
                                  id="comprimento"
                                  onChange={(e) => setComprimento(e.target.value)}
                                />
                              </div>
                              <div className="col-md-3">
                                <label className="form-label">Peso</label>
                                <input
                                  type="text"
                                  className="form-control slug-title col-md-3"
                                  id="peso"
                                  onChange={(e) => setPeso(e.target.value)}
                                />
                              </div>


                              <div className="col-md-12">
                                <label className="form-label">Breve Descrição</label>
                                <textarea
                                  className="form-control"
                                  onChange={(e) => setShortProductDescription(e.target.value)}
                                  rows="2"
                                ></textarea>
                              </div>

                              <div className="col-md-12">
                                <label className="form-label">Descrição Completa</label>
                                <textarea
                                  className="form-control"
                                  onChange={(e) => setFullProductDescription(e.target.value)}
                                  rows="4"
                                ></textarea>
                              </div>

                              <div className="d-flex mb-3">
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

                                <div className="row align-items-center">
                                  <label className="form-label">Destaque</label>
                                  <div className="col-auto d-flex align-items-center" style={{ height: '50px' }}>
                                    <input
                                      type="radio"
                                      name="featured"
                                      value={1}
                                      style={{ width: '20px', margin: '0 15px 0 0' }}
                                      onChange={(e) => setFeatured(e.target.value)}
                                    />
                                    Sim
                                  </div>
                                  <div className="col-auto d-flex align-items-center" style={{ height: '50px' }}>
                                    <input
                                      type="radio"
                                      name="featured"
                                      value={0}
                                      style={{ width: '20px', margin: '0 15px 0 0' }}
                                      onChange={(e) => setFeatured(e.target.value)}
                                    />
                                    Não
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="ec-vendor-img-upload">
                                  <div className="ec-vendor-main-img">
                                    <div className="avatar-upload">
                                      <div className="avatar-edit">
                                        <input
                                          type="file"
                                          id="imageUpload"
                                          className="ec-image-upload"
                                          accept="image/*"
                                          name="imageToUpload"
                                          ref={imageInput}
                                          onChange={(e) => {
                                            setImageToUpload(e.target.files[0]);
                                            changeImageSrc(e.target.files);
                                          }}
                                        />
                                        <label htmlFor="imageUpload">
                                          <FaEdit size={20} />
                                        </label>
                                      </div>

                                      <div className="avatar-preview ec-preview">
                                        <div
                                          className="imagePreview ec-div-preview"
                                          style={{ height: "400px" }}
                                        >
                                          <Image
                                            className="ec-image-preview"
                                            src={imagePreview}
                                            width={150}
                                            height={150}
                                            alt="edit"
                                            style={{ maxHeight: "400px" }}
                                          />
                                        </div>
                                      </div>

                                      <div className="avatar-edit save-image">
                                        <button
                                          onClick={(e) => saveImage(e)}
                                          className="save-image-button btn btn-primary"
                                        >
                                          <FaCheck
                                            size={20}
                                            color={"#FFF"}
                                            className="ec-image-upload"
                                          />
                                        </button>
                                      </div>

                                      <div className="thumb-upload-set colo-md-12">
                                        {imagesUploaded !== 0 &&
                                          imagesUploaded?.map((item, index) => {
                                            return (
                                              <div
                                                key={index}
                                                className="thumb-upload"
                                              >
                                                <div className="thumb-edit">
                                                  <button
                                                    onClick={(e) => deleteImage(e, item.imageLink)}
                                                    className="save-image-button btn p-2"
                                                  >
                                                    <FaTrash
                                                      size={20}
                                                      color={"#CC0000"}
                                                      className="ec-image-upload"
                                                    />
                                                  </button>
                                                </div>
                                                <div className="thumb-preview ec-preview">
                                                  <div className="image-thumb-preview">
                                                    <Image
                                                      className="image-thumb-preview ec-image-preview"
                                                      src={item.imageLink}
                                                      // src={require(`../assets/upload/products/${item.imageName}`)}
                                                      alt="edit"
                                                      width={150}
                                                      height={150}
                                                      ref={miniImagePreview}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            );
                                          })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-12">
                                <button name="submit" type="submit" className="btn btn-primary">
                                  Adicionar Produto
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="col-12 row mt-5">
                            <label className="form-label">Tamanhos</label>
                            <div className="form-checkbox-box">
                              <div className="d-flex">
                                <select
                                  name="size"
                                  onChange={(e) => setProductSize(e.target.value)}
                                  id="size"
                                  className="mr-1 form-select col-lg-6"
                                >
                                  <option value="">
                                    Selecione um Tamanho
                                  </option>
                                  {productSizes?.map((productSizes) => {
                                    return (
                                      <option key={productSizes.id} value={productSizes?.name}>
                                        {productSizes?.name}
                                      </option>
                                    );
                                  })}
                                </select>

                                <select
                                  name="colors"
                                  onChange={(e) => setProductColor(e.target.value)}
                                  id="colors"
                                  className="mr-1 form-select col-lg-6"
                                >
                                  <option value="">
                                    Escolha uma cor
                                  </option>
                                  {colors?.map((colors) => {
                                    return (
                                      <option key={colors.id} value={colors?.id}>
                                        {colors?.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                              <div className="d-flex mt-3">
                                <div className="col-md-6 mr-1">
                                  <label htmlFor="inputEmail4" className="form-label">
                                    Valor
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control slug-title"
                                    onChange={(e) => setProductPrice(e.target.value)}
                                  />
                                </div>

                                <div className="col-md-6 ml-1">
                                  <label htmlFor="inputEmail4" className="form-label">
                                    Estoque
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control slug-title"
                                    onChange={(e) => setProductQuantity(e.target.value)}
                                  />
                                </div>
                              </div>

                              <button onClick={saveSize} className="btn btn-primary mt-3 w-100">
                                Adicionar Tamanho
                              </button>

                              <div>

                                {productSizeArr?.map((item, index) => {
                                  var colorName = "";
                                  var colorId = parseInt(item.color);
                                  colors?.map((item2, index) => { if (item2.id === colorId) { colorName = item2.name } })
                                  return (
                                    <label key={index} className="m-0 sizeBox mt-2"> Valor: {item.price} / Estoque: {item.quantity}  <br></br>
                                      Cor: {colorName} / Tamanho: {item.size}
                                      <div className="thumb-edit">
                                        <button
                                          onClick={() => deleteSize(item.id)}
                                          className="ml-4 save-image-button btn p-2"
                                        >
                                          <FaTrash
                                            size={20}
                                            color={"#CC0000"}
                                            className="ec-image-upload"
                                          />
                                        </button>
                                      </div>
                                    </label>
                                  )
                                })}

                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
