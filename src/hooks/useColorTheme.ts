import { useContext } from 'react';
import { ColorThemeContext } from '../components/ColorThemeContext';

export default function useColorTheme() {
	return useContext(ColorThemeContext);
}
