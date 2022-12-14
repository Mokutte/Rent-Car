import {
    Box,
    Text,
    Image,
    HStack,
    VStack,
    Pressable,
  } from "native-base";
  import Icon from "react-native-vector-icons/FontAwesome5";
  import { CarType } from "./../models/CarType"



export  const CarCart = (props : CarType) => {
  return (
    <Box bg="#fff" rounded="lg" px={3} >
        <HStack>
          <VStack mr={3}>
            <Image
              resizeMode={"contain"}
              h={130}
              w={200}
              source={{
                uri: props.image,
              }}
              alt="Car"
            ></Image>
          </VStack>
          <VStack rounded="lg" py={5}>
            <Text fontWeight={"bold"} fontSize={15}>{props.nameModel}</Text>
            <Text>{props.typefuel}</Text>
            <HStack alignItems={"center"}>
              {/* @ts-ignore */}
              <Icon name="star" />
              <Text ml={1}>{props.star}</Text>
            </HStack>
            <HStack><Text fontWeight={"bold"}>{props.price}</Text><Text>$ / день</Text></HStack>
          </VStack>
        </HStack>
      </Box>
  )
}