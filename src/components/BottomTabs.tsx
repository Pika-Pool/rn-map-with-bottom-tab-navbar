import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import useKeyboardState from '../hooks/useKeyboardState';
import useThemedValue from '../hooks/useThemedValue';
import MapScreen from '../screens/Map';
import { BOTTOM_TAB_BAR_HEIGHT } from '../utils/constants';
import CTATabBarButton from './CTATabBarButton';
import TabBarIcon from './TabBarIcon';

const Tabs = createBottomTabNavigator();

export default function BottomTabs() {
	const isKeyboardVisible = useKeyboardState();
	const tabBarTintColor = useThemedValue('#0d0d0d', '#eee');
	const tabBarStyle = useThemedValue(styles.tabBarStyle, [
		styles.tabBarStyle,
		styles.tabBarStyleDark,
	]);

	return (
		<Tabs.Navigator
			screenOptions={({ route }) => ({
				// eslint-disable-next-line react/no-unstable-nested-components
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon focused={focused} color={color} routeName={route.name} />
				),
				tabBarStyle,
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				tabBarActiveTintColor: tabBarTintColor,
				tabBarInactiveTintColor: tabBarTintColor,
			})}
		>
			<Tabs.Screen name='Compass' component={MapScreen} />
			<Tabs.Screen name='Map' component={MapScreen} />

			<Tabs.Screen
				name='Plus'
				component={MapScreen}
				options={{
					// the cta button shows above keyboard
					// so remove top:-15 when keyboard is open
					tabBarItemStyle: { top: isKeyboardVisible ? 0 : -15 },
					tabBarButton: CTATabBarButton,
				}}
			/>

			<Tabs.Screen name='Bell' component={MapScreen} />
			<Tabs.Screen name='Account' component={MapScreen} />
		</Tabs.Navigator>
	);
}

const styles = StyleSheet.create({
	tabBarStyle: { height: BOTTOM_TAB_BAR_HEIGHT, backgroundColor: 'white' },
	tabBarStyleDark: { backgroundColor: 'black' },
});
