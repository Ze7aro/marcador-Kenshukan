import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Img,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
  Card,
  CardHeader,
  CardBody,
  Box,
} from "@chakra-ui/react";
import Logo from "../../../assets/logoKnk-removebg-preview.png";
import Bell from "../../../assets/Sounds/bell3.wav";
import { useNavigate } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";
import { BsCircleFill, BsCircle } from "react-icons/bs";
import ShiroBelt from "../../../assets/shiroStill.gif";
import AkaBelt from "../../../assets/akaStill.gif";

const MarcadorKumite = () => {
  let aka = {
    id: 2,
    cinto: "aka",
    nombre: "",
    color: "#ff0000",
  };
  let shiro = {
    id: 1,
    cinto: "shiro",
    nombre: "",
    color: "#ffffff",
  };
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [tiempoInicial, setTiempoInicial] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [temporizadorIniciado, setTemporizadorIniciado] = useState(false);
  const [shiroWazari, setShiroWazari] = useState([]);
  const [shiroIppon, setShiroIppon] = useState([]);
  const [akaIppon, setAkaIppon] = useState([]);
  const [akaWazari, setAkaWazari] = useState([]);
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const [shirokinshi, setShirokinshi] = useState(false);
  const [shirokinshiNi, setShirokinshiNi] = useState(false);
  const [shirokinshiChui, setShirokinshiChui] = useState(false);
  const [shirokinshiHansoku, setShirokinshiHansoku] = useState(false);
  const [shiroatenai, setShiroatenai] = useState(false);
  const [shiroatenaiChui, setShiroatenaiChui] = useState(false);
  const [shiroatenaiHansoku, setShiroatenaiHansoku] = useState(false);
  const [akakinshi, setAkakinshi] = useState(false);
  const [akakinshiNi, setAkakinshiNi] = useState(false);
  const [akakinshiChui, setAkakinshiChui] = useState(false);
  const [akakinshiHansoku, setAkakinshiHansoku] = useState(false);
  const [akaatenai, setAkaatenai] = useState(false);
  const [akaatenaiChui, setAkaatenaiChui] = useState(false);
  const [akaatenaiHansoku, setAkaatenaiHansoku] = useState(false);
  const [shiroShikaku, setShiroShikaku] = useState(false);
  const [shiroKiken, setShiroKiken] = useState(false);
  const [akaShikaku, setAkaShikaku] = useState(false);
  const [akaKiken, setAkaKiken] = useState(false);

  useEffect(() => {
    if (tiempoRestante === 30) {
      sonarCampana(); // Llamar a la función que hace sonar la campana
    }
  }, [tiempoRestante]);

  useEffect(() => {
    if (tiempoRestante === 0 && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [tiempoRestante, intervalId]);

  const convertirAMinutosYSegundos = (tiempo) => {
    const minutos = Math.floor(tiempo / 60);
    const segundos = (tiempo % 60).toString().padStart(2, "0");
    return { minutos, segundos };
  };

  const iniciarTemporizador = (tiempoSeleccionado) => {
    if (intervalId) return; // Evitar iniciar otro temporizador si ya está en marcha

    setTemporizadorIniciado(true);

    const interval = setInterval(() => {
      setTiempoRestante((prevTiempoRestante) => prevTiempoRestante - 1);
    }, 1000);

    setIntervalId(interval);
  };

  const handleAkaNoKachi = () => {};
  const handleShiroNoKachi = () => {};

  const detenerTemporizador = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTemporizadorIniciado(false);
  };

  const reanudarTemporizador = () => {
    if (intervalId) return; // Evitar iniciar otro temporizador si ya está en marcha

    const interval = setInterval(() => {
      setTiempoRestante((prevTiempoRestante) => prevTiempoRestante - 1);
    }, 1000);

    setIntervalId(interval);
  };
  const seleccionarTiempo = (tiempoSeleccionado) => {
    setTiempoRestante(tiempoSeleccionado);
    setTiempoInicial(tiempoSeleccionado);
  };

  const reiniciarTemporizador = () => {
    setTiempoRestante(tiempoInicial);
    setTemporizadorIniciado(false);
  };

  function resetAll() {
    setAkaIppon([]);
    setAkaKiken(false);
    setAkaShikaku(false);
    setAkaWazari([]);
    setAkaatenai(false);
    setAkaatenaiChui(false);
    setAkaatenaiHansoku(false);
    setAkakinshi(false);
    setAkakinshiChui(false);
    setAkakinshiHansoku(false);
    setAkakinshiNi(false);
    setIntervalId(null);
    setShiroIppon([]);
    setShiroKiken(false);
    setShiroShikaku(false);
    setShiroWazari([]);
    setShiroatenai(false);
    setShiroatenaiChui(false);
    setShiroatenaiHansoku(false);
    setShirokinshi(false);
    setShirokinshiChui(false);
    setShirokinshiHansoku(false);
    setShirokinshiNi(false);
    setTemporizadorIniciado(false);
    setTiempoInicial(0);
    setTiempoRestante(0);
  }

  const { minutos, segundos } = convertirAMinutosYSegundos(tiempoRestante);

  const sonarCampana = () => {
    audioRef.current.play();
  };
  return (
    <Stack
      w="100%"
      h="100vh"
      bg="#2C5282"
      direction="column"
      alignItems="center"
      p={3}
    >
      <HStack w="100%" justifyContent="space-between">
        <Box bg="white" borderRadius="50%">
          <Img src={Logo} alt="Logo Kenshukan" boxSize="220px" />
        </Box>
        <FormControl w="sm">
          <FormLabel>Categoria</FormLabel>
          <InputGroup size="md">
            <Input placeholder="Kumite" value="Kumite" />
            <InputRightAddon>Area 1</InputRightAddon>
          </InputGroup>
          <Input placeholder="A" value="A" />
        </FormControl>
        <VStack>
          <Button onClick={() => navigate(-1)}>Volver</Button>
          <Button onClick={() => seleccionarTiempo(180)}>3:00</Button>
          <Button onClick={() => seleccionarTiempo(120)}>2:00</Button>
          <Button onClick={() => seleccionarTiempo(90)}>1:30</Button>
        </VStack>
      </HStack>
      <HStack w="100%" justifyContent="space-around">
        <Card w="lg">
          <CardHeader bg="black" placeContent="center">
            <Img src={AkaBelt} alt="Cinto Rojo" />
            <Text>{aka.nombre}</Text>
          </CardHeader>

          <CardBody bg={aka.color}>
            <HStack w="100%">
              <Box
                boxSize={50}
                w="70%"
                border="1px solid black"
                h="90px"
                placeContent="center"
              >
                <HStack p={3}>
                  {akaWazari.map((e) => {
                    return <BsCircle fontSize="24px" />;
                  })}
                </HStack>
                <HStack p={3}>
                  {akaIppon.map((e) => {
                    return <BsCircleFill fontSize="24px" />;
                  })}
                </HStack>
              </Box>
              <HStack spacing={5}>
                <VStack>
                  <Button
                    variant="link"
                    onClick={() => setAkaWazari([...akaWazari, []])}
                  >
                    Wazari
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => setAkaIppon([...akaIppon, []])}
                    isDisabled={akaIppon.length === 3}
                  >
                    Ippon
                  </Button>
                  <Button variant="link">Hantei</Button>
                </VStack>
                <VStack>
                  <Button variant="link" onClick={() => setAkaShikaku(true)}>
                    Shikaku
                  </Button>
                  <Button variant="link" onClick={() => setAkaKiken(true)}>
                    Kiken
                  </Button>
                </VStack>
              </HStack>
            </HStack>
            <HStack py={2}>
              <Text fontWeight="bold">Advertencias</Text>
              <ButtonGroup>
                <Button
                  onClick={() => setAkakinshi(true)}
                  variant={akakinshi === false ? "link" : "outline"}
                >
                  {akakinshi === false ? "Kinshi" : <RiCloseCircleLine />}
                </Button>
                <Button
                  onClick={() => setAkakinshiNi(true)}
                  variant={akakinshiNi === false ? "link" : "outline"}
                >
                  {akakinshiNi === false ? "Kinshi Ni" : <RiCloseCircleLine />}
                </Button>
                <Button
                  onClick={() => setAkakinshiChui(true)}
                  variant={akakinshiChui === false ? "link" : "outline"}
                >
                  {akakinshiChui === false ? (
                    "Kinshi Chui"
                  ) : (
                    <RiCloseCircleLine />
                  )}
                </Button>
                <Button
                  onClick={() => setAkakinshiHansoku(true)}
                  variant={akakinshiHansoku === false ? "link" : "outline"}
                >
                  {akakinshiHansoku === false ? (
                    "Kinshi Hansoku"
                  ) : (
                    <RiCloseCircleLine />
                  )}
                </Button>
              </ButtonGroup>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Faltas</Text>
              <ButtonGroup>
                <Button
                  onClick={() => setAkaatenai(true)}
                  variant={akaatenai === false ? "link" : "outline"}
                >
                  {akaatenai === false ? "Atenai" : <RiCloseCircleLine />}
                </Button>
                <Button
                  onClick={() => setAkaatenaiChui(true)}
                  variant={akaatenaiChui === false ? "link" : "outline"}
                >
                  {akaatenaiChui === false ? (
                    "Atenai Chui"
                  ) : (
                    <RiCloseCircleLine />
                  )}
                </Button>
                <Button
                  onClick={() => {
                    setAkaatenaiHansoku(true);
                    handleShiroNoKachi();
                  }}
                  variant={akaatenaiHansoku === false ? "link" : "outline"}
                >
                  {akaatenaiHansoku === false ? (
                    "Atenai Hansoku"
                  ) : (
                    <RiCloseCircleLine />
                  )}
                </Button>
              </ButtonGroup>
            </HStack>
            <HStack>
              <FormControl>
                <FormLabel textAlign="center">Descalificacion</FormLabel>
                <Input value={akaShikaku === true ? "X" : ""} readOnly />
              </FormControl>
              <FormControl>
                <FormLabel textAlign="center">Abandono / Renuncia</FormLabel>
                <Input value={akaKiken === true ? "X" : ""} readOnly />
              </FormControl>
            </HStack>
          </CardBody>
        </Card>
        <VStack>
          <Input
            value={`${minutos}:${segundos}`}
            textAlign="center"
            w="200px"
            h=""
            fontSize="72px"
          />

          <Button onClick={iniciarTemporizador}>Iniciar</Button>

          <ButtonGroup>
            <Button onClick={detenerTemporizador}>Detener</Button>
            <Button onClick={reanudarTemporizador}>Reanudar</Button>
            <Button onClick={reiniciarTemporizador}>Reiniciar</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={resetAll}>Reiniciar Todo</Button>
            <Button onClick={() => sonarCampana()}>Probar Campana</Button>
            <audio ref={audioRef}>
              <source src={Bell} type="audio/wav" />
            </audio>
          </ButtonGroup>
        </VStack>
        <Card w="lg">
          <CardHeader w="100%" bg="black">
            <Img src={ShiroBelt} alt="Cinto Blanco" />
            <Text>{shiro.nombre}</Text>
          </CardHeader>

          <CardBody bg={shiro.color}>
            <HStack w="100%">
              <Box
                boxSize={50}
                w="70%"
                border="1px solid black"
                h="90px"
                placeContent="center"
              >
                <HStack p={3}>
                  {shiroWazari.map((e) => {
                    return <BsCircle fontSize="24px" />;
                  })}
                </HStack>

                <HStack p={3}>
                  {shiroIppon.map((e) => {
                    return <BsCircleFill fontSize="24px" />;
                  })}
                </HStack>
              </Box>
              <HStack spacing={5}>
                <VStack>
                  <Button
                    variant="link"
                    onClick={() => setShiroWazari([...shiroWazari, []])}
                  >
                    Wazari
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => setShiroIppon([...shiroIppon, []])}
                    isDisabled={shiroIppon.length === 3}
                  >
                    Ippon
                  </Button>
                  <Button variant="link">Hantei</Button>
                </VStack>
                <VStack>
                  <Button variant="link" onClick={() => setShiroShikaku(true)}>
                    Shikaku
                  </Button>
                  <Button variant="link" onClick={() => setShiroKiken(true)}>
                    Kiken
                  </Button>
                </VStack>
              </HStack>
            </HStack>
            <HStack py={2}>
              <Text fontWeight="bold">Advertencias</Text>
              <ButtonGroup>
                <Button
                  onClick={() => setShirokinshi(true)}
                  variant={shirokinshi === false ? "link" : "outline"}
                >
                  {shirokinshi === false ? "Kinshi" : <RiCloseCircleLine />}
                </Button>
                <Button
                  onClick={() => setShirokinshiNi(true)}
                  variant={shirokinshiNi === false ? "link" : "outline"}
                >
                  {shirokinshiNi === false ? (
                    "Kinshi Ni"
                  ) : (
                    <RiCloseCircleLine />
                  )}
                </Button>
                <Button
                  onClick={() => setShirokinshiChui(true)}
                  variant={shirokinshiChui === false ? "link" : "outline"}
                >
                  {shirokinshiChui === false ? (
                    "Kinshi Chui"
                  ) : (
                    <RiCloseCircleLine />
                  )}
                </Button>
                <Button
                  onClick={() => setShirokinshiHansoku(true)}
                  variant={shirokinshiHansoku === false ? "link" : "outline"}
                >
                  {shirokinshiHansoku === false ? (
                    "Kinshi Hansoku"
                  ) : (
                    <RiCloseCircleLine />
                  )}
                </Button>
              </ButtonGroup>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Faltas</Text>
              <ButtonGroup>
                <Button
                  onClick={() => setShiroatenai(true)}
                  variant={shiroatenai === false ? "link" : "outline"}
                >
                  {shiroatenai === false ? "Atenai" : <RiCloseCircleLine />}
                </Button>
                <Button
                  onClick={() => setShiroatenaiChui(true)}
                  variant={shiroatenaiChui === false ? "link" : "outline"}
                >
                  {shiroatenaiChui === false ? (
                    "Atenai Chui"
                  ) : (
                    <RiCloseCircleLine />
                  )}
                </Button>
                <Button
                  onChange={() => {
                    setShiroatenaiHansoku(true);
                    handleAkaNoKachi();
                  }}
                  variant={shiroatenaiHansoku === false ? "link" : "outline"}
                >
                  {shiroatenaiHansoku === false ? (
                    "Atenai Hansoku"
                  ) : (
                    <RiCloseCircleLine />
                  )}
                </Button>
              </ButtonGroup>
            </HStack>
            <HStack>
              <FormControl>
                <FormLabel textAlign="center">Descalificacion</FormLabel>
                <Input value={shiroShikaku === true ? "X" : ""} readOnly />
              </FormControl>
              <FormControl>
                <FormLabel textAlign="center">Abandono / Renuncia</FormLabel>
                <Input value={shiroKiken === true ? "X" : ""} readOnly />
              </FormControl>
            </HStack>
          </CardBody>
        </Card>
      </HStack>
    </Stack>
  );
};

export default MarcadorKumite;
