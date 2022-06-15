import React, { useRef, useState } from 'react';
import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useColorTheme from '../hooks/useColorTheme';
import useThemedValue from '../hooks/useThemedValue';
import { fontSizes, shadowStyles } from '../styles/global';

const searchResults = ['hello', 'hello Adele', 'population of India', 'PopOS'];

export default function SearchBar() {
	const textInputRef = useRef<TextInput | null>(null);
	const { isDarkMode } = useColorTheme();
	const textColor = useThemedValue('#0d0d0d', '#cccccc');

	const [searchText, setSearchText] = useState('');
	const onSearchResultPress = (text: string) => setSearchText(text);

	return (
		<View>
			{/* using pressable to pass press event to text input when the icon is pressed */}
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
					value={searchText}
					onChangeText={text => setSearchText(text)}
				/>
			</Pressable>

			{textInputRef.current?.isFocused() ? (
				<ScrollView
					style={[
						styles.searchResultsContainer,
						isDarkMode ? styles.searchResultsContainerDark : null,
					]}
				>
					{searchResults.map((text, i) => (
						<TouchableHighlight
							key={text + i}
							onPress={() => onSearchResultPress(text)}
						>
							<View style={styles.searchResult}>
								<Text style={[styles.searchResultText, { color: textColor }]}>
									{text}
								</Text>

								<TouchableHighlight style={styles.searchResultFillInBtn}>
									<MaterialCommunityIcons
										name='arrow-top-left'
										color={textColor}
										size={23}
									/>
								</TouchableHighlight>
							</View>
						</TouchableHighlight>
					))}
				</ScrollView>
			) : null}
		</View>
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
		color: '#0d0d0d',
		...fontSizes.medium,
	},
	inputDark: {
		color: '#cccccc',
	},

	searchResultsContainer: {
		backgroundColor: 'white',
		marginTop: 10,
		borderRadius: 5,
		maxHeight: 200,
	},
	searchResultsContainerDark: {
		backgroundColor: '#393939',
	},
	searchResult: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
	searchResultText: {
		paddingRight: 10,
		color: 'black',
		maxWidth: '95%',
		...fontSizes.small,
	},
	searchResultFillInBtn: {
		padding: 5,
	},
});
