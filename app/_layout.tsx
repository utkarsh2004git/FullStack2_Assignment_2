import { StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack > 

      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
