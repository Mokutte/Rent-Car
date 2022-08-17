import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Box, Text, NativeBaseProvider, Input } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider >
      <Box justifyContent={"center"} bg={"#01271f"} w={"100%"} h={"100%"}>
        <Text color={"#fff"} textAlign={"center"} >Open up App.tsx to start working on your app!</Text>
        <Input bg={"#fff"} w={"50%"}/>
      </Box>
    </NativeBaseProvider>
  );
}
