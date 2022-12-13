import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Perfil from './src/pages/Perfil/index.js';
import Config from './src/pages/Config/index.js';

function Drawers() {
  <Drawer.Navigator initialRouteName="Settings">
    <Drawer.Screen name="Config" component={Config} />
  </Drawer.Navigator>
}

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#328ECB" barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />

      <Tab.Screen name="Perfil" component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
