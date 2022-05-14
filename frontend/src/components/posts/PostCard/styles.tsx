import styled from 'styled-components';
import { flexAlignment, flexSettings } from 'assets/styles/mixins';

const Article = styled('article')`
	${flexSettings()};
	${flexAlignment('center')};
	gap: 1.15rem;

	padding: 0.75rem 1rem;
	border-radius: 0.35rem;

	background-color: #fff;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);

	transition: all 0.25s ease-in-out;
	cursor: pointer;

	& > img {
		width: 7rem;
		height: 7rem;

		border-radius: 0.25rem;

		object-fit: cover;

		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
	}

	&:hover {
		background-color: #e7e7e7;
	}
`;

const Content = styled('div')`
  ${flexSettings('column')};
  gap: 0.5rem;

  & > h3 {
    color: ${({ theme }) => theme.colors.primary[300]};
    font-weight: 400;
    line-height: 1.25;

    word-break: break-word;
  }

  & > p {
    max-width: 15rem;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`;

export { Article, Content };