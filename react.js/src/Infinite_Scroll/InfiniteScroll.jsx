import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const newPosts = await response.json();
      setPosts((prev) => [...prev, ...newPosts]);
      setLoading(false);
    };

    loadPosts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1>Infinite Scrolling</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
