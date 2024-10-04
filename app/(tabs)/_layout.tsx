import { Tabs } from 'expo-router';
import { MaterialIcons,MaterialCommunityIcons, FontAwesome5, AntDesign, Octicons } from '@expo/vector-icons';

const _layout = () => {
  const mySize = 31; 
  return (

    <Tabs

      screenOptions={{
        tabBarActiveTintColor: '#F26522',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor:"#FFF0E4",
        tabBarStyle: { 
          backgroundColor: '#fff',
          paddingTop: 10,
          paddingBottom: 20,
          paddingHorizontal:10,
          height: 100,
          justifyContent: 'center',
          width: "100%"
        },
        tabBarShowLabel:false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: 'index',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={mySize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          headerShown: false,
          tabBarLabel: 'transaction',
          tabBarIcon: ({ color }) => (
            <AntDesign name="swap" size={mySize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="voucher"
        options={{
          headerShown: false,
          tabBarLabel: 'voucher',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket-confirmation-outline" size={mySize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="article"
        options={{
          headerShown: false,
          tabBarLabel: 'article',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="article" size={mySize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: 'profile',
          tabBarIcon: ({ color }) => (
            <Octicons name="person" size={mySize} color={color} />
          ),
        }}
      />

    </Tabs>
  );
};

export default _layout;
