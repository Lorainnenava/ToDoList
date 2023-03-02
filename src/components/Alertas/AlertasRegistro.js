import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import React from "react";

export const AccionesRegistrosExitoso = ({ userss }) => {
  return (
    <Box>
      {userss ? (
        <Alert
          status="success"
          width={"280px"}
          marginTop={"10px"}
          marginRight={"330px"}
          borderRadius={"20px"}
        >
          <AlertIcon />
          {userss?.msg}
        </Alert>
      ) : null}
    </Box>
  );
};

export const AccionesRegistrosError = ({ error }) => {
  return (
    <Box>
      {error ? (
        <Alert
          status="error"
          width={"320px"}
          marginTop={"10px"}
          marginRight={"250px"}
          borderRadius={"20px"}
        >
          <AlertIcon />
          {error?.data?.msg}
        </Alert>
      ) : null}
    </Box>
  );
};
