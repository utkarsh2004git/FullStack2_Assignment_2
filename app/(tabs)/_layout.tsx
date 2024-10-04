import { Tabs } from 'expo-router';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

const _layout = () => {
  const mySize = 28; 
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFD700',   
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarLabelStyle: { 
          fontSize: 14, 
          fontWeight: 'bold', 
        }, 
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: { 
            backgroundColor: '#000', 
            paddingTop: 10,  
            paddingBottom: 10, 
            height: 80,  
            justifyContent: 'center', 
            width: "100%"
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
            headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={mySize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
            headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={mySize} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="voucher"
        options={{
            headerShown: false,
          
          tabBarIcon: ({ color }) => (
            <FontAwesome name="comments" size={mySize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="article"
        options={{
            headerShown: false,
          
          tabBarIcon: ({ color }) => (
            <FontAwesome name="comments" size={mySize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
            headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="comments" size={mySize} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
