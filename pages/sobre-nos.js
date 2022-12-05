import Image from 'next/image'
import useSwr, { mutate } from "swr";
import ProdDestaques from '../components/ProdDestaques';
import Header from '../components/Header';
import Footer from '../components/Footer';

import axios from "axios";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

    const { data: products } = useSwr(`api/products`, fetcher);
    console.log(products)

    return (
        <>

            <Header />

            <section>
                <div className="container">
                    <div className="row mb-4 mt-5 pt-4">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2 className="ec-title mb-4">Sobre Nós</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 d-flex mt-5 mob-column'>
                        <div className='col-12 col-lg-6 text-center d-flex justify-content-center'>
                            <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
                                <Image src={require("../assets/img/soap1.jpg")} alt="" height={320} style={{ marginBottom: '25px' }}/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 d-flex flex-column justify-content-center'>
                            <h3>Cuidado e Amor com sua Pele</h3>
                            <p className='mt-4'> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section ec-offer-section section-space-mt section-space-mb">
                <h2 className="d-none">Offer</h2>
                <div className='mob-banner' style={{ width: '100%', height: '600px' }}>
                    <Image src={require("../assets/img/banner/banner-sobre.jpg")} alt="" style={{width: '100%'}}/>
                </div>
                <div className="ec-offer-inner">
                    <div className="row justify-content-center">
                        <div className="w-100 col-lg-12 col-md-7 col-sm-7 align-self-center ec-offer-content">
                            <h2 className="ec-offer-title pb-5" style={{ color: '#fff' }}>Ja Fez a sua SkinCare Hoje?</h2>
                            <span className="ec-offer-desc" style={{ color: '#fff' }}>Cuide de sua pele com os nossos produtos e se surpreeenda!</span>

                            <span className="ec-offer-btn"><a href="/bellasnatural" className="btn btn-lg btn-primary">Compre Já</a></span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="row mb-4 mt-5 pt-4">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2 className="page-subtitle mb-4">Descubra esse incrível mundo natural</h2>
                                <p className='mt-3'>Nossa linha de produto foi criada para proteger e fortalecer a sua pele, faça parte!</p>
                            </div>
                            <div className='col-12 d-flex mt-4 mob-column'>
                                <div className='col-12 col-lg-2 p-2 d-flex align-items-center mob-center'>
                                    <Image src={require("../assets/img/soap2.jpg")} alt=""  style={{borderRadius: '8px', padding: '5px'}}/>
                                </div>

                                <div className='col-12 col-lg-2 p-2 d-flex flex-column mob-center'>
                                    <Image src={require("../assets/img/soap2.jpg")} alt=""  style={{borderRadius: '8px', padding: '5px'}}/>
                                    <div style={{height: '10px'}}></div>
                                    <Image src={require("../assets/img/soap2.jpg")} alt=""  style={{borderRadius: '8px', padding: '5px'}}/>
                                </div>

                                <div className='col-12 col-lg-4 p-lg-2 mob-center'>
                                    <Image src={require("../assets/img/soap2.jpg")} alt=""  style={{borderRadius: '8px', padding: '5px'}}/>
                                </div>

                                <div className='col-12 col-lg-2 p-2 d-flex flex-column mob-center'>
                                    <Image src={require("../assets/img/soap2.jpg")} alt=""  style={{borderRadius: '8px', padding: '5px'}}/>
                                    <div style={{height: '10px'}}></div>
                                    <Image src={require("../assets/img/soap2.jpg")} alt=""  style={{borderRadius: '8px', padding: '5px'}}/>
                                </div>
                                <div className='col-12 col-lg-2 p-2 d-flex align-items-center mob-center'>
                                    <Image src={require("../assets/img/soap2.jpg")} alt=""  style={{borderRadius: '8px', padding: '5px'}}/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <ProdDestaques products={products} />

            <Footer />

        </>
    );
}
