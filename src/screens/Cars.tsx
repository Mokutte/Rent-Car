import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Icon from "react-native-vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { CarType } from "../models/CarType";
import { Pressable } from "react-native";

const Cars = ({ route }: any) => {
  const [car, setCar] = useState<CarType>();

  useEffect(() => {
    axios
      .get(`http://192.168.0.18:3001/cars?id=${route?.params?.id}`)
      .then((response) => {
        setCar(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [route?.params?.id]);

  return (
    <SafeAreaView>
      <View rounded={"lg"} mx={"5"} mt={"10px"}>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          {/* @ts-ignore */}
          <Icon name={"chevron-thin-left"} size={30}></Icon>
          <Text fontSize={"25px"} fontWeight={"medium"}>
            Детали
          </Text>
          {/* @ts-ignore */}
          <Icon name={"dots-three-horizontal"} size={30}></Icon>
        </HStack>
        <VStack pt={"10"}>
          <HStack justifyContent={"space-between"}>
            <Text color={"#000000"} fontSize={"25px"} fontWeight={"bold"}>
              {car?.nameModel}
            </Text>
            <HStack alignItems={"center"}>
              {/* @ts-ignore */}
              <Icon size={20} name="star">
                {" "}
              </Icon>
              <Text fontSize={"20px"}>{car?.star}</Text>
            </HStack>
          </HStack>
          <Image
            justifyContent={"center"}
            alignItems={"center"}
            alt="Burger"
            resizeMode={"contain"}
            h={"300px"}
            w={"100%"}
            source={{
              uri: car?.image,
            }}
          />
        </VStack>
        <VStack>
          <VStack>
            <Text fontSize={"25px"} fontWeight={"medium"} mb={3}>
              Характеристики
            </Text>
            <HStack justifyContent={"space-between"} h={"80px"} w={"100%"}>
              <Button
                bg="#2b2b2b"
                size={85}
                rounded="lg"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text color={"#fff"} fontWeight={"medium"}>{car?.typefuel}</Text>
              </Button>
              <Button
                bg="#2b2b2b"
                size={85}
                rounded="lg"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text color={"#fff"} fontWeight={"medium"}>{car?.hp}</Text>
              </Button>
              <Button
                bg="#2b2b2b"
                size={85}
                rounded="lg"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text color={"#fff"} fontWeight={"medium"}>{car?.actuator}</Text>
              </Button>
              <Button
                bg="#2b2b2b"
                size={85}
                rounded="lg"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text color={"#fff"} fontWeight={"medium"}>{car?.actuator}</Text>
              </Button>
            </HStack>
          </VStack>
        </VStack>
        <VStack>
          <HStack>
            <Text>Местонахождение автомобиля</Text>
            <Text>Расстояние до авто</Text>
          </HStack>
          <Box></Box>
        </VStack>
        <HStack>
          <Text>{car?.price}</Text>
          <Button>Снять</Button>
        </HStack>
      </View>
    </SafeAreaView>
  );
};

export default Cars;
