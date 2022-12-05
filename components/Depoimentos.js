
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaQuoteRight } from "react-icons/fa";
import Image from 'next/image'
function Depoimentos() {


  return (
    <>
     {/* <!-- ec testimonial Start --> */}
     <section
        className="section ec-test-section section-space-mt section-space-mb section-space-p bg-imagem-comentarios">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center ec-test-top">
              <div className="ec-test-top-svg">
                <h2 className="d-none">Depoimentos</h2>
                <FaQuoteRight className="svg_img test_top_svg" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="ec-test-outer">
              <ul id="ec-testimonial-slider">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}>
                  <SwiperSlide>
                    <li className="ec-test-item">
                      <div className="ec-test-inner">
                        <div className="ec-test-img"></div>
                        <div className="ec-test-content">
                          <div className="ec-test-desc">
                            Produtos fantásticos e de ótima qualidade, para todos os
                            momentos do seu dia!
                          </div>
                          <span className="testimonial-name">Mariana</span>
                        </div>
                      </div>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li className="ec-test-item">
                      <div className="ec-test-inner">
                        <div className="ec-test-img"></div>
                        <div className="ec-test-content">
                          <div className="ec-test-desc">
                            Todos os produtos são de qualidade e muito bem acabados,
                            voltarei a comprar aqui sempre!
                          </div>
                          <span className="testimonial-name">Fernanda</span>
                        </div>
                      </div>
                    </li>
                  </SwiperSlide>
                  <SwiperSlide>
                    <li className="ec-test-item">
                      <div className="ec-test-inner">
                        <div className="ec-test-img"></div>
                        <div className="ec-test-content">
                          <div className="ec-test-desc">
                            A diversidade de produtos me encantou, um mais bonito que
                            o outro, sem dúvidas uma das melhores lojas que já comrei!
                          </div>
                          <span className="testimonial-name">Luana</span>
                        </div>
                      </div>
                    </li>
                  </SwiperSlide>
                </Swiper>



              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ec testimonial end --> */}
    </>
  );
}

export default Depoimentos;
