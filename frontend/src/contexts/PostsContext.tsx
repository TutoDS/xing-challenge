import { PostResponseType } from 'shared/@types/PostResponse';
import { createContext, ReactElement, ReactNode, useCallback, useEffect, useState } from 'react';
import { getPosts } from 'shared/services/requests/getPosts';

export type PostsContextData = {
	posts: PostResponseType[];
	currentPost: PostResponseType | undefined;

	changeCurrentPost: (post: PostResponseType) => void;
};

type PostsProps = {
	children: ReactNode;
};

export const PostsContext = createContext({} as PostsContextData);

export const PostsProvider = ({ children }: PostsProps): ReactElement => {
	const [posts, setPosts] = useState<PostResponseType[]>([]);

	const [currentPost, setCurrentPost] = useState<PostResponseType>();

	const changeCurrentPost = (post: PostResponseType) => {
		//	TODO: change the current post to show
		if (!posts) {
			return;
		} else {
			setCurrentPost(posts.filter((loopPost) => loopPost.title === post.title)[0]);
		}
	};

	const handleRequest = useCallback(async () => {
		const { articles } = await getPosts();

		setPosts(articles);
	}, []);

	useEffect(() => {
		handleRequest();

		return () => setPosts([]);
	}, []);

	return (
		<PostsContext.Provider value={{ posts, currentPost, changeCurrentPost }}>
			{children}
		</PostsContext.Provider>
	);
};