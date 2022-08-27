import React from "react";
import {
  Box,
  Text,
  Input,
  Image,
  Select,
  CheckIcon,
  HStack,
  VStack,
  ScrollView,
  View,
  Button,
} from "native-base";
import Icon from "react-native-vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";

const Cars = () => {
  return (
    <SafeAreaView>
      <View rounded={"lg"} mx={"5"}>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Icon name={"chevron-thin-left"} size={35}></Icon>
          <Text fontSize={"20px"}> Details</Text>
          <Icon name={"dots-three-horizontal"} size={35}></Icon>
        </HStack>
        <HStack>
          <VStack>
            <Text>Name Car</Text>
            <Text>Stars</Text>
          </VStack>
          <Image alt="Burger" />
        </HStack>
        <VStack>
          <HStack>
            <Text>Характеристики</Text>
            <Box>
              <Box>Максималка</Box>
              <Box>еще</Box>
              <Box>езе</Box>
              <Box>е</Box>
            </Box>
          </HStack>
        </VStack>
        <VStack>
          <HStack>
            <Text>Местонахождение автомобиля</Text>
            <Text>Расстояние до авто</Text>
          </HStack>
          <Box></Box>
        </VStack>
        <HStack>
          <Text>Стоимость поездки</Text>
          <Button>Rent</Button>
        </HStack>
      </View>
    </SafeAreaView>
  );
};

export default Cars;
