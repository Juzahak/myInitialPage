import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProdDestaques from '../components/ProdDestaques';
import Depoimentos from '../components/Depoimentos';
import Header from '../components/Header';
import Footer from '../components/Footer';

import axios from "axios";
import { FaQuoteRight, FaRegEye, FaCartPlus } from "react-icons/fa";
import { useState, useEffect } from 'react';

import useSwr, { mutate } from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

  const { data: products } = useSwr(`/api/products`, fetcher);
  console.log(products)

  // const handleDelete = async (id) => {
  //   console.log(id);
  //   try {
  //     const res = await axios.delete(`/api/products/${id}`);
  //     mutate(`/api/products`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>

      <Header />
      {/* <!-- ec Banner Slider --> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide><div className="ec-slide-item swiper-slide d-flex slide-2 bg-imagem2">
          <div className="container align-self-center">
            <div className="row">
              <div
                className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                <div className="ec-slide-content slider-animation">
                  <h2 className="ec-slide-stitle">Sabonetes</h2>
                  <h1 className="ec-slide-title">Aromas Agradáveis</h1>
                  <a href="/bellasnatural" className="btn btn-lg btn-primary">ver mais</a>
                </div>
              </div>
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="ec-slide-item swiper-slide d-flex slide-1 bg-imagem1">
          <div className="container align-self-center">
            <div className="row">
              <div
                className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center"
              >
                <div className="ec-slide-content slider-animation">
                  <h2 className="ec-slide-stitle">Bem Estar</h2>
                  <h1 className="ec-slide-title">Cuidados com a sua pele</h1>
                  <a href="/bellasnatural" className="btn btn-lg btn-primary">ver mais</a>
                </div>
              </div>
            </div>
          </div>
        </div></SwiperSlide>
      </Swiper>

      {/* <!-- ec Banner Section Start --> */}
      <section className="ec-banner section section-space-p">
        <h2 className="d-none">Banner</h2>
        <div className="container">
          <div className="row">
            <div className="ec-banner-bottom">
              <div className="ec-banner-inner">

                <div className="ec-banner-block ec-banner-block-4 mar-b-30">
                  <div className="banner-block">
                    <Image src={require("../assets/img/banner/002.jpg")} height={240} alt="" />
                    <div className="banner-content">
                      <div className="banner-text">
                        <span className="ec-banner-discount" style={{ color: '#fff' }}>Promoção</span>
                        <span className="ec-banner-title" style={{ color: '#e5c388' }}>50% Off</span>
                        <span className="ec-banner-stitle" style={{ color: '#e5c388' }}>Sabonete Vegetal</span>
                      </div>
                      <span className="ec-banner-btn"><a href="/bellasnatural">Compre já</a></span>
                    </div>
                  </div>
                </div>

                <div className="ec-banner-block ec-banner-block-5">
                  <div className="banner-block">
                    <Image src={require("../assets/img/banner/001.jpg")} height={240} alt="" />
                    <div className="banner-content">
                      <div className="banner-text">
                        <span className="ec-banner-discount" style={{ color: '#fff' }}>Destaque do Mês</span>
                        <span className="ec-banner-title" style={{ color: '#e5c388' }}>15% Off</span>
                        <span className="ec-banner-stitle" style={{ color: '#e5c388' }}>Sabonete Neutro</span>
                      </div>
                      <span className="ec-banner-btn"><a href="/bellasnatural">Compre já</a></span>
                    </div>
                  </div>
                </div>

                <div className="ec-banner-block ec-banner-block-5">
                  <div className="banner-block">
                    <Image src={require("../assets/img/banner/001.jpg")} height={240} alt="" />
                    <div className="banner-content">
                      <div className="banner-text">
                        <span className="ec-banner-discount" style={{ color: '#fff' }}>Destaque do Mês</span>
                        <span className="ec-banner-title" style={{ color: '#e5c388' }}>15% Off</span>
                        <span className="ec-banner-stitle" style={{ color: '#e5c388' }}>Sabonete Neutro</span>
                      </div>
                      <span className="ec-banner-btn"><a href="/bellasnatural">Compre já</a></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ec Banner Section End --> */}

      {/* <!-- Trending Item Start --> */}
      <section className="section ec-trend-product section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pb-4">
              <div className="section-title">
                <h2 className="ec-title">Aromas em Destaque</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='pl-5 pr-5'>

          <div className="container">
            <div className='d-flex flex-column'>
              <div className='col-12 d-flex pb-4'>
                {
                  products?.slice(0, 4).map(item => {
                    return (
                      <div key={item.id} className="ec-product-content col-lg-3 col-12">
                        <div className="ec-product-inner">
                          <div className="ec-pro-image-outer">
                            <div className="ec-pro-image">
                              <a href="/bellasnatural" className="image">
                                <Image
                                  className="main-image"
                                  src={require("../assets/img/produtos/2.jpg")}
                                  alt="Product"
                                  height={260}
                                />
                                <Image
                                  className="hover-image"
                                  src={require("../assets/img/produtos/2.jpg")}
                                  alt="Product"
                                  height={260}
                                />
                              </a>
                              <span className="percentage">-30%</span>
                              <span className="flags">
                                <span className="sale">Oferta</span>
                              </span>
                              <button title="Adicionar ao Carrinho" className="add-to-cart">
                                <FaCartPlus className="svg_img pro_svg" />
                                Adicionar ao Carrinho
                              </button>

                              <div className="ec-pro-actions">
                                <a
                                  href="/bellasnatural"
                                  className="ec-btn-group quickview">
                                  <FaRegEye className="svg_img pro_svg" /></a>
                              </div>
                            </div>
                          </div>
                          <div className="ec-pro-content">
                            <h5 className="ec-pro-title">
                              <a href="/bellasnatural">{item.name}</a>
                              <a>{item.category}</a>
                            </h5>
                            <span className="ec-price">
                              <span className="old-price">R$20.00</span>
                              <span className="new-price">R${item.price}.00</span>
                            </span>
                          </div>

                          <div className='col-12 pt-3'>
                            <span className="ec-offer-btn"><a className="btn btn-lg btn-primary w-100 itemBtn">Compre Já</a></span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className='col-12 d-flex'>
                {
                  products?.slice(4, 8).map(item => {
                    return (
                      <div key={item.id} className="ec-product-content col-lg-3 col-12">
                        <div className="ec-product-inner">
                          <div className="ec-pro-image-outer">
                            <div className="ec-pro-image">
                              <a href="/bellasnatural" className="image">
                                <Image
                                  className="main-image"
                                  src={require("../assets/img/produtos/2.jpg")}
                                  alt="Product"
                                  height={260}
                                />
                                <Image
                                  className="hover-image"
                                  src={require("../assets/img/produtos/2.jpg")}
                                  alt="Product"
                                  height={260}
                                />
                              </a>
                              <span className="percentage">-30%</span>
                              <span className="flags">
                                <span className="sale">Oferta</span>
                              </span>
                              <button title="Adicionar ao Carrinho" className="add-to-cart">
                                <FaCartPlus className="svg_img pro_svg" />
                                Adicionar ao Carrinho
                              </button>

                              <div className="ec-pro-actions">
                                <a
                                  href="/bellasnatural"
                                  className="ec-btn-group quickview">
                                  <FaRegEye className="svg_img pro_svg" /></a>
                              </div>
                            </div>
                          </div>
                          <div className="ec-pro-content">
                            <h5 className="ec-pro-title">
                              <a href="/bellasnatural">{item.name}</a>
                              <a>{item.category}</a>
                            </h5>
                            <span className="ec-price">
                              <span className="old-price">R$20.00</span>
                              <span className="new-price">R${item.price}.00</span>
                            </span>
                          </div>

                          <div className='col-12 pt-3'>
                            <span className="ec-offer-btn"><a className="btn btn-lg btn-primary w-100 itemBtn">Compre Já</a></span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Trending Item end --> */}

      <section className="section ec-offer-section section-space-mt section-space-mb">
        <h2 className="d-none">Offer</h2>
        <div style={{ width: '100%', height: '500px' }}>
        <Image src={require("../assets/img/banner/banner01.jpg")} alt="" objectFit='contain' height={800}/>
        </div>
        <div className="ec-offer-inner">
          <div className="row justify-content-center">
            <div className="w-100 col-lg-12 col-md-7 col-sm-7 align-self-center ec-offer-content">
              <h2 className="ec-offer-title pb-5" style={{ color: '#fff' }}>Feito com Cuidado</h2>
              <span className="ec-offer-desc" style={{ color: '#fff' }}>Desenvolvemos uma linha de sabonetes incríveis para o melhor cuidado com a sua pele!</span>
              <span className="ec-offer-desc" style={{ color: '#fff' }}>Descubra mais sobre os nosso produtos!</span>

              <span className="ec-offer-btn"><a href="/bellasnatural" className="btn btn-lg btn-primary">Compre Já</a></span>
            </div>
          </div>
        </div>
      </section>

      <ProdDestaques products={products} />

      <Depoimentos />

      {/* <!-- Ec Brand Section Start --> */}
      <section className="section ec-brand-area section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="ec-title">Instagram</h2>
              </div>
            </div>
            {/* <!-- SnapWidget --> */}
            <iframe title='instagram' src="https://snapwidget.com/embed/1015759" className="snapwidget-widget" allowtransparency="true" frameBorder="0" scrolling="no" style={{ border: 'none', overflow: 'hidden', width: '1530px', height: '255px', marginTop: '20px' }}></iframe>
          </div>
        </div>
      </section>
      {/* <!-- Ec Brand Section End --> */}

      <Footer />

    </>
  );
}
