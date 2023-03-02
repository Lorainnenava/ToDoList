import Tareas from "./Tareas";
import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import Modal from "../agregar/Modal";
import Opciones from "../menu/Opciones";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { usePostAgregarMutation } from "../../redux/Store";
import {
  AlertasTareasError, AlertasTareasExitosa 
} from "../Alertas/AlertasTareas";

export const Lista = () => {
  const [alerta1, setAlerta1] = useState(false);
  const [alertaa, setAlertaa] = useState(false);  
  const [alert, setAlert] = useState(false);
  const { usuario } = useParams();

  const [createDate, { data: base, error }] =
    usePostAgregarMutation();

  return (
    <Box
      width={"100%"}
      height={"100%"}
      bg={"#7c8bfb"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box width={"15%"} height={"100%"} bg={"#7c8bfb"}>
        <Opciones usuario={usuario} />
      </Box>
      <Box
        width={"83%"}
        height={"97%"}
        bg={"white"}
        borderRadius={"30px 30px"}
        boxShadow={"0 5px 10px 0"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        margin={"auto"}
      >
        <Box
          width={"95%"}
          height={"97%"}
          position={"relative"}
          overflowY="auto"
        >
          {alerta1 ? <AlertasTareasError error={error} /> : null}
          {alertaa ? <AlertasTareasExitosa base={base} /> : null}
          {alert ? (
            <Alert
              status="success"
              width={"300px"}
              marginTop={"10px"}
              marginLeft={"1050px"}
              position={"absolute"}
              height={"40px"}
              borderRadius={"15px"}
            >
              <AlertIcon />
              Tarea completada
            </Alert>
          ) : null}
          <Tareas setAlert={setAlert} />
        </Box>
        <Box
          width={"100%"}
          height={"10%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <Modal
            setAlerta={setAlerta1}
            createDate={createDate}
            setAlertaa={setAlertaa}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Lista;
