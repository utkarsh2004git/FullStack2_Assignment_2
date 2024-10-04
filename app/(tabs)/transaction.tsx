import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const transaction = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>transaction</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default transaction

const styles = StyleSheet.create({})