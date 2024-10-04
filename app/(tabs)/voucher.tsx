import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const voucher = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>voucher</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default voucher

const styles = StyleSheet.create({})