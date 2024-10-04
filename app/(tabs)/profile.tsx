import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const profile = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>profile</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default profile

const styles = StyleSheet.create({})