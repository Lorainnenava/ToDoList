import React from 'react'
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Salir = () => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      const cancelRef = React.useRef();
      const navigate= useNavigate();

          function salir(e) {
            e.preventDefault();
              navigate("/Login");
              localStorage.clear();
            navigate(0);
          }

  return (
    <>
      <Button
        onClick={onOpen}
        bg={"white"}
        _hover={{ background: "#ed9da1" }}
        width={"60px"}
        height={"60px"}
        borderRadius="30px"
        marginRight={"10px"}
      >
        <BiLogOut color="black" size={32} />
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            Estas seguro que quieres cerrar sesion?
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={salir}>
              Si
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default Salir