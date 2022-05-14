import App from 'pages/App';
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'contexts/ThemeModeContext';
import { PostsProvider } from 'contexts/PostsContext';

render(
	<ThemeProvider>
		<PostsProvider>
			<App />
		</PostsProvider>
	</ThemeProvider>,
	document.getElementById('root')
);