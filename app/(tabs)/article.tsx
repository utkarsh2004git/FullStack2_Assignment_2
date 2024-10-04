import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const article = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>article</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default article

const styles = StyleSheet.create({})