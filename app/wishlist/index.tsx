import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { Feather, Ionicons } from '@expo/vector-icons'
import { forYouData } from '../helper/forYou'

const index = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <Pressable onPress={()=>router.back()}>
                                <Ionicons name="chevron-back" size={24} color="black" />
                            </Pressable>
                            <Text>WISHLIST</Text>
                        </View>
                    <View style={styles.headerRight}>
                    <Feather name="shopping-cart" size={24} color="black"/>
                    <Pressable onPress={()=>router.push("/notification")}>  
                        <Feather name="bell" size={24} color="black"  />
                    </Pressable>
                    </View>
                </View>

                <FlatList
                    data={forYouData}
                    
                    renderItem={({ item }) => (
                        <View style={styles.forYouCard}>
                        <Image source={item.image} style={styles.forYouImage} />
                        <Text style={{ fontSize: 10, fontWeight: "600" }}>{item.title}</Text>
                        <Text style={{ fontSize: 9 }}>{item.category}</Text>
                        <Text style={{ fontSize: 10, color: "#F26522" }}>Rs {item.price}</Text>
                        </View>
                    )}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    style={{marginVertical:16,}}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default index

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: "white"
      },
    title:{
        fontSize:30,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
    },
    headerLeft:{
        flexDirection:"row",
        alignItems:"center"
    },
    headerRight:{        
        flexDirection:"row",
        alignItems:"center",
        gap:10,
    },
    forYouCard: {
        marginHorizontal: 5,
        width: 160,
        marginVertical: 5,
        gap: 3,
      },
      forYouImage: {
        height: 200,
        width: "100%",
      },
})