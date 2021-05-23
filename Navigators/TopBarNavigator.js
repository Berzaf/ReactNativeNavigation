import * as React from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Home() {
    return (
      <View style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: "#03cafc" 
          }}>
        <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>Home is here!</Text>
      </View>
    );
  }
  
  function Contact({ navigation }) {
    return (
      <View style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: "#c203fc" 
          }}>
        <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>Contact is here!</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  
  function About({ navigation }) {
    return (
      <View style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: "#48d969" 
          }}>
        <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>About is here!</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator 
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#e91e63",
                lableStyle: { fontSize: 12 },
                style: { backgroundColor : 'White', marginTop: insets.top}
            }} 
            >
                <Tab.Screen
                    name="Home" 
                    component={Home}
                    options={{ tabBarLabel: 'Home' }}
                />

                <Tab.Screen
                    name="Contact" 
                    component={Contact}
                    options={{ tabBarLabel: 'Contact' }}
                />

                <Tab.Screen
                    name="About" 
                    component={About}
                    options={{ tabBarLabel: 'About' }}
                />
            </Tab.Navigator>
    );
}

export default function TopBarNavigator() {
    return  <MyTabs />
    
}