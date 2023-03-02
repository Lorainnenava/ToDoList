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
import { AiFillCloseCircle } from 'react-icons/ai';

const Eliminar = ({ Delete, data, _id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const eliminar = (_id) => {
    Delete({ _id, token: data[0].token });
    window.location.reload();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg={"transparent"}
        _hover={{ background: "transparent" }}
        marginTop='-25px'
      >
        <AiFillCloseCircle color={"black"} />
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
            Estas seguro que quieres eliminar esta tarea?
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={(e) => {
                e.preventDefault();
                eliminar(_id);
              }}
            >
              Si
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Eliminar;