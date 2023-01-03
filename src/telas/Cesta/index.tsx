import React from "react";
import { Image } from "native-base";
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
    </>
  );
}

export { Cesta };
