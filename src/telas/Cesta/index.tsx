import React from "react";
import { Image, Text } from "native-base";
import { Dimensions } from "react-native";

import imagemDeTopo from "../../../assets/images/topo.png";
const width = Dimensions.get("screen").width;

function Cesta() {
  return (
    <>
      <Image
        source={imagemDeTopo}
        alt="Imagem de cesta"
        width={"100%"}
        height={(578 / 768) * width}
      />
      <Text
        position={"absolute"}
        width={"full"}
        textAlign={"center"}
        lineHeight={26}
        fontSize={16}
        color={"white"}
        fontWeight={"bold"}
        padding={"4"}
      >
        Detalhe da Cesta
      </Text>
    </>
  );
}

export { Cesta };
