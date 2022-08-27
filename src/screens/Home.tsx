import axios from "axios";
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
  Pressable,
} from "native-base";
import { Keyboard } from "react-native";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CarCart } from "../components/CarCart";
import { CarType } from "./../models/CarType";

const Home = () => {
  const [cars, setCars] = useState<CarType[]>();
  const [value, setValue] = useState<string | undefined>();

  useEffect(() => {
    axios
      .get("http://192.168.0.18:3001/cars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const searchCar = (value: string | undefined) => {
    // Keyboard.dismiss()
    axios
      .get(`http://192.168.0.18:3001/cars?nameModel_like=${value}`)
      .then((response) => {
        
        setCars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View px={"5"} pt={70} flex={1}>
      <HStack justifyContent={"space-between"} pb={"20px"} pt={"10px"}>
        <VStack>
          <HStack>
            <Text color={"#646464"}>Твоя страна</Text>
          </HStack>
          <HStack alignItems={"center"}>
            <Icon name="location-arrow" size={15} color="#000000" />
            <Select
              color={"#484848"}
              fontWeight={"bold"}
              fontSize={"20px"}
              borderWidth={"0"}
              
              placeholder="Выберете страну"
              pb={"12.5px"}
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
            >
              <Select.Item label="Россия" value="ux" />
              <Select.Item label="Беларусияdsfgsd" value="web" />
              <Select.Item label="Армения" value="cross" />
              <Select.Item label="Грузия" value="ui" />
              <Select.Item label="Таджикистан" value="backend" />
            </Select>
          </HStack>
        </VStack>
        <Icon name="sync" size={50}></Icon>
      </HStack>

      <HStack alignItems={"center"} mb={"15px"} space={3}>
        <Input
        flex={1}
          bg={"#fff"}
          px={"20px"}
          py={"15px"}
          placeholder={"Выберете авто"}
          fontSize={"20px"}
          borderRadius={"10px"}
          borderWidth={"0"}
          onChangeText={setValue}
        />
        <Pressable onPress={() => searchCar(value)} p={"20px"} bg={"#fff"} rounded={"lg"}>
          <Icon name="search"/>
        </Pressable>
      </HStack>
      <Box>
        <ScrollView
          horizontal={true}
          height={"50px"}
          h={"96.5px"}
          showsHorizontalScrollIndicator={false}
          mb={"15px"}
          rounded="lg"
        >
          <Button
            variant={"unstyled"}
            bg="#d1d1d19f"
            _pressed={{ backgroundColor: "#24242449" }}
            w={"100px"}
            mx={"5px"}
            rounded="lg"
            justifyContent={"center"}
            alignItems={"center"}
            onPress={() => searchCar("BMW")}
          >
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/600px-BMW_logo_%28gray%29.svg.png",
                }}
                alt="BMW"
                size={60}
              />
          </Button>
          <Button
            bg="#d1d1d19f"
            _pressed={{ backgroundColor: "#24242449" }}
            w={"100px"}
            mx={"5px"}
            rounded="lg"
            justifyContent={"center"}
            alignItems={"center"}
            onPress={() => searchCar("MERCEDES")}
          >
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mercedes-Benz_Star.svg/800px-Mercedes-Benz_Star.svg.png",
              }}
              alt="Mercedes"
              size={60}
            />
          </Button>
          <Button
            bg="#d1d1d19f"
            _pressed={{ backgroundColor: "#24242449" }}
            w={"100px"}
            mx={"5px"}
            rounded="lg"
            justifyContent={"center"}
            alignItems={"center"}
            onPress={() => searchCar("AUDI")}
          >
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/196px-Audi-Logo_2016.svg.png",
              }}
              resizeMode={"contain"}
              alt="Audi"
              size={70}
            />
          </Button>
          <Button
            bg="#d1d1d19f"
            _pressed={{ backgroundColor: "#24242449" }}
            w={"100px"}
            mx={"5px"}
            rounded="lg"
            justifyContent={"center"}
            alignItems={"center"}
            onPress={() => searchCar("TESLA")}
          >
            <Image
              source={{
                uri: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG16.png",
              }}
              resizeMode={"contain"}
              alt="Tesla"
              size={60}
            />
          </Button>
          <Button
            bg="#d1d1d19f"
            _pressed={{ backgroundColor: "#24242449" }}
            w={"100px"}
            mx={"5px"}
            rounded="lg"
            justifyContent={"center"}
            alignItems={"center"}
            onPress={() => searchCar("BENTLEY")}
          >
            <Image
              source={{
                uri: "https://assets.stickpng.com/images/580b585b2edbce24c47b2c2c.png",
              }}
              resizeMode={"contain"}
              alt="Bentley"
              size={80}
              
            />
          </Button>
          <Button
            bg="#d1d1d19f"
            _pressed={{ backgroundColor: "#24242449" }}
            w={"100px"}
            mx={"5px"}
            rounded="lg"
            justifyContent={"center"}
            alignItems={"center"}
            onPress={() => searchCar("PORSCHE")}
          >
            <Image
              source={{
                uri: "https://logos-world.net/wp-content/uploads/2021/04/Porsche-Symbol.png",
              }}
              opacity={"0.8"}
              resizeMode={"contain"}
              alt="PORSCHE"
              size={100}
              
            />
          </Button>
        </ScrollView>
      </Box>
      <ScrollView
        showsVerticalScrollIndicator={false}
        rounded="lg"
        _contentContainerStyle={{}}
      >
        {cars?.map((cars) => (
          <CarCart
           key={cars.id}
            nameModel={cars.nameModel}
            hp={cars.hp}
            image={cars.image}
            desk={cars.desk}
            actuator={cars.actuator}
            price={cars.price}
            typefuel={cars.typefuel}
            star={cars.star}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
