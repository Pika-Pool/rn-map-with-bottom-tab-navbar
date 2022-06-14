import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BottomTabs from './components/BottomTabs';

export default function App() {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<NavigationContainer>
			<SafeAreaView style={[backgroundStyle, styles.globalContainer]}>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

				<BottomTabs />
			</SafeAreaView>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	globalContainer: { flex: 1 },
});
