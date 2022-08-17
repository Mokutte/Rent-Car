import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//*  Screen
import Home from "../screens/Home";
import Cars from "../screens/Cars";
import Profile from "../screens/Profile";
import Notify from "../screens/Notify";
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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cars" component={Cars} />
      <Tab.Screen name="Notify" component={Notify} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
