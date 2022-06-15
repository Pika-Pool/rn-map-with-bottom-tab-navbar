import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BottomTabs from './components/BottomTabs';
import ColorThemeContextProvider from './components/ColorThemeContext';

export default function App() {
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
