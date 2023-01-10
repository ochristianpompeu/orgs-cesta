// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Vai cavalinho!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
import { NativeBaseProvider, Box, View, StatusBar } from "native-base";
import { Cesta } from "./src/telas/Cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Montserrat_400Regular,
  //   Montserrat_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <View/>;
  // }
  return (
    <NativeBaseProvider>
      <Box flex={1} safeArea>
        <StatusBar />
        <Cesta />
      </Box>
    </NativeBaseProvider>
  );
}
