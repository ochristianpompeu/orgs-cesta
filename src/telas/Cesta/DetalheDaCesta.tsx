import React from "react";
import { Box, Heading, HStack, Image, Stack, Text, VStack } from "native-base";

import logoDaFazenda from "../../../assets/images/logo.png";

function DetalheDaCesta() {
  return (
    <Box paddingY={"2"} paddingX={"4"}>
      <Stack direction={"column"} space={"2"}>
        <Heading
          // fontFamily={"Montserrat_700Bold"}
          fontSize={"3xl"}
          color={"teal.900"}
        >
          Nome da Cesta
        </Heading>
        <HStack space={"2"} justifyContent={"flex-start"} alignItems={"center"}>
          <Image
            rounded={"lg"}
            source={logoDaFazenda}
            fallbackSource={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Imagem da fazenda"
            size={"xs"}
          />
          <Heading
            // fontFamily={"Montserrat_400Regular"}
            lineHeight={"lg"}
            fontSize={"lg"}
            color={"teal.700"}
          >
            Nome da Fazenda
          </Heading>
        </HStack>
        <VStack>
          <Text lineHeight={"lg"} fontSize={"lg"} color={"gray.500"}>
            Uma cesta com produtos selecionados cuidadosamente da fazenda direto
            para sua cozinha
          </Text>
        </VStack>
        <VStack>
          <Text
            lineHeight={"3xl"}
            fontSize={"3xl"}
            fontWeight={"extrabold"}
            color={"teal.700"}
          >
            R$ 40,00
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
}

export { DetalheDaCesta };
