import styled from 'styled-components';
import { flexAlignment, flexSettings } from 'assets/styles/mixins';

const Main = styled('main')`
	width: 1400px;
	height: 100vh;

	margin: 0 auto;
	//padding: 15rem;

	${flexSettings()};
	${flexAlignment('center')};
	gap: 1.15rem;

	overflow: hidden;
`;

const Aside = styled('aside')`
	height: 90vh;
	width: 500px;

	${flexSettings('column')};
	gap: 0.75rem;

	padding: 1.15rem 1rem;

	overflow-y: scroll;
`;

export { Main, Aside };