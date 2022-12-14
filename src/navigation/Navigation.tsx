import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//*  Screen
import Home from "../screens/Home";
import Cars from "../screens/Cars";
import Profile from "../screens/Profile";
import Notify from "../screens/Notify";
// * icon
import Ionicons from "react-native-vector-icons/Ionicons";
//* Stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
export default Navigation;

const StackNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
       <Tab.Screen
        name="Cars"
        component={Cars}
        options={{
          title: "Cars",
          tabBarLabel: "Cars",
          tabBarIcon: ({ color, size }) => (
            // @ts-ignore
            <Ionicons name="car-sport" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
             // @ts-ignore
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Notify"
        component={Notify}
        options={{
          tabBarLabel: "Notify",
          tabBarIcon: ({ color, size }) => (
             // @ts-ignore
            <Ionicons name="notifications" color={color} size={size} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
             // @ts-ignore
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
