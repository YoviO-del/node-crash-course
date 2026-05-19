const  posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'}
]

const getPosts = () => posts

export const getPostsLength = () => posts.length;

export default getPosts;


// usually use default 
// because that's what you want for react/frontend compontents