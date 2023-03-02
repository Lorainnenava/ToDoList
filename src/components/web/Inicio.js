/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './inicio.css'
import imagen7 from './img/img7.png'
import imagen from "./img/logo.png";
import img6 from "./img/img6.png";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export const Inicio = () => {

    const navigate = useNavigate();


  return (
    <div className="container">
      <div className="container-header">
        <section className="container-logo">
          <img src={imagen} className="img-logo"></img>
        </section>
        <section className="botones">
          <button
            onClick={() => {
              navigate("/Login");
            }}
          >
            Iniciar sesión
          </button>
          <button
            className="btn-registro"
            onClick={() => {
              navigate("/Registro");
            }}
          >
            Registrarse
          </button>
        </section>
      </div>
      <div className="portada">
        <section className="titulos">
          <h1 className="titulo">To Do List</h1>
          <p>
            <b>
              Tu App ideal para mantener
              <br />
              tu vida más organizada
            </b>
          </p>
        </section>
        <section className="imagen">
          <img src={imagen7}></img>
        </section>
      </div>
      <div className="info">
        <section className="imagen-info">
          <img src={img6} className="imagen2"></img>
        </section>
        <section className="texto-info">
          <section className="nosotross">
            <h4 className="acerca">
              <b>SOBRE</b>
            </h4>
            <h1 className="nosotros">
              <b>Nosotros</b>
            </h1>
          </section>
          <p>
            La App que revolucionara tu vida,con ella podras mantener una agenda
            informada, de ahora en adelante ninguna tarea
            <br /> se te olvidara, con esta app tu vida estara más organizada
          </p>
        </section>
      </div>
      <div className="container-footer">
        <section className="infoMia">
          <h1>
            <b>©Lorainne Navarro programadora web</b>
          </h1>
          <h3>To Do List</h3>
        </section>
        <section className="iconos">
          <a href="https://es-la.facebook.com/">
            <CiFacebook />
          </a>
          <a href="https://www.linkedin.com/learning/?trk=sem-ga_campid.17473508799_asid.137882062779_crid.603595547510_kw.linkedin%20learning_d.c_tid.kwd-310582843911_n.g_mt.e_geo.9048059">
            <CiLinkedin />
          </a>
          <a href="https://github.com/Lorainnenava">
            <BsGithub />
          </a>
        </section>
      </div>
    </div>
  );
}

export default Inicio;