import { SafeAreaView } from "react-native";
import { Box, Text, NativeBaseProvider, Input } from "native-base";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
