import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface TabBarIconProps {
	routeName: string;
	focused: boolean;
	color: string;
}

export default function TabBarIcon({
	routeName,
	color,
	focused,
}: TabBarIconProps) {
	const lowerCaseRouteName = routeName.toLowerCase();
	const iconSize = 35;

	if (lowerCaseRouteName === 'plus')
		return <MaterialCommunityIcons name='plus' size={iconSize} color='white' />;

	const iconName = lowerCaseRouteName + (!focused ? '-outline' : '');
	return (
		<MaterialCommunityIcons name={iconName} color={color} size={iconSize} />
	);
}
