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
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

const Home = () => {
  return (
    <View px={"5"} pt={"5"} w={"100%"}>
      <HStack justifyContent={"space-between"} pb={"20px"} pt={"10px"}>
        <VStack>
          <HStack>
            <Text color={"#646464"}>Твоя страна дурачек блять</Text>
          </HStack>
          <HStack alignItems={"center"}>
            <Icon name="location-arrow" size={15} color="#000000" />
            <Select
              color={"#484848"}
              fontWeight={"bold"}
              fontSize={"20px"}
              borderWidth={"0"}
              minWidth={"180px"}
              placeholder="Выберете страну"
              pb={"12.5px"}
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
            >
              <Select.Item label="Россия" value="ux" />
              <Select.Item label="Беларусия" value="web" />
              <Select.Item label="Армения" value="cross" />
              <Select.Item label="Грузия" value="ui" />
              <Select.Item label="Таджикистан" value="backend" />
            </Select>
          </HStack>
        </VStack>
        <Icon name="sync" size={50}></Icon>
      </HStack>

      <Box alignItems={"center"}>
        <Input
          bg={"#fff"}
          px={"20px"}
          py={"15px"}
          placeholder={"Выберете авто"}
          fontSize={"20px"}
          borderRadius={"10px"}
          mb={"15px"}
        />
      </Box>

      <ScrollView horizontal={true} height={"50px"} h={"96.5px"} showsHorizontalScrollIndicator={false} >
        <Box bg="#d1d1d19f" w={"100px"} mx={"5px"} rounded="lg" justifyContent={"center"} alignItems={"center"}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/600px-BMW_logo_%28gray%29.svg.png",
            }}
            alt="BMW"
            size={60}
          />
        </Box>
        <Box bg="#d1d1d19f" w={"100px"} mx={"5px"} rounded="lg" justifyContent={"center"} alignItems={"center"}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mercedes-Benz_Star.svg/800px-Mercedes-Benz_Star.svg.png",
            }}
            alt="Mercedes"
            size={60}
          />
        </Box>
        <Box bg="#d1d1d19f" w={"100px"} mx={"5px"} rounded="lg" justifyContent={"center"} alignItems={"center"} >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/196px-Audi-Logo_2016.svg.png",
            }}
            resizeMode={"contain"}
            alt="Audi"
            size={70}
            
          />
        </Box>
        <Box bg="#d1d1d19f" w={"100px"} mx={"5px"} rounded="lg" justifyContent={"center"} alignItems={"center"}>
          <Image
            source={{
              uri: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG16.png",
            }}
            resizeMode={"contain"}
            alt="Tesla"
            size={60}
          />
        </Box>
        <Box bg="#d1d1d19f" w={"100px"} mx={"5px"} rounded="lg" justifyContent={"center"} alignItems={"center"}>
          <Image
            source={{
              uri: "https://assets.stickpng.com/images/580b585b2edbce24c47b2c2c.png",
            }}
            resizeMode={"contain"}
            alt="Bentley"
            size={80}
          />
        </Box>
        <Box bg="#d1d1d19f" w={"100px"} mx={"5px"} rounded="lg" justifyContent={"center"} alignItems={"center"}>
          <Image
            source={{
              uri: "https://logos-world.net/wp-content/uploads/2021/04/Porsche-Symbol.png",
            }}
            opacity={"0.8"}
            resizeMode={"contain"}
            alt="BMW"
            size={100}
          />
        </Box>
      </ScrollView>
    </View>
  );
};

export default Home;
