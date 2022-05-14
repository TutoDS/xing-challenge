type PostResponseType = {
	source: {
		id?: string;
		name: string;
	};
	author?: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
};

type PostsResponseType = {
	articles: PostResponseType[];
};

export { PostResponseType, PostsResponseType };