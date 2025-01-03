export async function generateMetadata({ params }) 
//generateMetadata is a special, reserved function name in Next.js.
 {
  const { postId } = params; // Correctly extract `postId` from `params`

  // Fetch the user data
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${postId}`);
  if (!res.ok) {
    return {
      title: 'User Not Found',
      description: 'The requested user does not exist.',
    };
  }

  const user = await res.json();

  return {
    title: user.name,
    description: `Learn more about ${user.name}, their email is ${user.email}.`,
    openGraph: {
      title: user.name,
      description: `Details about ${user.name}: Email - ${user.email}.`,
      url: `http://localhost:3000/user/${postId}`,
      images: [
        {
          url: '/default-og-image.png', // Replace with an actual image path
          width: 800,
          height: 600,
          alt: 'User Image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: user.name,
      description: `Details about ${user.name}: Email - ${user.email}.`,
      image: '/default-twitter-image.png', // Replace with an actual image path
    },
  };
}

export default async function UserPage({ params }) {
  const { postId } = params; // Correctly extract `postId` from `params`

  // Fetch the user data
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${postId}`);
  if (!res.ok) {
    return <h1>404 - User Not Found</h1>;
  }

  const user = await res.json();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}
