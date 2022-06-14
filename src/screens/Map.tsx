import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function MapScreen() {
	return (
		<View style={styles.screenContainer}>
			<SearchBar />
		</View>
	);
}

const styles = StyleSheet.create({
	screenContainer: { flex: 1 },
});
