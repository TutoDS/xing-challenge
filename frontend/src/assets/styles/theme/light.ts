import { rgba } from 'polished';

const lightTheme = {
	title: 'light',

	colors: {
		background: '#f5f5f5',
		boxBackground: '#fff',
		text: '#333',

		primary: {
			300: '#325588',
			400: '#284b7e',
			500: '#1E4174',
			800: '#002356'
		},

		gray: {
			50: '#F7F8FA',
			100: '#E6E8EB',
			200: '#AFB2B1',
			500: '#808080',
			800: '#494D4B'
		},

		white: '#fff',
		black: '#000'
	},

	shadows: {
		default: `0 0 0.8rem ${rgba('#fff', 0.15)}`
	}
};

export { lightTheme };
