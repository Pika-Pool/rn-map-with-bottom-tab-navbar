import useColorTheme from './useColorTheme';

/**
 * @param value1 value for light theme
 * @param value2 value for dark theme
 * @returns value depending on color theme
 */
export default function useThemedValue<T, K>(value1: T, value2: K) {
	const { isDarkMode } = useColorTheme();
	return isDarkMode ? value2 : value1;
}
