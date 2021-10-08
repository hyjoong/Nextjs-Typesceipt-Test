import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ posts }: any) {
  return (
    <div>
      <Head>
        <title>title</title>
        <meta></meta>
      </Head>

      <ul>
        {posts.map((post: any) => (
          <li key={posts.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:8080/api/posts`);
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8080/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
