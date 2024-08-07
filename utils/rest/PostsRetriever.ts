import {frontendRestClient} from "./RestClient";

export type PostsRetriever = () => Promise<Post[]>;

interface PostsResponse {
    posts: Post[]
}

export interface Post {
    name: string;
    imageLocation: string;
}

export const RestPostsRetriever: PostsRetriever = async (): Promise<Post[]> => {
    const response = await frontendRestClient.get<PostsResponse>(`/posts`);
    return response.posts;
}
