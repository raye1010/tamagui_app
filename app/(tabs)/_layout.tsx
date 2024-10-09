import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, XStack } from 'tamagui';

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#ffd33d', // Active tab color
          tabBarInactiveTintColor: '#ffffff', // Inactive tab color
          tabBarStyle: {
            backgroundColor: '#25292e', // Tab bar background color
          },
        }}>
        <Tabs.Screen
          name="home/index" // Path to your home screen
          options={{
            title: '首頁', // Title for the tab (used in some navigators)
            tabBarLabel: '首頁', // Label shown in the tab bar
            tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="detail/index" // Path to your home screen
          options={{
            title: '詳細', // Title for the tab (used in some navigators)
            tabBarLabel: '詳細', // Label shown in the tab bar
            tabBarIcon: ({ color }) => <Entypo name="text-document" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="animate/index" // Path to your home screen
          options={{
            title: '動畫', // Title for the tab (used in some navigators)
            tabBarLabel: '動畫', // Label shown in the tab bar
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="animation-outline" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="properties/index" // Path to your home screen
          options={{
            title: '存貨', // Title for the tab (used in some navigators)
            tabBarLabel: '存貨', // Label shown in the tab bar
            tabBarIcon: ({ color }) => <FontAwesome name="building-o" size={24} color={color} />,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
