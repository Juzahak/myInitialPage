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

import Header from "../../components/b2b_components/Header";
import Menu from "../../components/b2b_components/Menu";
import Footer from "../../components/b2b_components/Footer";

export default function AddProduct() {
    const { data: policy_privacity } = useSwr(`/api/policy`, fetcher);
    const [policyPrivacity, setPolicyPrivacity] = useState("");
    const [active, setActive] = useState(1);
    const [id, setId] = useState(1);

    useEffect(() => {
        policy_privacity?.map(item => {setPolicyPrivacity(item.text)})   
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = await axios.put(`/api/policy/` + id, {
            text: policyPrivacity,
            active: active,

        });

        if (data.data) router.push("/b2b/policy_privacy");

    };

    // const handleCreate = async () => {
    //     const data = new FormData();
    //     data.append("file", file);
    //     data.append("upload_preset", "uploads");

    //     try {
    //         const uploadRes = await axios.post(
    //             "https://www.frequencia.com.br/~aaaa/up/",
    //             data

    //         );
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <div style={{ backgroundColor: '#f3f3f3' }}>
            <div style={{ display: 'flex' }}>
                <Menu />
                <div className="ec-page-wrapper">
                    <div className="ec-content-wrapper">
                        <div className="content">
                            <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
                                <div>
                                    <h1>Política de Privacidade</h1>
                                    <p className="breadcrumbs">
                                        <span>
                                            <Link href="/b2b">Dashboard</Link>
                                        </span>
                                        <span>
                                            <i className="mdi mdi-chevron-right"></i>
                                        </span>
                                        Adicionar Política
                                    </p>
                                </div>
                            </div>
                            {/* <div>
                                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                <button onClick={handleCreate} style={{ color: 'black' }}>disparar</button>
                                <Image
                                    className="ec-brand-icon"
                                    src={"https://www.frequencia.com.br/~aaaa/up/acomodacoes.jpg"}
                                    width={500}
                                    height={500}
                                    alt=""
                                />
                            </div> */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="card card-default">
                                        <div className="card-body">
                                            <div className="row ec-vendor-uploads">
                                                <div className="col-lg-12">
                                                    <div className="ec-vendor-upload-detail">
                                                        <form
                                                            onSubmit={onSubmit}
                                                            className="row g-3"
                                                            encType="multipart/form-data"
                                                        >
                                                            {policy_privacity?.map((item, index) => {
                                                                return (
                                                                    <>
                                                                        <div className="col-md-12">
                                                                            <label className="form-label">Escreva abaixo</label>
                                                                            <textarea
                                                                                style={{ whiteSpace: 'pre-wrap', }}
                                                                                className="form-control"
                                                                                defaultValue={item.text}
                                                                                onChange={(e) => setPolicyPrivacity(e.target.value)}
                                                                                rows="15"
                                                                            ></textarea>
                                                                        </div>
                                                                        <div className="d-flex mb-3">
                                                                            <div className="row align-items-center">
                                                                                <label className="form-label">Ativado</label>
                                                                                {item.active === 1 ?
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
                                                                        </div>
                                                                        <div className="col-md-12">
                                                                            <button onClick={() => setId(item.id)} name="submit" type="submit" className="btn btn-primary">
                                                                                Adicionar Política
                                                                            </button>
                                                                        </div>
                                                                    </>)
                                                            })}
                                                        </form>
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
