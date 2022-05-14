import styled from 'styled-components';
import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { tint } from 'polished';

const Container = styled('article')`
	height: 90vh;
	width: calc(1400px - 500px);

	border-left: 1px solid #d7d7d7;

	padding: 1.15rem 1.25rem;

	overflow-y: auto;
`;

const Content = styled('section')`
  ${flexSettings('column')};
  gap: 1.15rem;

  padding: 2rem;

  border-radius: 0.35rem;

  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
`;

const Header = styled('header')`
  ${flexSettings()};
  ${flexAlignment('center')};
  gap: 1.25rem;

  & > img {
    width: 400px;
    height: 400px;

    border-radius: 0.25rem;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    object-fit: cover;
  }

  & > div {
    ${flexSettings('column')};
    gap: 0.5rem;

    & > h1 {
      color: ${({ theme }) => theme.colors.primary[500]};
      font-weight: 300;
    }

    & span {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

const FlexRow = styled('div')`
  ${flexSettings()};
  ${flexAlignment('center', 'space-between')};
  gap: 0.5rem;
`;

const Footer = styled('section')`
  margin-top: 0.75rem;

  ${flexSettings()};
  ${flexAlignment('center')};
  gap: 0.75rem;

  & > a {
    color: ${({ theme }) => tint(0.25, theme.colors.primary[300])};
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`;

export { Container, Content, Header, FlexRow, Footer };