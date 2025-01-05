// Fetching posts using Promises
export default async function fetchPostsWithPromises (){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            return response.json();
        })
        .then(posts => {
            console.log('Posts fetched successfully:', posts);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
};

fetchPostsWithPromises();
