/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { Alert, AlertIcon, Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "./login.css";
import imagen1 from "../login/img/imagen1.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { useVerUserQuery } from "../../redux/Store";

export const Login = () => {
  const navigate = useNavigate();

  const [ver, setVer] = useState(false);
  const [value, setValue] = useState("password");
  const [alerta ,setAlerta] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    usuario: "",
    contraseña: "",
  });

  const {
    data: users,
    error: errors,
    isSuccess,
  } = useVerUserQuery(dataLogin);

  const handleOnchange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  //VERIFICACION DEL USUARIO LOGUEDAO
  const verificacion = async (e) => {
    e.preventDefault();
    const usuario = e.target.usuario.value;
    if (isSuccess) {
      const data = JSON.parse(localStorage.getItem("user") || "[]");
      data.push(users);
      localStorage.setItem("user", JSON.stringify(data));
      navigate(`/toDoList/${usuario}`);
    } else {
          setTimeout(() => {
            setAlerta(true);
            setTimeout(() => {
              setAlerta(false);
            }, 1000);
          }, 0);
    }
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
          <Button
            background={"transparent"}
            _hover={{ background: "transparent" }}
            marginTop="10px"
            marginRight="550px"
            marginBottom={"-50px"}
          >
            <BsFillHouseDoorFill
              color="#224f9c"
              onClick={() => {
                navigate("/");
              }}
            />
          </Button>
          {alerta ? (
            <Alert
              status="error"
              width={"240px"}
              marginTop={"10px"}
              marginRight={"350px"}
              borderRadius={"20px"}
            >
              <AlertIcon />
              <Text fontSize={'15px'}>{errors?.data?.msg}</Text>
            </Alert>
          ) : null}
          <form onSubmit={verificacion}>
            <Text as="b" fontSize={"35px"} marginBottom="50px" marginTop="20px">
              INICIAR SESION
            </Text>
            <label>
              Usuario
              <br />
              <input
                type="text"
                name="usuario"
                className="inputFormulario"
                onChange={handleOnchange}
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
                    onChange={handleOnchange}
                  ></input>
                </label>
              </Box>
              <section className="verPassword" onClick={verContraseña}>
                {ver ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </section>
            </section>
            <button type="submit" className="btn">
              INGRESAR
            </button>
            <button
              className="btn-registroo"
              onClick={(e) => {
                e.preventDefault();
                navigate("/registro");
              }}
            >
              <b>CREA UNA CUENTA</b>
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

export default Login;
