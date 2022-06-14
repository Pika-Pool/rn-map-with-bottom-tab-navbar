import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TAB_BAR_HEIGHT } from './BottomTabs';

// custom tab bar button for red floating plus icon
export default function CTATabBarButton({
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
