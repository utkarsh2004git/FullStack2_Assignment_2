import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'
import { notiData } from '../helper/notification'
const index = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <Pressable onPress={()=>router.back()}>
                                <Ionicons name="chevron-back" size={24} color="black" />
                            </Pressable>
                            <Text>NOTIFICATION</Text>
                        </View>
                    <View style={styles.headerRight}>
                        <Ionicons name="checkmark-done-sharp" size={24} color="#F26522" />
                        <Text style={{ color:"#F26522",fontSize:12}}>Mark as read</Text>
                    </View>
                </View>
                <View style={styles.notiContainer}>
                    <FlatList
                        data={notiData}
                        renderItem={({item})=>(
                            <View style={[styles.notification,!item.isRead ? styles.unreadNotification : styles.readNotification]}>
                                {!item.isRead?<Entypo name="dot-single" size={30} color="#F26522" />:""}
                                <View style={{flex:1,gap:3}}>
                                    <Text style={{fontSize:9}}>{item.time}</Text>
                                    <Text style={{fontWeight:"600",fontSize:12}}>{item.title}</Text>
                                    <Text style={{fontSize:11,flexWrap:'wrap'}}>{item.data}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
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
        justifyContent:"space-between"
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
    notiContainer:{
        marginVertical:16,
        flex:1,
    },
    notification:{
        flexDirection:"row",
        marginVertical:3,
        width:"100%",
        padding:3,
        paddingVertical:10,
        alignItems: 'flex-start',
        borderRadius:10,
        borderWidth:2,
        borderColor:"#FFF0E4"
    },
    unreadNotification:{
        backgroundColor:"#FFF0E4"
    },
    readNotification:{

    }
})