import PostCard from 'components/posts/PostCard';
import { Aside, Main } from 'pages/App/styles';
import { useContext } from 'react';
import { PostsContext } from 'contexts/PostsContext';
import PostContent from 'components/posts/PostContent';

const App = () => {
	const { posts } = useContext(PostsContext);

	return (
		<Main>
			<Aside>
				{posts.map((post) => (
					<PostCard post={post} key={post.url} />
				))}
			</Aside>
			<PostContent />
		</Main>
	);
};

export default App;