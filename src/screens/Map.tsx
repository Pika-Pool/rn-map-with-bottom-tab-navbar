import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../components/SearchBar';
import { shadowStyles } from '../styles/global';

export default function MapScreen() {
	return (
		<View style={styles.screenContainer}>
			<View style={styles.overlayContainer}>
				<SearchBar />

				<View style={styles.overlayButtonsContainer}>
					<TouchableOpacity
						style={styles.overlayButton}
						accessibilityRole='togglebutton'
					>
						<MaterialCommunityIcons
							name='toggle-switch-off-outline'
							size={30}
						/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.overlayButton}>
						<FontAwesome5 name='paper-plane' size={23} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screenContainer: { flex: 1 },
	overlayContainer: {
		position: 'absolute',
		top: 20,
		left: 20,
		right: 20,
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
});
