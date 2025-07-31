'use client';

import { useEffect, useState } from "react";

// ❌ getServerSideProps only works in the Pages Router
// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return {
//     props: {
//       posts: data,
//     },
//   };
// }

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log("Posts", data);
      setPosts(data); // ✅ Store data in state
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>THIS IS THE POSTS PAGE</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
