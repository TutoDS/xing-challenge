import { PostResponseType } from 'shared/@types/PostResponse';
import { Article, Content } from 'components/posts/PostCard/styles';
import { useContext, useRef } from 'react';
import { PostsContext } from 'contexts/PostsContext';

type Props = {
	post: PostResponseType;
};

const PostCard = ({ post, ...props }: Props) => {
	const { changeCurrentPost } = useContext(PostsContext);

	const imageRef = useRef<HTMLImageElement>(null);

	/**
	 * When occurred an error on image
	 * load a placeholder image
	 * using useRef from React
	 */
	const onImageError = () => {
		imageRef.current!.src = 'https://via.placeholder.com/300';
	};

	return (
		<Article onClick={() => changeCurrentPost(post)} {...props}>
			<img ref={imageRef} src={post.urlToImage} onError={onImageError} alt={post.title} />

			<Content>
				<h3>{post.title}</h3>
				<p>{post.description}</p>
			</Content>
		</Article>
	);
};

export default PostCard;