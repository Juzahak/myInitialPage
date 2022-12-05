import { useEffect } from "react";

import '../styles/globals.css'

import '../assets/css/plugins/animate.css'
import '../assets/css/plugins/swiper-bundle.min.css'
import '../assets/css/plugins/slick.min.css'

import '../assets/css/demo2.css'
import '../assets/css/custom.css'

import "bootstrap/dist/css/bootstrap.min.css";

import '../assets/css/index.css';
import "../assets/plugins/simplebar/simplebar.css";
import '../assets/css/ekka.css';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("jquery/dist/jquery.min.js");

  }, []);

  return <Component {...pageProps} />
}

export default MyApp
