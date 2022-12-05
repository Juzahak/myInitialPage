import axios from "axios";
import { Link } from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import router from 'next/router'
import AddPromotion from "../../components/b2b_components/promotions/AddPromotion";
import EditPromotion from "../../components/b2b_components/promotions/EditPromotion";

import Header from "../../components/b2b_components/Header";
import Menu from "../../components/b2b_components/Menu";
import Footer from "../../components/b2b_components/Footer";
import useSwr, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Colors() {
    const [promotionEditId, setPromotionEditId] = useState("");
    const [showEditCategoryComponent, setShowEditCategoryComponent] = useState(false);

    const { data: promotions } = useSwr(`/api/promotions`, fetcher);

    var tamanho = promotions?.length || [];

    const deleteColors = async (id) => {
        let data = await axios.delete(`/api/promotions/${id}`);
        mutate(`/api/promotions`);
        router.push("/b2b/promotions");
    };

    return (
        <>
            <div style={{ backgroundColor: '#f3f3f3' }}>
                <div style={{ display: 'flex' }}>
                    <Menu />
                    <div className="ec-page-wrapper">
                        <div className="ec-content-wrapper">
                            <div className="content">
                                <div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
                                    <h1>Banners</h1>
                                    <p className="breadcrumbs">
                                        <span>
                                            <a href="#">Dashboard</a>
                                        </span>
                                        <span>
                                            <i className="mdi mdi-chevron-right"></i>
                                        </span>
                                        Banners
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12">
                                        <div className="ec-cat-list card card-default mb-24px">
                                            <div className="card-body">
                                                {showEditCategoryComponent !== true ? (
                                                    <AddPromotion />
                                                ) : (
                                                    <EditPromotion promotionEditId={promotionEditId} promotions={promotions} />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-12">
                                        <div className="ec-cat-list card card-default">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    {tamanho === 0 && (
                                                        <div className="text-center">
                                                            Não possui nenhuma categoria cadastrada
                                                        </div>
                                                    )}

                                                    {tamanho !== 0 && (
                                                        <table id="responsive-data-table" className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Nome</th>
                                                                    <th>Cor</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                {promotions?.map((item) => {
                                                                    return (
                                                                        <tr key={item.id} className="align-middle">
                                                                            <td>{item.id}</td>
                                                                            <td>{item.title}</td>
                                                                            <td>
                                                                                <div style={{ width: '60px', height: '60px', display: 'flex'}}>
                                                                                    <Image
                                                                                    className="ec-brand-icon"
                                                                                    style={{ minWidth: "150px", objectFit: 'cover' }}
                                                                                    src={item?.image}
                                                                                    alt=""
                                                                                    width={150}
                                                                                    height={150}
                                                                                /></div>
                                                                            </td>
                                                                            <td className="text-right">
                                                                                <div className="btn-group">
                                                                                    <button
                                                                                        type="value"
                                                                                        className="btn btn-primary"
                                                                                        onClick={(e) => {
                                                                                            setPromotionEditId(item.id);
                                                                                            setShowEditCategoryComponent(true);
                                                                                        }}
                                                                                    >
                                                                                        Editar
                                                                                    </button>
                                                                                    <button
                                                                                        className="btn btn-outline-primary delete-btn"
                                                                                        onClick={() => deleteColors(item.id)}
                                                                                    >
                                                                                        <FaTrash color="#cc0000" />
                                                                                    </button>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    )}
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
        </>
    );
}


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