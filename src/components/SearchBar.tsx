import React, { useRef } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontSizes, shadowStyles } from '../styles/global';

export default function SearchBar() {
	const textInputRef = useRef<TextInput | null>(null);

	/* using pressable to pass press event to text input when the icon is pressed */
	return (
		<Pressable
			style={[styles.searchBar, shadowStyles.shadow]}
			onPress={() => textInputRef.current?.focus()}
		>
			<MaterialCommunityIcons name='magnify' style={styles.searchIcon} />
			<TextInput
				placeholder='Search Here'
				style={styles.input}
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
	},
	searchIcon: { marginRight: 5, ...fontSizes.medium },
	input: { width: '100%', ...fontSizes.medium },
});
