import axios from "axios";
import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from "next/link";
import router from 'next/router';
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../../components/b2b_components/Header";
import Menu from "../../components/b2b_components/Menu";
import Footer from "../../components/b2b_components/Footer";
import useSwr, { mutate } from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsList() {
  const { data: products } = useSwr(`/api/products`, fetcher);
  const { data: colors } = useSwr(`/api/colors`, fetcher);

  const [listImages, setlistImages] = useState();

  var tamanho = products?.length || [];
  
  const deleteProducts = async (id) => {
    let data = await axios.delete(`/api/products/${id}`);
    mutate(`/api/products`);
    router.push("/b2b/ProductsList");
  };

  const customImgLoader = ({ src }) => {
    return `${src}`;
  };

  console.log(products)

  return (
    <div style={{ backgroundColor: '#f3f3f3' }}>
      <div style={{ display: 'flex' }}>
        <Menu />
        <div className="ec-page-wrapper">
          <div className="ec-content-wrapper">
            <div className="content">
              <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
                <div>
                  <h1>Produtos</h1>
                  <p className="breadcrumbs">
                    <span>
                      <Link href="/b2b">Dashboard</Link>
                    </span>
                    <span>
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                    Produtos
                  </p>
                </div>
                <div>
                  <Link href="/b2b/AddProduct" className="btn btn-primary">
                    Adicionar Produto
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card card-default">
                    <div className="card-body">
                      <div className="table-responsive">
                        {tamanho === 0 && (
                          <div className="text-center">
                            Não possui nenhum produto cadastrado
                          </div>
                        )}

                        {tamanho !== 0 && (
                          <table
                            id="responsive-data-table"
                            className="table"
                            style={{ width: "100%" }}
                          >
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Status</th>
                                <th>Produto</th>
                                <th></th>
                              </tr>
                            </thead>

                            <tbody>
                              {products?.map((item, index) => {
                                // let listSize = [item?.image1, item?.image2, item?.image3, item?.image4, item?.image5 ]
                                return (
                                  <tr key={item.id} className="align-middle">
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                      {JSON.parse(item.price)?.map((valores, index) => {
                                        var colorName = "";
                                        var colorId = valores.color;
                                        colors?.map((item2, index) => { if (item2.id === parseInt(colorId)) { colorName = item2.name } })
                                        return (<p key={index}>Valor: R${valores.price} / {valores.size} / Qtd: {valores.quantity} / Cor: {colorName} </p>)
                                      })}
                                    </td>
                                    <td>
                                      {item.active === 1 ? 'Ativado' : 'desativado'}
                                    </td>
                                    <td>
                                      <Image
                                        loader={customImgLoader}
                                        className="tbl-thumb"
                                        src={item?.image1}
                                        alt="Product Image"
                                        width={500}
                                        height={500}
                                      />
                                    </td>

                                    <td className="text-right">
                                      <div className="btn-group">
                                        <Link
                                          href={{
                                            pathname: '/b2b/EditProduct',
                                            query: { id: `${item?.id}` }
                                          }}
                                          className="btn btn-primary"
                                        >
                                          Editar
                                        </Link>
                                        <a
                                          className="btn btn-outline-primary delete-btn"
                                          onClick={() => deleteProducts(item.id)}
                                        >
                                          <FaTrash color="#cc0000" />
                                        </a>
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
  );
}
