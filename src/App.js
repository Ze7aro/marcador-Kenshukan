import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Routing from "./pages/routing/Routing";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routing />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
