import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BottomTabs from './components/BottomTabs';
import ColorThemeContextProvider from './components/ColorThemeContext';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
	'pk.eyJ1IjoicGlrYXBvb2wiLCJhIjoiY2w0ZmRyOGZvMDJkajNxcXEwNmtnMGx2dyJ9.ttInifGa60o_z4mI8vfApQ',
);

export default function App() {
	useEffect(() => {
		MapboxGL.setTelemetryEnabled(false);
	}, []);

	return (
		<NavigationContainer>
			<ColorThemeContextProvider>
				<SafeAreaView style={styles.globalContainer}>
					<BottomTabs />
				</SafeAreaView>
			</ColorThemeContextProvider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	globalContainer: { flex: 1 },
});
