import { MDXContent } from "@components/MDXContent";
import { posts, Post } from "@content";
import { notFound } from "next/navigation";
import LastUpdated from "@components/LastUpdated";
import Breadcrumb from "@components/Breadcrumb";

interface PostProps {
  params: {
    postSlug: string[];
  };
}

export default async function PostPage({ params }: PostProps) {
  const slug = params?.postSlug?.join("/");
  const post = posts.find((post: Post) => post.extractedSlug === slug);



  if (!post || !post.published) {
    notFound();
  }

  return (
    <div id="left-container">
      <main>
        <Breadcrumb title={post.title} slug={post.slug.split("/")}></Breadcrumb>
        <LastUpdated date={post.date}></LastUpdated>
        <MDXContent code={post.body} />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post: Post) => {
    const slug = post.extractedSlug.split("/");
    return {
      postSlug: slug,
    };
  });
}
