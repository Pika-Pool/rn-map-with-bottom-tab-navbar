import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../components/SearchBar';
import useColorTheme from '../hooks/useColorTheme';
import useThemedValue from '../hooks/useThemedValue';
import { shadowStyles } from '../styles/global';

export default function MapScreen() {
	const { toggleTheme } = useColorTheme();
	const overlayButtonStyle = useThemedValue(styles.overlayButton, [
		styles.overlayButton,
		styles.overlayButtonDark,
	]);
	const overlayButtonIconColor = useThemedValue('black', 'white');
	const toggleIconName = useThemedValue(
		'toggle-switch-outline',
		'toggle-switch-off-outline',
	);

	return (
		<View style={styles.screenContainer}>
			<View style={styles.overlayContainer}>
				<SearchBar />

				<View style={styles.overlayButtonsContainer}>
					{/* color theme toggle button */}
					<TouchableOpacity
						style={overlayButtonStyle}
						accessibilityRole='togglebutton'
						onPress={() => toggleTheme()}
					>
						<MaterialCommunityIcons
							name={toggleIconName}
							size={23}
							color={overlayButtonIconColor}
						/>
					</TouchableOpacity>

					{/* paper place button */}
					<TouchableOpacity style={overlayButtonStyle}>
						<FontAwesome5
							name='paper-plane'
							size={18}
							color={overlayButtonIconColor}
						/>
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
	overlayButtonDark: {
		backgroundColor: '#393939',
		...shadowStyles.shadowDark,
	},
});
