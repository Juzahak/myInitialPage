import Link from "next/link";
import Image from "next/image";
import router from "next/router";
import { useCookies, expires } from 'react-cookie';

import { FaPowerOff } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  FaImages,
  FaUsers,
  FaUserFriends,
  FaBookmark,
  FaShoppingCart,
  FaStarHalfAlt,
  FaThList,
  FaTags,
  FaLaptop,
  FaCaretDown
} from "react-icons/fa";



// import '../assets/js/custom'
// import '../../assets/images';

export default function Menu() {
  const [isMenuLinkActived, setIsMenuLinkActived] = useState("active");
  const [ordersMenu, setOrdersMenu] = useState(false);
  const [productsMenu, setProductsMenu] = useState(false);
  const [categoryMenu, setCategoryMenu] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  function expandOrdersMenu() {
    setOrdersMenu(true);
    setProductsMenu(false);
    setCategoryMenu(false);
  }

  function expandProductsMenu() {
    setOrdersMenu(false);
    setProductsMenu(true);
    setCategoryMenu(false);
  }

  function expandCategoryMenu() {
    setOrdersMenu(false);
    setProductsMenu(false);
    setCategoryMenu(true);
  } 

  function clearCookies() {
    
    setCookie("access_token", "", { path: '/' });
    setCookie("user_id", ``, { path: '/' });
    setCookie("user_login", ``, { path: '/' });

    return router.push("/b2b/login");
  }

  return (
    <>
    <div style={{width: '300px'}}></div>
    <div
      className="ec-left-sidebar ec-bg-sidebar"
      style={{ backgroundColor: "#FFF", borderRight: "1px solid #F3F3F3" }}
    >
      <div id="sidebar" className="sidebar ec-sidebar-footer p-0">
        <div className="ec-brand">
          <a href="index.html" title="Ekka">
            <Image
              className="ec-brand-icon"
              style={{ minWidth: "200px" }}
              src={require("../../assets/images/logotipo-home.png")}
              alt=""
            />
          </a>
        </div>

        <div className="ec-navigation overflow-auto" data-simplebar>
          <ul className="nav sidebar-inner" id="sidebar-menu">
            <li className={isMenuLinkActived}>
              <Link className="sidenav-item-link" href="/b2b">
                <FaLaptop size={24} style={{ marginRight: "0.94rem", color: '#005894' }} />
                <span className="nav-text" style={{color: '#005894'}}>Dashboard</span>
              </Link>
              <hr />
            </li>

            {/* <li className="has-sub">
              <Link className="sidenav-item-link" href="/b2b/access">
                <FaUsers size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Acesso</span>
              </Link>
            </li> */}

            {/* <li className="has-sub">
              <Link
                className="sidenav-item-link"
                href="/cosmospiscinas/b2b/clients"
              >
                <FaUserFriends size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Clientes</span>
              </Link>
              <hr />
            </li> */}

            <li className="has-sub" onClick={expandCategoryMenu}>
              <a className="sidenav-item-link" href="javascript:void(0)">
                <FaBookmark size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Categorias</span>
                <FaCaretDown size={22} />
              </a>
              <div className={categoryMenu === true ? "collapse show" : "collapse"}>
                <ul
                  className="sub-menu"
                  id="categorys"
                  data-parent="#sidebar-menu"
                >
                  <li className="">
                    <Link
                      className="sidenav-item-link"
                      href="/b2b/category"
                    >
                      <span className="nav-text">Categorias Principais</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="sidenav-item-link"
                      href="/b2b/subCategory"
                    >
                      <span className="nav-text">Sub Categorias</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="has-sub" onClick={expandProductsMenu}>
              <a className="sidenav-item-link" href="javascript:void(0)">
                <FaThList size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Produtos</span>
                <FaCaretDown size={22} />
              </a>
              <div className={productsMenu === true ? "collapse show" : "collapse"}>
                <ul
                  className="sub-menu"
                  id="products"
                  data-parent="#sidebar-menu"
                >
                  <li className="">
                    <Link
                      className="sidenav-item-link"
                      href="/b2b/AddProduct"
                    >
                      <span className="nav-text">Adicionar Produtos</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="sidenav-item-link"
                      href="/b2b/ProductsList"
                    >
                      <span className="nav-text">Lista de Produtos</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                className="sidenav-item-link"
                href="/b2b/color"
              >
                <FaImages size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Cores</span>
              </Link>
            </li>
          


            {/* <li className="has-sub" onClick={expandOrdersMenu}>
              <a className="sidenav-item-link" href="javascript:void(0)">
                <FaShoppingCart size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Pedidos</span>
                <FaCaretDown size={22} />
              </a>
              <div className={ordersMenu === true ? "collapse show" : "collapse"}>
                <ul
                  className="sub-menu"
                  id="orders"
                  data-parent="#sidebar-menu"
                >
                  <li className="">
                    <Link
                      className="sidenav-item-link"
                      href="/cosmospiscinas/b2b/new-orders"
                    >
                      <span className="nav-text">Novos Pedidos</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="sidenav-item-link"
                      href="/b2b/OrderHistory"
                    >
                      <span className="nav-text">Histórico de Pedidos</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}



            <li>
              <Link
                className="sidenav-item-link"
                href="/b2b/productSizes"
              >
                <FaStarHalfAlt size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Tamanhos</span>
              </Link>
            </li>

            <li>
              <Link
                className="sidenav-item-link"
                href="/b2b/banners"
              >
                <FaStarHalfAlt size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Banners</span>
              </Link>
            </li>

            <li>
              <Link
                className="sidenav-item-link"
                href="/b2b/subBanners"
              >
                <FaStarHalfAlt size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Banners Secundário</span>
              </Link>
            </li>

            <li>
              <Link
                className="sidenav-item-link"
                href="/b2b/promotions"
              >
                <FaStarHalfAlt size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Promoções</span>
              </Link>
            </li>

            <li>
              <Link
                className="sidenav-item-link"
                href="/b2b/access"
              >
                <FaStarHalfAlt size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Acessos</span>
              </Link>
            </li>

            <li>
              <Link
                className="sidenav-item-link"
                href="/b2b/policy_privacy"
              >
                <FaStarHalfAlt size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Política de Privacidade</span>
              </Link>
            </li>

            <li>
              <Link
                className="sidenav-item-link"
                href="/b2b/terms_responsibility"
              >
                <FaStarHalfAlt size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Termos e Responsabilidade</span>
              </Link>
            </li>

            {/* <li>
              <Link
                className="sidenav-item-link"
                href="/b2b/reviewList"
              >
                <FaStarHalfAlt size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Depoimentos</span>
              </Link>
            </li>

            <li>
              <Link
                className="sidenav-item-link"
                href="/cosmospiscinas/b2b/brands"
              >
                <FaTags size={24} style={{ marginRight: "0.94rem" }} />
                <span className="nav-text">Marcas</span>
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="btn-off"><a className="text-end mr-3"><FaPowerOff onClick={() => clearCookies()} size={30}/></a></div>
      </div>
    </div>
    </>
  );
}
