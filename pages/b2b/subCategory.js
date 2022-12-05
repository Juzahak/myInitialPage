import axios from "axios";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import router from 'next/router';

import AddSubCategory from "../../components/b2b_components/sub-category/AddSubCategory";
import EditSubCategory from "../../components/b2b_components/sub-category/EditSubCategory";

import useSwr, { mutate } from "swr";
import Header from "../../components/b2b_components/Header";
import Menu from "../../components/b2b_components/Menu";
import Footer from "../../components/b2b_components/Footer";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SubCategory() {
  const [subCategoriesInfo, setSubCategoriesInfo] = useState([]);
  const [subCategoryEditId, setSubCategoryEditId] = useState("");
  const [showEditSubCategoryComponent, setShowEditSubCategoryComponent] = useState(false);

  const { data: subCategory } = useSwr(`/api/subcategory`, fetcher);
  const { data: category } = useSwr(`/api/category`, fetcher);
  var tamanho = subCategory?.length || [];

  const deleteCategorie = async (id) => {
    let data = await axios.delete(`/api/subcategory/${id}`);
    mutate(`/api/subcategory`);
    router.push("/b2b/subCategory");
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
                  <h1>Sub Categoria</h1>
                  <p className="breadcrumbs">
                    <span>
                      <Link href="/b2b">Dashboard</Link>
                    </span>
                    <span>
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                    Sub Categoria
                  </p>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-12">
                    <div className="ec-cat-list card card-default mb-24px">
                      <div className="card-body">
                        {showEditSubCategoryComponent !== true ? (
                          <AddSubCategory subCategory={subCategory} category={category}/>
                        ) : (
                          <EditSubCategory subCategoryId={subCategoryEditId} category={category} subCategory={subCategory}/>
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
                                  <th>Nome</th>
                                  <th>Categoria Principal</th>
                                  <th>Status</th>
                                  <th></th>
                                </tr>
                              </thead>

                              <tbody>
                                {subCategory?.map((item) => {
                                  return (
                                    <tr key={item.id} className="align-middle">
                                      <td>{item.id}</td>
                                      <td>{item.name}</td>
                                      <td>{item.main_category}</td>
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
                                              setSubCategoryEditId(e.target.value);
                                              setShowEditSubCategoryComponent(true);
                                            }}
                                          >
                                            Editar
                                          </button>
                                          <button
                                            onClick={() => deleteCategorie(item.id)}
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
