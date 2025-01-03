export default async function UserPage({ params }) {
    const { postId } = params;
  
    // Fetch user data
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${postId}`);
  
    if (!res.ok) {
      return (
        <main>
          <h1>User Not Found</h1>
          <p>The user with ID {postId} could not be found.</p>
        </main>
      );
    }
  
    const user = await res.json();
  
    return (
      <main>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>
      </main>
    );
  }
  