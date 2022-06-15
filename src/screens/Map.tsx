import MapboxGL from '@react-native-mapbox-gl/maps';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import BurgerJointImage from '../assets/burger-joint.webp';
import HamburgerImage from '../assets/hamburger.png';
import MapMarkerInfo from '../components/MapMarkerInfo';
import MapOverlayButtons from '../components/MapOverlayButtons';
import SearchBar from '../components/SearchBar';
import useColorTheme from '../hooks/useColorTheme';
import useThemedValue from '../hooks/useThemedValue';
import { shadowStyles } from '../styles/global';
import type { MapMarker } from '../types';

const mapMarkers: MapMarker[] = [
	[-73.99155, 40.73581],
	[-73.993, 40.73581],
	[-73.99155, 40.737],
].map((coords, index) => ({
	id: index,
	coords,
	title: `Burger Joint ${index + 1}`,
	subtitle: 'An eatery in India',
	image: BurgerJointImage,
	markerImage: HamburgerImage,
}));

export default function MapScreen() {
	const { isDarkMode } = useColorTheme();
	const [selectedMarker, setSelectedMarker] = useState(mapMarkers[0]!);
	const mapViewStyleUrl = useThemedValue(
		MapboxGL.StyleURL.Light,
		MapboxGL.StyleURL.Dark,
	);

	return (
		<View style={styles.screenContainer}>
			<MapboxGL.MapView
				style={styles.map}
				zoomEnabled={true}
				styleURL={mapViewStyleUrl}
			>
				<MapboxGL.Camera
					centerCoordinate={selectedMarker.coords}
					zoomLevel={16}
				/>

				{mapMarkers.map(marker => {
					const isMarkerSelected = marker.id === selectedMarker.id;
					return (
						<MapboxGL.MarkerView
							coordinate={marker.coords}
							id={marker.id.toString()}
							key={marker.id}
						>
							<TouchableOpacity
								style={[
									styles.mapMarkerContainer,
									isMarkerSelected ? styles.mapMarkerContainerSelected : null,
									isDarkMode ? styles.mapMarkerContainerDark : null,
								]}
								onPress={() => setSelectedMarker(marker)}
							>
								<Image
									source={marker.markerImage}
									style={styles.mapMarkerImage}
								/>
							</TouchableOpacity>
						</MapboxGL.MarkerView>
					);
				})}
			</MapboxGL.MapView>

			<View style={styles.overlayContainer}>
				<SearchBar />
				<MapOverlayButtons />
				<MapMarkerInfo mapMarker={selectedMarker} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screenContainer: { flex: 1 },

	map: { flex: 1 },

	overlayContainer: {
		...StyleSheet.absoluteFillObject,
		padding: 20,
	},
	overlayButtonsContainer: { marginLeft: 'auto', marginTop: 20 },
	overlayButton: {
		width: 40,
		height: 40,
		borderRadius: 1000,
		backgroundColor: 'white',
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 4,
		...shadowStyles.shadow,
	},
	overlayButtonDark: {
		backgroundColor: '#393939',
		...shadowStyles.shadowDark,
	},

	mapMarkerContainer: {
		backgroundColor: 'white',
		width: 40,
		height: 40,
		borderRadius: 1000,
		alignItems: 'center',
		justifyContent: 'center',
		...shadowStyles.shadow,
	},
	mapMarkerContainerSelected: {
		width: 55,
		height: 55,
		borderColor: 'black',
		borderWidth: 3,
	},
	mapMarkerContainerDark: {
		backgroundColor: '#393939',
		borderColor: 'white',
		...shadowStyles.shadowDark,
	},

	mapMarkerImage: {
		width: '60%',
		height: '60%',
	},
});
