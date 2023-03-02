/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Checkbox,
  /*   IconButton, */
  Input,
  /*   Menu,
  MenuButton,
  MenuItem,
  MenuList, */
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  BiCheck,
  /*  BiDotsVerticalRounded, */ BiEditAlt,
  BiX,
} from "react-icons/bi";
import {
  useDeleteEliminarMutation,
  useGetMostrarQuery,
  usePutEditarEstadoMutation,
  usePutEditarMutation,
} from "../../redux/Store";
/* import { BsFillCircleFill } from "react-icons/bs"; */
import Eliminar from "../Confirm/Eliminar";

export const Tareas = ({ setAlert }) => {
  const [tarea, setTarea] = useState(""); //RECOGE EL VALOR DE LA TAREA QUE SE VA EDITAR
  const [edit, setEdit] = useState(false); // HABILITAR EDITAR
  /*  const [editColor, setEditColor] = useState(false); */ // HABILITAR EDITAR
  /*   const [IndexeditColor, setIndexEditColor] = useState(""); */ // HABILITAR EDITAR
  const [update, setUpdate] = useState(""); //RECOGE EL VALOR DEL ID
  const [descripcion, setDescripcion] = useState(""); //RECOGE EL VALOR DE EDITAR
  const [color /* setColor */] = useState("#cacaca"); //COLOCA EL COLOR A LA CARTA
  const [valueCheck, setValueCheck] = useState(false);

  /*   console.log(IndexeditColor); */
  /* ----------------------------FUNCION MOSTRAR------------------------------------*/
  const data = JSON.parse(localStorage.getItem("user") || "[]");
  const {
    data: tasks,
    error,
    isError,
    isSuccess,
  } = useGetMostrarQuery(data[0].token);
  if (isError) console.log(error);

  /* ----------------------------ACABA MOSTRAR------------------------------------*/

  /* ----------------------------FUNCION EDITAR------------------------------------*/
  const [Editar] = usePutEditarMutation();
  const [EditarEstado] = usePutEditarEstadoMutation();

  const editar = (_id, tarea, descripcion) => {
    Editar({
      _id,
      data: { tarea: tarea, descripcion: descripcion },
      token: data[0].token,
    });
    setEdit(false);
  };
  const editarEstado = (_id, estado) => {
    EditarEstado({
      _id,
      dataEstado: { estado: estado },
      token: data[0].token,
    });
    setEdit(false);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    if (e.target.name === "tarea") {
      setTarea(e.target.value);
    }
    if (e.target.name === "descripcion") {
      setDescripcion(e.target.value);
    }
  };

  /* ----------------------------ACABA EDITAR------------------------------------*/

  /* ----------------------------FUNCION ELIMINAR------------------------------------*/
  const [Delete] = useDeleteEliminarMutation();

  return (
    <Box
      display={"grid"}
      maxWidth="100%"
      gridTemplateColumns=" repeat(auto-fill, 287px) "
      max-width={"68em"}
      gap={"20px"}
      alignItems={"center"}
    >
      {isSuccess ? (
        tasks?.map((t, i) =>
          update == t._id && edit ? (
            <Box
              key={i}
              width={"250px"}
              bg={color}
              marginTop={"20px"}
              borderRadius="15px"
              padding={"7px"}
            >
              <Box
                width={"100%"}
                height={"20%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text as="b">TAREA</Text>
              </Box>
              <Box
                width={"90%"}
                height={"60%"}
                margin={"auto"}
                marginTop={"10px"}
              >
                <label>
                  <Input
                    name="tarea"
                    value={tarea}
                    onChange={handleOnChange}
                    marginBottom={"10px"}
                    boxShadow={"0px 2px 5px black"}
                    bg={"white"}
                  />
                </label>
                <label>
                  <Input
                    name="descripcion"
                    value={descripcion}
                    onChange={handleOnChange}
                    boxShadow={"0px 2px 5px black"}
                    bg={"white"}
                  />
                </label>
              </Box>
              <Box
                width={"95%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    editar(t._id, tarea, descripcion);
                    setEdit(false);
                  }}
                >
                  <BiCheck color="green" />
                </button>
                <button>
                  <BiX color="red" />
                </button>
              </Box>
            </Box>
          ) : (
            <Box
              key={i}
              width={"280px"}
              height={"auto"}
              display="flex"
              bg={color}
              flexDirection="column"
              alignItems={"center"}
              marginTop={"20px"}
              borderRadius="15px"
              padding={"10px"}
            >
              <Box
                width={"100%"}
                height={"20%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection="column"
                >
                  <Text as="b">{t.tarea}</Text>
                  {/*                   <Text
                    fontSize={"8px"}
                    as="b"
                    typeof="date"
                    letterSpacing={"-0.5px"}
                    margin="10px"
                  >
                    {Date(t.createdAt)}
                  </Text> */}
                </Box>
                <Eliminar Delete={Delete} data={data} _id={t._id} />
              </Box>
              <Box
                width={"90%"}
                height={"40%"}
                margin={"auto"}
                marginTop={"10px"}
                marginBottom={"10px"}
              >
                <Text fontSize={"15px"} marginBottom={"10px"}>
                  {t.descripcion}
                </Text>
              </Box>
              <Box
                width={"90%"}
                height={"50%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                margin={"auto"}
              >
                <Box width={"90%"}>
                  {t.estado == true ? (
                    <>
                      <Checkbox
                        type="checkbox"
                        marginRight={"10px"}
                        marginTop={"8px"}
                        defaultChecked
                        value={valueCheck}
                        onChange={() => {
                          editarEstado(t._id, t.estado === false);
                          setValueCheck(true);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <Checkbox
                        type="checkbox"
                        marginRight={"10px"}
                        marginTop={"8px"}
                        value={valueCheck}
                        onChange={() => {
                          editarEstado(t._id, t.estado === false);
                          setValueCheck(false);
                          setTimeout(() => {
                            setAlert(true);
                            setTimeout(() => {
                              setAlert(false);
                            }, 1000);
                          }, 0);
                        }}
                      />
                    </>
                  )}

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setEdit(true);
                      setTarea(t.tarea);
                      setDescripcion(t.descripcion);
                      setUpdate(t._id);
                    }}
                  >
                    <BiEditAlt />
                  </button>
                </Box>
                {/* <Box>
                  <Menu _hover={{ background: "transparent" }}>
                    <MenuButton
                      onClick={() => {
                        setEditColor(true);
                        setIndexEditColor(t._id);
                      }}
                      as={IconButton}
                      aria-label="Options"
                      icon={<BiDotsVerticalRounded />}
                      bg={"transparent"}
                      _hover={{ background: "transparent" }}
                      _active={{ background: "transparent" }}
                    />
                    {IndexeditColor === t._id ? (
                      <MenuList
                        onClick={(e) => {
                          if (
                            e.target.value === "escuela" ||
                            IndexeditColor === t._id
                          ) {
                            setColor("#82b7fc");
                          }
                          if (
                            e.target.value === "trabajo" ||
                            IndexeditColor === t._id
                          ) {
                            setColor("#f6d67f");
                          }
                          if (
                            e.target.value === "personal" ||
                            IndexeditColor === t._id
                          ) {
                            setColor("#a7dbab");
                          }
                        }}
                      >
                        <MenuItem
                          icon={<BsFillCircleFill />}
                          color="#005bc5"
                          value="escuela"
                          _hover={{ background: "transparent" }}
                        >
                          Escuela
                        </MenuItem>
                        <MenuItem
                          icon={<BsFillCircleFill />}
                          color="#f19601"
                          value="trabajo"
                        >
                          Trabajo
                        </MenuItem>
                        <MenuItem
                          icon={<BsFillCircleFill />}
                          color={"#a7dbab"}
                          value="personal"
                          onClick={(e) => {
                            if (
                              e.target.value === "personal" &&
                              IndexeditColor == t._id
                            ) {
                              setColor("#f6d67f", t._id);
                            }
                          }}
                        >
                          Personal
                        </MenuItem>
                      </MenuList>
                    ) : null}
                  </Menu>
                </Box> */}
              </Box>
            </Box>
          )
        )
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Tareas;
