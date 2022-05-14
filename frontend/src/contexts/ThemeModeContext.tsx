import GlobalStyles from 'assets/styles/global';
// import { darkTheme } from 'assets/styles/theme/dark';
import { lightTheme } from 'assets/styles/theme/light';
import { createContext, ReactElement, ReactNode, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider as ThemeStyledProvider } from 'styled-components';

export type ThemeContextData = {
	switchTheme: () => void;
	theme: DefaultTheme;
};

type ThemeProps = {
	children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProps): ReactElement => {
	// State to save the current theme
	const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

	// TODO: Create dark theme
	const switchTheme = () => {
		setTheme(lightTheme);
	};

	// Use effect to get theme from local storage
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme-mode');

		if (savedTheme) {
			setTheme(JSON.parse(savedTheme));
		}
	}, []);

	// Specific use effect to update theme on local storage when change
	useEffect(() => {
		localStorage.setItem('theme-mode', JSON.stringify(theme));
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, switchTheme }}>
		<ThemeStyledProvider theme={theme || lightTheme}>
			<GlobalStyles />
			{children}
		</ThemeStyledProvider>
	</ThemeContext.Provider>;
};