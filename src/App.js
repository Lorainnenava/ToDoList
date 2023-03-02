import { Box, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Lista from './components/Tasks/Lista';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/login/Login';
import Registro from './components/registro/Registro';
import Inicio from './components/web/Inicio'


function App() {

  return (
    <ChakraProvider>
      <Box width={"100%"} height={"100vh"}>
        <BrowserRouter>
          <Box width={"100%"} height={"100%"} bg={"#e0dfeb"}>
            <Routes>
              <Route path="/" element={<Inicio/>}/>
            </Routes>
            <Routes>
              <Route path="/Login" element={<Login />} />
            </Routes>
            <Routes>
              <Route path="/Registro" element={<Registro />} />
            </Routes>
            <Routes>
              <Route path="/ToDoList/:usuario" element={<Lista />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
