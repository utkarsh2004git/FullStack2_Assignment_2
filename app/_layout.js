import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack >
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='(tabs)/home' />
        <Stack.Screen name='(tabs)/article' />
        <Stack.Screen name='(tabs)/profile' />
        <Stack.Screen name='(tabs)/transaction' />
        <Stack.Screen name='(tabs)/voucher' />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})