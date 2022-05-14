import { PostsResponseType } from 'shared/@types/PostResponse';
import api from 'shared/services/api';

const getPosts = async (): Promise<PostsResponseType> => {
	try {
		const { data } = await api.get<PostsResponseType>('v1/news?q=');

		return data;
	} catch (error: any) {
		return Promise.reject(error);
	}
};

export { getPosts };