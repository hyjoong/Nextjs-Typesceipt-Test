import Image from "next/image";
import Link from "next/link";

const index = ({ photo }: any) => {
  const { title, url } = photo;
  return (
    <div>
      <h2>image {title}</h2>
      <Image src={url} width={500} height={500}></Image>
      <Link href="/photos">
        <a>go back</a>
      </Link>
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();
  return {
    props: {
      photo,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();
  photos.map((photo: any) => {
    photo.id;
  });
  const ids = photos.map((photo: any) => photo.id);
  const paths = ids.map((id: number) => {
    return { params: { id: id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export default index;
