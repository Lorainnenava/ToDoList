/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";

export const Task = ({ setAlerta, createDate, setAlertaa }) => {
  const [tarea, setTarea] = useState({
    tarea: "",
    descripcion: "",
  });

  const data = JSON.parse(localStorage.getItem("user") || "[]");

  //FUNCION ON CHANGE
  const handleOnChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };
  //FUNCION GUARDAR
  const handleOnSubmit = (e) => {
    e.preventDefault();

    createDate({
      dataTask: tarea,
      token: data[0]?.token,
    });
    setTimeout(() => {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 1000);
    }, 0);
    setTimeout(() => {
      setAlertaa(true);
      setTimeout(() => {
        setAlertaa(false);
      }, 1000);
    }, 0);    
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        marginRight={"15px"}
        bg={"#575adf"}
        width={"50px"}
        height={"50px"}
        borderRadius={"30px"}
        _hover={{ background: "#ed9da1" }}
      >
        <BiPlus color="white" />
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar nueva tarea</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                background: "white",
              }}
              onSubmit={(e) => {
                e.preventDefault();
                handleOnSubmit(e);
                onClose();
              }}
            >
              <Input
                variant="outline"
                placeholder="Escribe una tarea"
                name="tarea"
                onChange={handleOnChange}
              />
              <Input
                variant="outline"
                placeholder="Escribe una descripcion"
                name="descripcion"
                onChange={handleOnChange}
              />
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                marginBottom={"12px"}
              >
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme={"blue"} type="submit">
                  Agregar
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Task;
