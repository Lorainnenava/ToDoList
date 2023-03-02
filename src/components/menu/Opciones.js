import { Avatar, Box, /* Button, */ Text, WrapItem } from "@chakra-ui/react";
import React from "react";
/* import { BiTask, BiTaskX } from "react-icons/bi";
import { BsListTask } from "react-icons/bs"; */
import Salir from "../Confirm/Salir";


export const Opciones = ({usuario}) => {

  return (
    <Box
      width={"100%"}
      height={"90%"}
      display={"flex"}
      flexDirection="column"
      justifyContent={"space-between"}
    >
      <Box
        bg={"#7c8bfb"}
        width="100%"
        height="22%"
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        marginTop={"40px"}
      >
        <WrapItem>
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src="https://img.freepik.com/premium-vector/document-3d-icon-todo-list-concept-with-check-mark-round-button-3d-realistic-design-element_363543-543.jpg?w=2000"
            boxShadow={'0px 5px 10px black'}
          />
        </WrapItem>
        <Text
          as="b"
          fontSize={"30px"}
          color={"white"}
          marginLeft={"10px"}
          marginTop={"20px"}
        >
          TO DO LIST
        </Text>
      </Box>
      {/*    <Box width={"85%"} height={"65%"} margin={"auto"}>
        <Button bg={"transparent"} marginBottom="10px">
          <BsListTask /> Todas las tareas
        </Button>
        <Button bg={"transparent"} marginBottom="10px">
          <BiTask />
          Tareas completadas
        </Button>
        <Button bg={"transparent"}>
          <BiTaskX />
          Tareas incompletas
        </Button>
      </Box> */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text as="b" marginLeft={"30px"} fontSize={"20px"}>
          {usuario}
        </Text>
        <Salir />
      </Box>
    </Box>
  );
};

export default Opciones;
