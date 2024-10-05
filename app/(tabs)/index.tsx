import { Button, FlatList, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { topSliderData } from '../helper/topSlider';
import { forYouData } from '../helper/forYou';
import { Link, useRouter } from 'expo-router';

const Index = () => {
  const walletMoney = "1.000.000";
  const router=useRouter();
  const renderHeader = () => (
    <View>
      <View style={styles.topBar}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sport Shoes</Text>
          <View style={styles.headerIcons}>
            <Pressable onPress={()=>router.push("/wishlist")}>
              <FontAwesome name="heart-o" size={24} color="black" style={styles.headerIcon} />
            </Pressable>
            <Feather name="shopping-cart" size={24} color="black" style={styles.headerIcon} />
            <Pressable onPress={()=>router.push("/notification")}>
              <Feather name="bell" size={24} color="black" style={styles.headerIcon} />
            </Pressable>
          </View>
        </View>
        <View style={styles.searchHeader}>
          <TextInput
            placeholder="Search items"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.walletContainer}>
        <View style={styles.walletLeft}>
          <Text style={styles.walletSimpleText}>Wallet balance</Text>
          <TouchableOpacity>
            <View style={styles.walletTouchable}>
              <FontAwesome5 name="wallet" size={24} color="black" />
              <Text style={styles.walletMainText}>Rp {walletMoney}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.walletRight}>
          <Text style={styles.walletSimpleText}>Top up balance</Text>
          <TouchableOpacity>
            <View style={styles.walletTouchable}>
              <Ionicons name="add-circle-outline" size={24} color="black" />
              <Text style={styles.walletMainText}>Top Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.topSlider}>
        <FlatList
          data={topSliderData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Image source={item.image} style={styles.topSliderImage} />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.shopByCategory}>
        <Text style={styles.walletMainText}>SHOP BY CATEGORY</Text>
        <View style={styles.shopIcons}>
          <TouchableOpacity style={styles.shopIcon}>
            <Ionicons name="footsteps" size={29} color="black" />
            <Text style={{ fontSize: 12 }}>FOOTWEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shopIcon}>
            <MaterialCommunityIcons name="bag-personal" size={29} color="black" />
            <Text style={{ fontSize: 12 }}>BAGS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shopIcon}>
            <MaterialCommunityIcons name="tshirt-crew" size={29} color="black" />
            <Text style={{ fontSize: 12 }}>APPAREL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          data={forYouData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.forYouCard}>
              <Image source={item.image} style={styles.forYouImage} />
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ fontSize: 9 }}>{item.category}</Text>
              <Text style={{ fontSize: 10, color: "#F26522" }}>Rs {item.price}</Text>
            </View>
          )}
          numColumns={2}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "white"
  },
  topBar: {},
  header: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#F26522",
    fontSize: 21,
    width: "60%"
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "35%",
  },
  headerIcon: {},
  searchHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchInput: {
    borderWidth: 2,
    borderColor: "#E3E3E3",
    borderRadius: 6,
    padding: 9,
    width: "82%",
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F26522",
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  walletContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 16,
    borderRadius: 10,
    flexDirection: "row",
  },
  walletLeft: {
    gap: 10,
    width: "50%",
    borderRightWidth: 2,
    borderColor: "#E3E3E3"
  },
  walletRight: {
    gap: 10,
    paddingLeft: 16,
  },
  walletTouchable: {
    flexDirection: "row",
    gap: 10,
  },
  walletSimpleText: {
    fontWeight: "200",
    fontSize: 13,
  },
  walletMainText: {
    fontWeight: "600",
  },

  // TOP-Slider 
  topSlider: {},
  topSliderImage: {
    height: 91,
    width: 285,
    borderRadius: 10,
    marginRight: 9,
  },

  // Shop - by - category
  shopByCategory: {
    marginVertical: 16,
  },
  shopIcons: {
    flexDirection: "row",
    height: 103,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  shopIcon: {
    backgroundColor: "#F6F6F6",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "31%",
    borderRadius: 10,
  },

  //FOR YOU
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
});
