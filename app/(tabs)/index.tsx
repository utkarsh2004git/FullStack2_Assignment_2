import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>home</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default index

const styles = StyleSheet.create({})