import { StyleSheet } from 'react-native';
import normalizeFontSize from '../utils/normalizeFontSize';

export const fontSizes = StyleSheet.create({
	mini: {
		fontSize: normalizeFontSize(12),
	},
	small: {
		fontSize: normalizeFontSize(15),
	},
	medium: {
		fontSize: normalizeFontSize(17),
	},
	large: {
		fontSize: normalizeFontSize(20),
	},
	xLarge: {
		fontSize: normalizeFontSize(24),
	},
});

export const shadowStyles = StyleSheet.create({
	shadow: {
		// android
		elevation: 5,
		// ios
		shadowColor: '#0d0d0d',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
	},
	shadowDark: {
		shadowColor: '#eeeeee',
	},
});
