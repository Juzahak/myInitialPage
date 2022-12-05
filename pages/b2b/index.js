import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as React from "react";
import router from "next/router";
import Header from "../../components/b2b_components/Header";
import Footer from "../../components/b2b_components/Footer";
import Dashboard from "../../components/b2b_components/Dashboard";
import Category from "./category";
import Menu from "../../components/b2b_components/Menu";

import useSwr, { mutate } from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Index = () => {
  const { data: products } = useSwr(`/api/products`, fetcher);
  const { data: category } = useSwr(`/api/category`, fetcher);

  const [accessToken, setAccessToken] = useState();

  return (
    <>
    <div style={{backgroundColor: '#f3f3f3'}}>
    <div style={{ display: 'flex' }}>
        <Menu />
        <Dashboard category={category}/>
    </div>
        <Footer />
    </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookies || "";

  if (myCookie.access_token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/b2b/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};


export default Index;