/* eslint-disable jsx-a11y/alt-text */
import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "./login.css";
import imagen1 from "../registro/img/imagen1.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAgregarUserMutation } from "../../redux/Store";
import { AccionesRegistrosError, AccionesRegistrosExitoso } from "../Alertas/AlertasRegistro";


export const Registro = () => {
  const navigate = useNavigate();
  const [ver, setVer] = useState(false);
  const [value, setValue] = useState("password");
  const [alerta2, setAlerta2] = useState(true);
  const [alerta3, setAlerta3] = useState(false);

  const [createDate, { data: userss, error }] = useAgregarUserMutation();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const usuario = e.target.usuario.value;
    const contraseña = e.target.contraseña.value;

    createDate({
      usuario,
      contraseña,
    });
    setTimeout(() => {
      setAlerta2(true);
      setTimeout(() => {
        setAlerta2(false);
      }, 1000);
    }, 0);
    setTimeout(() => {
      setAlerta3(true);
      setTimeout(() => {
        setAlerta3(false);
      }, 1000);
    }, 0);
    e.target.reset();
  };

  //FUNCION VER CONTRASEÑA
  const verContraseña = (e) => {
    e.preventDefault();
    if (ver) {
      setVer(false);
      setValue("password");
    } else {
      setVer(true);
      setValue("text");
    }
  };

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      bg={"#7c8bfb"}
    >
      <Box
        width="90%"
        height="90%"
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        margin={"auto"}
        borderRadius={"30px"}
        boxShadow={"0px 0px 40px 30px #5a68d4"}
      >
        <Box
          width={"40%"}
          height={"100%"}
          bg={"white"}
          borderRadius={"30px 0px 0px 30px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          {alerta2 ? <AccionesRegistrosExitoso userss={userss} /> : null}

          {alerta3 ? <AccionesRegistrosError error={error} /> : null}

          <form onSubmit={handleOnSubmit}>
            <Text as="b" fontSize={"35px"} marginBottom="50px" marginTop="20px">
              REGISTRARSE
            </Text>
            <label>
              Usuario
              <br />
              <input
                type="text"
                name="usuario"
                className="inputFormulario"
              ></input>
            </label>
            <section className="box-contraseña">
              <Box width={"90%"}>
                <label>
                  Contraseña
                  <br />
                  <input
                    type={value}
                    name="contraseña"
                    className="inputFormulario"
                  ></input>
                </label>
              </Box>
              <section className="verPassword" onClick={verContraseña}>
                {ver ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </section>
            </section>
            <button type="submit" className="btn">
              REGISTRAR
            </button>
            <button
              className="btn-registro2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/Login");
              }}
            >
              <b>INICIAR SESION</b>
            </button>
          </form>
        </Box>
        <Box
          width="60%"
          height="100%"
          bg={"white"}
          borderRadius={"0px 30px 30px 0px"}
          display={"flex"}
          alignItems={"center"}
        >
          <img src={imagen1}></img>
        </Box>
      </Box>
    </Box>
  );
};

export default Registro;
