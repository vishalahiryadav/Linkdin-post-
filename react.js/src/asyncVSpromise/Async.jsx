// Fetching posts using async/await
export default async function fetchPostsWithAsyncAwait(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        console.log('Posts fetched successfully:', posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

fetchPostsWithAsyncAwait();
