import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import useColorTheme from '../hooks/useColorTheme';
import { shadowStyles, fontSizes } from '../styles/global';
import type { MapMarker } from '../types';

export interface MapMarkerInfoProps {
	mapMarker: MapMarker;
}

export default function MapMarkerInfo({ mapMarker }: MapMarkerInfoProps) {
	const { isDarkMode } = useColorTheme();

	return (
		<View
			style={[
				styles.mapMarkerInfoContainer,
				isDarkMode ? styles.mapMarkerInfoContainerDark : null,
			]}
		>
			<Image
				resizeMethod='resize'
				resizeMode='contain'
				source={mapMarker.image}
				style={styles.mapMarkerInfoImage}
			/>

			<View>
				<Text
					style={[
						styles.mapMarkerInfoTitle,
						isDarkMode ? styles.mapMarkerInfoTextDark : null,
					]}
				>
					{mapMarker.title}
				</Text>

				<Text
					style={[
						styles.mapMarkerInfoSubTitle,
						isDarkMode ? styles.mapMarkerInfoTextDark : null,
					]}
				>
					{mapMarker.subtitle}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mapMarkerInfoContainer: {
		width: '100%',
		height: 100,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		bottom: 20,
		padding: 10,
		borderRadius: 5,
		marginTop: 'auto',
		...shadowStyles.shadow,
	},
	mapMarkerInfoContainerDark: {
		backgroundColor: '#393939',
		...shadowStyles.shadowDark,
	},
	mapMarkerInfoImage: {
		flex: 1,
		maxWidth: 80,
		maxHeight: 80,
		marginRight: 10,
		borderRadius: 5,
	},
	mapMarkerInfoTitle: {
		...fontSizes.medium,
		fontWeight: 'bold',
		color: 'black',
	},
	mapMarkerInfoSubTitle: {
		...fontSizes.small,
		color: 'black',
		opacity: 0.8,
	},
	mapMarkerInfoTextDark: {
		color: 'white',
	},
});
