import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Home() {
    return (
        <View style={{ flex: 1, justfyContent: "center", alignItems: "center", backgroundColor: '#03cafc'}}>
            <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: '800'}}>Home is here</Text>
        </View>
    )
}


function Contact({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#c203fc'}}>
            <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: '800'}}>Home is here</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    )
}

function About({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#48d969'}}>
            <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: '800'}}>About is here</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const Tab = createBottomTabNavigator();
function MyTabs() {
    return(
        <Tab.Navigator
            initalRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#e91e63'
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home} />
            <Tab.Screen 
                name="Contact"
                component={Contact}

            />
            <Tab.Screen 
                name="About"
                component={About}
            />

        </Tab.Navigator>
        
        
    )

}

export default function BottomTabNavigation() {
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>

    )
}