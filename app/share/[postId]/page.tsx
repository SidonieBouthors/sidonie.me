import { MDXContent } from "@/components/MDXContent";
import { posts, Post } from "@content";
import { notFound } from "next/navigation";
import "@styles/share.scss";

interface PostProps {
  params: {
    postId: string;
  };
}

export default async function PostPage({ params }: PostProps) {
  const post = posts.find((post: Post) => post.id === params.postId);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <>
      <MDXContent code={post.body} />
    </>
  );
}

export async function generateStaticParams() {
  return posts.map((post: Post) => {
    const id = post.id;
    return {
      postId: id,
    };
  });
}
