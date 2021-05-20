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


function Contact({ Navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#c203fc'}}>
            <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: '800'}}>Home is here</Text>
            <Button title="Go Back" onPress={() => Navigation.goBack()} />
        </View>
    )
}

function About({ Navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#48d969'}}>
            <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: '800'}}>About is here</Text>
            <Button title="Go Back" onPress={() => Navigation.goBack()} />
        </View>
    )
}

function MyTabs() {
    return(
        <View></View>
        
    )

}

export default function TabNavigation() {
    return(

    )
}