import React, {
	useCallback,
	useMemo,
	useState,
	type PropsWithChildren,
} from 'react';
import { StatusBar } from 'react-native';

export interface IColorThemeContext {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
	isDarkMode: boolean;
}
export const ColorThemeContext = React.createContext<IColorThemeContext>({
	theme: 'light',
	toggleTheme: function () {},
	isDarkMode: false,
});

export default function ColorThemeContextProvider({
	children,
}: PropsWithChildren<Record<string, unknown>>) {
	const [theme, setTheme] = useState<IColorThemeContext['theme']>('light');
	const toggleTheme = useCallback(
		() => setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light')),
		[],
	);
	const isDarkMode = useMemo(() => theme === 'dark', [theme]);

	return (
		<ColorThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
			<StatusBar
				barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
			/>

			{children}
		</ColorThemeContext.Provider>
	);
}
