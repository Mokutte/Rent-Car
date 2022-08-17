<<<<<<< HEAD
import { SafeAreaView } from "react-native";
import { Box, Text, NativeBaseProvider, Input } from "native-base";
import Navigation from "./src/navigation/Navigation";
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  Box,
  Text,
  NativeBaseProvider,
  Input,
  Select,
  CheckIcon,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5"
>>>>>>> 65802f2bc300af92491f811f09f0044f62cfe831

export default function App() {
  return (
    <NativeBaseProvider>
<<<<<<< HEAD
      <Navigation />
=======
      <SafeAreaView style={{ backgroundColor: "#01271f" }}>
        <Box px={"5"} pt={"5"}>
        <Icon name="location-arrow" size={15} color="#ffffff" />
          <Text color={"#b2b2b2"}>Твоя страна дурачек блять</Text>
          <Select
            color={"#fff"}
            minWidth="200"
            fontWeight={"bold"}
            fontSize={"20px"}
            borderWidth={"0"}
            p={0}
            w={""}
            placeholder="Выберете страну"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
          >
            <Select.Item label="Россия" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <Box w={"100%"} h={"100%"} alignItems={"center"} >
            <Input
              bg={"#fff"}
              w={"100%"}
              px={"20px"}
              py={"15px"}
              placeholder={"Выберете авто"}
              fontSize={"20px"}
              borderRadius={"10px"}
            />
          </Box>
        </Box>
      </SafeAreaView>
>>>>>>> 65802f2bc300af92491f811f09f0044f62cfe831
    </NativeBaseProvider>
  );
}
