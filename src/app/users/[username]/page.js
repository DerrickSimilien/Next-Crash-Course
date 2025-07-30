export default function UserPage({ params }) {
  return (
    <>
      <h1>This is the user: {params.username}</h1>
      <h2>Post: {params.postname}</h2>
    </>
  );
}
