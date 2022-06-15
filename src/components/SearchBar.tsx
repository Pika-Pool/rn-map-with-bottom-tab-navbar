import React, { useRef } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useColorTheme from '../hooks/useColorTheme';
import useThemedValue from '../hooks/useThemedValue';
import { fontSizes, shadowStyles } from '../styles/global';

export default function SearchBar() {
	const textInputRef = useRef<TextInput | null>(null);
	const { isDarkMode } = useColorTheme();
	const textColor = useThemedValue('#0d0d0d', '#cccccc');

	/* using pressable to pass press event to text input when the icon is pressed */
	return (
		<Pressable
			style={[styles.searchBar, isDarkMode ? styles.searchBarDark : null]}
			onPress={() => textInputRef.current?.focus()}
		>
			<MaterialCommunityIcons
				name='magnify'
				style={styles.searchIcon}
				color={textColor}
			/>
			<TextInput
				placeholder='Search Here'
				placeholderTextColor={textColor}
				style={[styles.input, isDarkMode ? styles.inputDark : null]}
				ref={textInputRef}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	searchBar: {
		backgroundColor: 'white',
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		...shadowStyles.shadow,
	},
	searchBarDark: {
		backgroundColor: '#393939',
		...shadowStyles.shadowDark,
	},

	searchIcon: { marginRight: 5, ...fontSizes.medium },

	input: {
		width: '100%',
		...fontSizes.medium,
	},
	inputDark: {
		color: '#cccccc',
	},
});
