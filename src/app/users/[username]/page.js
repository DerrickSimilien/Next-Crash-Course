export default function User({ params }) {
     console.log("Username:", params.username);

  return (
    <h1>This is user: {params.username}</h1>
  );
}
