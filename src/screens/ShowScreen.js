import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ShowScreen = ({ navigation }) => {
    navigation.getParam('id');
    console.log(navigation.getParam('id'))
    return (
        <View>
            <Text>Show Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
})

export default ShowScreen
