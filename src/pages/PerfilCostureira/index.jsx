import React, { useState } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import maisverde from "../../assets/mais-verde.png"
import wpp from "../../assets/wpp.png"
import tel from "../../assets/telefone.png"
import email from "../../assets/email.png"

import "swiper/css";
import "swiper/css/navigation";
import "./perfil.css";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import Header from "../components/HeaderComponent";
import NavProfile from "../components/HeaderComponent/NavTypes/NavProfile";
import { useQuery } from "react-query";
import { costureiraPeloId } from "../../services/costureira/costureiraService";
import fotoPadrao from "../../assets/foto-default.png";


const PerfilCostureira = () => {
  const param = useParams();

  console.log(param)

  const { data, isLoading } = useQuery(["costureira-perfil", param?.idCostureira], () =>
    costureiraPeloId(param?.idCostureira)
  );
  console.log(data);

  if (isLoading) {
    return <div>carregando...</div>;
  }

  return (
    <div className="perfil-container">
      <Header>
        <NavProfile />
      </Header>
      <div className="informacoes-section">
        <div className="container">
          <div className="informacoes-container">
            <div className="foto-perfil">
              <div className="image">
                <img src={fotoPadrao} className="img-perfil" alt="" />
              </div>
              <p className="nome-costureira">NOME</p>
            </div>
            <div className="bio-especialidades">
              <h1 className="tittle">Biografia</h1>
              <div className="card-cinza">
                <p className="text">
                </p>
              </div>
              <h1 className="tittle">Contatos</h1>
              <div className="card-cinza contato-card">
                <div className="div-ipt">
                    <img src={wpp} alt="" className="img-wpp"/>
                    <div className="dados-contato" id="whatsapp"></div>
                  </div>
                  <div className="div-ipt">
                    <img src={tel} alt="" className="img-wpp"/>
                    <div className="dados-contato" id="tel"></div>
                  </div>
                  <div className="div-ipt">
                    <img src={email} alt="" className="img-wpp"/>
                    <div className="dados-contato" id="email"></div>
                  </div>
              </div>
            </div>
          </div>

          <div className="div-minhas-postagens">
            <div className="titulo-maisverde">
              <h1 className="tittle-posts">Postagens dessa costureira</h1>
            </div>
          <div className="carross" style={{ width: "100%" }}>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={3}
                initialSlide={1}
                centeredSlides={true}
                spaceBetween={30}
                className="mySwiper"
              >
                <div>
                  <SwiperSlide>
                    <div className="image-slider-post">
                      <a href="/produto"><img src={fotoPadrao} alt="" className="img-carrossel"/></a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="image-slider-post">
                      <a href="/produto"><img src={fotoPadrao} alt="" className="img-carrossel"/></a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="image-slider-post">
                      <a href="/produto"><img src={fotoPadrao} alt="" className="img-carrossel"/></a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="image-slider-post">
                      <a href="/produto"><img src={fotoPadrao} alt="" className="img-carrossel"/></a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="image-slider-post">
                      <a href="/produto"><img src={fotoPadrao} alt="" className="img-carrossel"/></a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="image-slider-post">
                      <a href="/produto"><img src={fotoPadrao} alt="" className="img-carrossel"/></a>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PerfilCostureira;
