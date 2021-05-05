import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem

} from '@react-navigation/drawer';
import Contact from '../Screens/Contact';
import Home from '../Screens/Home';

function CustomDrawerContent(props) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.drawerHeader}>
                <Text style={styles.drawerHeaderText}>Drawer Menu</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem 
                    label="Close drawer"
                    onPress={() => props.navigation.closeDrawer()}
                />
            </DrawerContentScrollView>
        </ScrollView>
    );
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
    return (
        <Drawer.Navigator backBehavior="history" drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#03cafc',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
})
export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
        
    )
}
