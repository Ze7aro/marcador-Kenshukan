import {
  HStack,
  VStack,
  Button,
  Heading,
  Img,
  Slide,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../../assets/logoKnk-removebg-preview.png";
import Kumite from "../../assets/kumite.ico";
import Kata from "../../assets/kata.ico";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const loading = () => {
    setLoad(true);
    return (
      <>
        <Slide direction="left" in={load} style={{ zIndex: 10 }}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          ></Box>
        </Slide>
        <Slide direction="rigth" in={load} style={{ zIndex: 10 }}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          ></Box>
        </Slide>
      </>
    );
  };

  return (
    <VStack w="100%" bg="#2C5282" h="100vh">
      <HStack w="100%" justifyContent="space-around" p={3}>
        <Button
          w="200px"
          size="lg"
          onClick={() => {
            loading();
            navigate("/kata");
          }}
        >
          <Img src={Kata} boxSize={10} />
          Kata
        </Button>
        <Heading color="#ffffff" fontWeight="semibold">
          Marcador
        </Heading>
        <Button
          w="200px"
          size="lg"
          onClick={() => {
            loading();
            navigate("/kumite");
          }}
        >
          Kumite
          <Img src={Kumite} boxSize={10} />
        </Button>
      </HStack>
      <HStack w="100%" h="100%" placeContent="center">
        <Box bg="white" borderRadius="50%">
          <Img src={Logo} alt="Logo" boxSize="300px" />
        </Box>
      </HStack>
    </VStack>
  );
};

export default Dashboard;
