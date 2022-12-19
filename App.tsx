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
import { NativeBaseProvider, Box } from "native-base";
import { Cesta } from "./src/telas/Cesta";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems={"center"} justifyContent={"center"}>
        <Cesta />
      </Box>
    </NativeBaseProvider>
  );
}
