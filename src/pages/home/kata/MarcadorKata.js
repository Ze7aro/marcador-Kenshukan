import React, { useState } from "react";
import {
  VStack,
  HStack,
  Box,
  Img,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logoKnk-removebg-preview.png";

const KataScoreboard = () => {
  const [tatami, setTatami] = useState("");
  const [event, setEvent] = useState("Kata");
  const [judges, setJudges] = useState(Array(5).fill(""));
  const [lowScore, setLowScore] = useState("");
  const [highScore, setHighScore] = useState("");
  const [score, setScore] = useState("");
  const [base, setBase] = useState();
  const navigate = useNavigate();

  const calc = () => {
    const sortedJudges = judges
      .filter((judge) => judge !== "")
      .sort((a, b) => a - b);

    if (judges.length === 3) {
      let total = judges.reduce((sum, judge) => sum + parseFloat(judge), 0);
      setScore(total);
    } else if (sortedJudges.length === 5 || sortedJudges.length === 7) {
      const total = sortedJudges
        .slice(1, -1)
        .reduce((sum, judge) => sum + parseFloat(judge), 0);
      const low = sortedJudges[0];
      const high = sortedJudges[sortedJudges.length - 1];

      setLowScore(low);
      setHighScore(high);
      setScore(total);
    } else {
      alert("Complete todos los Puntajes de los Jueces.");
    }
  };

  const handleChange = (index, value) => {
    const updatedJudges = [...judges];
    updatedJudges[index] = value.length === 1 ? `${value}.` : value;
    setJudges(updatedJudges);
  };

  const clearAll = () => {
    setTatami("");
    setEvent("Kata");
    setJudges(Array(5).fill(""));
    setLowScore("");
    setHighScore("");
    setScore("");
  };

  return (
    <VStack w="100%" bg="#2C5282" h="100vh" p={3}>
      <HStack w="100%" justifyContent="space-between">
        <Box bg="white" borderRadius="50%" placeSelf="center">
          <Img src={Logo} alt="Logo Kenshukan" boxSize="220px" />
        </Box>
        <VStack>
          <HStack w="100%" justifyContent="space-around">
            <Text>Categoria:</Text>
            <Input
              type="number"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            />

            <Text>Shiai-jo:</Text>
            <Input
              type="text"
              value={tatami}
              onChange={(e) => setTatami(e.target.value)}
            />
            <Button size="lg" onClick={clearAll}>
              Limpiar
            </Button>
          </HStack>
        </VStack>
        <Button placeSelf="start" onClick={() => navigate(-1)}>
          Volver
        </Button>
      </HStack>

      <HStack>
        <Text fontWeight="bold">PUNTAJE MEDIO:</Text>
        <Select
          w="100px"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        >
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </Select>
        <Button size="lg" onClick={() => setJudges(Array(3).fill(""))}>
          3 Jueces
        </Button>
        <Button size="lg" onClick={() => setJudges(Array(5).fill(""))}>
          5 Jueces
        </Button>
      </HStack>

      <HStack>
        {judges.map((judge, index) => (
          <FormControl key={index}>
            <FormLabel textAlign="center" color="white">{`JUEZ ${
              index === 0 ? "PRINCIPAL" : index
            }`}</FormLabel>
            <Input
              type="text"
              value={judge}
              maxLength="3"
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </FormControl>
        ))}
      </HStack>
      <Button onClick={calc}>Calcular</Button>
      <HStack w="100%">
        {judges.length !== 3 && (
          <FormControl>
            <FormLabel textAlign="center" fontWeight="bold" fontSize="30px">
              Se Eliminan
            </FormLabel>
            <HStack>
              <Text fontWeight="bold">Menor:</Text>
              <Input
                w="2xs"
                type="text"
                textAlign="center"
                value={lowScore}
                readOnly
              />
              <Text fontWeight="bold">Mayor:</Text>
              <Input
                w="2xs"
                type="text"
                textAlign="center"
                value={highScore}
                readOnly
              />
            </HStack>
          </FormControl>
        )}
        <FormControl>
          <FormLabel fontWeight="bold" fontSize="30px">
            Puntaje Final:
          </FormLabel>

          <Input type="text" value={score} readOnly />
        </FormControl>
      </HStack>
    </VStack>
  );
};

export default KataScoreboard;
