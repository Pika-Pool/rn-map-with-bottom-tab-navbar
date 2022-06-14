import {
	createBottomTabNavigator,
	type BottomTabBarButtonProps,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MapScreen from '../screens/Map';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createBottomTabNavigator();

const TAB_BAR_HEIGHT = 60;

export default function BottomTabs() {
	return (
		<Tabs.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
					const lowerCaseRouteName = route.name.toLowerCase();
					const iconSize = 35;

					if (lowerCaseRouteName === 'plus')
						return (
							<MaterialCommunityIcons
								name='plus'
								size={iconSize}
								color='white'
							/>
						);

					const iconName = lowerCaseRouteName + (!focused ? '-outline' : '');
					return (
						<MaterialCommunityIcons
							name={iconName}
							color={color}
							size={iconSize}
						/>
					);
				},
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
					tabBarButton: props => <CTATabBarButton {...props} />,
				}}
			/>

			<Tabs.Screen name='Bell' component={MapScreen} />
			<Tabs.Screen name='Account' component={MapScreen} />
		</Tabs.Navigator>
	);
}

// custom tab bar button for red floating plus icon
function CTATabBarButton({
	children,
	to: _to,
	...touchableProps
}: BottomTabBarButtonProps) {
	return (
		<TouchableOpacity style={styles.container} {...touchableProps}>
			<View style={styles.iconContainer}>{children}</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconContainer: {
		flex: 1,
		width: TAB_BAR_HEIGHT,
		borderRadius: 5000,
		backgroundColor: '#fe3139',
	},
});
