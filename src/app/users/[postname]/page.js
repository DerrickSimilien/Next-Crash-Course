export default function PostPage({ params }) {
  return (
   <>
      <h1>This is the user: {params.username}</h1>
      <h2>Post: {params.postname}</h2>
    </>
  );
}
