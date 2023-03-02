import { Alert, AlertIcon, Box, Text } from '@chakra-ui/react';
import React from 'react'

export const AlertasTareasError = ({ error }) => {
  return (
    <Box>
      {error ? (
        <Alert
          status="error"
          width={"300px"}
          marginTop={"10px"}
          marginLeft={"1050px"}
          position={"absolute"}
          height={"40px"}
          borderRadius={"15px"}
        >
          <AlertIcon />
          <Text fontSize="15px">{error?.data?.msg}</Text>
        </Alert>
      ) : null}
    </Box>
  );
};

export const AlertasTareasExitosa = ({ base }) => {
  return (
    <Box>
      {base ? (
        <Alert
          status="success"
          width={"300px"}
          marginTop={"10px"}
          marginLeft={"1050px"}
          position={"absolute"}
          height={"40px"}
          borderRadius={"20px"}
        >
          <AlertIcon />
          {base?.msg}
        </Alert>
      ) : null}
    </Box>
  );
};