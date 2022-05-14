import { useContext, useRef } from 'react';
import { PostsContext } from 'contexts/PostsContext';
import { Container, Content, FlexRow, Footer, Header } from './styles';
import { format } from 'date-fns';

const PostContent = () => {
	const { currentPost } = useContext(PostsContext);

	const imageRef = useRef<HTMLImageElement>(null);

	/**
	 * When occurred an error on image
	 * load a placeholder image
	 * using useRef from React
	 */
	const onImageError = () => {
		imageRef.current!.src = 'https://via.placeholder.com/400';
	};

	return (
		<Container>
			{currentPost && (
				<Content>
					<Header>
						<img
							ref={imageRef}
							onError={onImageError}
							src={currentPost.urlToImage}
							alt={currentPost.title}
						/>

						<div>
							<h1>{currentPost.title}</h1>
							<FlexRow>
								{currentPost.author && (
									<span>
										<strong>Author:</strong> {currentPost.author}
									</span>
								)}

								<span>
									{format(
										new Date(currentPost.publishedAt),
										'dd/MM/yyyy HH:mm:ss'
									)}
								</span>
							</FlexRow>
						</div>
					</Header>

					<p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>

					<Footer>
						<a href={currentPost.url}>{currentPost.source.name}</a>
					</Footer>
				</Content>
			)}
		</Container>
	);
};

export default PostContent;