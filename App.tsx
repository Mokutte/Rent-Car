import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView} from "react-native";
import { Box, Text, NativeBaseProvider, Input} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
        <SafeAreaView style={{backgroundColor: "#01271f"}}>
        <Box w={"100%"} h={"100%"} alignItems={"center"} px={5}>
          <Input bg={"#fff"} w={"100%"} px={"20px"} py={"15px"} placeholder={"Search your car"} fontSize={"20px"} borderRadius={"10px"}  />
        </Box>
        </SafeAreaView>
    </NativeBaseProvider> 
  );
}
