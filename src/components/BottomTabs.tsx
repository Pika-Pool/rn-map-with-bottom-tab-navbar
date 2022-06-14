import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MapScreen from '../screens/Map';
import CTATabBarButton from './CTATabBarButton';
import TabBarIcon from './TabBarIcon';

const Tabs = createBottomTabNavigator();

export const TAB_BAR_HEIGHT = 60;

export default function BottomTabs() {
	return (
		<Tabs.Navigator
			screenOptions={({ route }) => ({
				// eslint-disable-next-line react/no-unstable-nested-components
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon focused={focused} color={color} routeName={route.name} />
				),
				tabBarShowLabel: false,
				tabBarInactiveTintColor: '#0d0d0d',
				tabBarActiveTintColor: '#0d0d0d',
				headerShown: false,
				tabBarStyle: { height: TAB_BAR_HEIGHT },
			})}
		>
			<Tabs.Screen name='Compass' component={MapScreen} />
			<Tabs.Screen name='Map' component={MapScreen} />

			<Tabs.Screen
				name='Plus'
				component={MapScreen}
				options={{
					tabBarItemStyle: { top: -15 },
					tabBarButton: CTATabBarButton,
				}}
			/>

			<Tabs.Screen name='Bell' component={MapScreen} />
			<Tabs.Screen name='Account' component={MapScreen} />
		</Tabs.Navigator>
	);
}
