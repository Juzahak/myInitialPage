import axios from "axios";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import router from 'next/router';

import AddSize from "../../components/b2b_components/product_sizes/AddSize";
import EditSize from "../../components/b2b_components/product_sizes/EditSize";

import useSwr, { mutate } from "swr";
import Header from "../../components/b2b_components/Header";
import Menu from "../../components/b2b_components/Menu";
import Footer from "../../components/b2b_components/Footer";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Sizes() {
  const [productSizesEditId, setProductSizesId] = useState("");
  const [showEditComponent, setShowEditComponent] = useState(false);

  const { data: productSizes } = useSwr(`/api/product_sizes`, fetcher);
  var tamanho = productSizes?.length || [];

  const deleteSize = async (id) => {
    let data = await axios.delete(`/api/product_sizes/${id}`);
    mutate(`/api/product_sizes`);
    router.push("/b2b/productSizes");
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
                  <h1>Tamanhos</h1>
                  <p className="breadcrumbs">
                    <span>
                      <Link href="/b2b">Dashboard</Link>
                    </span>
                    <span>
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                    Tamanhos
                  </p>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-12">
                    <div className="ec-cat-list card card-default mb-24px">
                      <div className="card-body">
                        {showEditComponent !== true ? (
                          <AddSize />
                        ) : (
                          <EditSize productSizesEditId={productSizesEditId} productSizes={productSizes} />
                       
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-8 col-lg-12">
                    <div className="ec-cat-list card card-default">
                      <div className="card-body">
                        <div className="table-responsive">
                          {tamanho === 0 && (
                            <div className="text-center">
                              Não possui nenhum usuário cadastrado
                            </div>
                          )}

                          {tamanho !== 0 && (
                            <table id="responsive-data-table" className="table">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Tamanho</th>
                                  <th>Ativo</th>
                                  <th></th>
                                </tr>
                              </thead>

                              <tbody>
                                {productSizes?.map((item) => {
                                  return (
                                    <tr key={item.id} className="align-middle">
                                      <td>{item.id}</td>
                                      <td>{item.name}</td>
                                      <td>
                                        {item.active === 0 ? "Desativado" : "Ativado"}
                                      </td>
                                      <td className="text-right">
                                        <div className="btn-group">
                                          <button
                                            type="value"
                                            value={`${item.id}`}
                                            className="btn btn-primary"
                                            onClick={(e) => {
                                              setProductSizesId(e.target.value);
                                            setShowEditComponent(true);
                                            }}
                                          >
                                            Editar
                                          </button>
                                          <button
                                            onClick={() => deleteSize(item.id)}
                                            type="button"
                                            className="btn btn-outline-primary delete-btn"
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
