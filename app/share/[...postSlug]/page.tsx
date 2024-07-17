import { MDXContent } from "@components/MDXContent";
import { posts, Post } from "@content";
import { notFound } from "next/navigation";
import LastUpdated from "@components/LastUpdated";
import Breadcrumb from "@components/Breadcrumb";
import TocCollapse from "@components/TocCollapse";
import { Metadata } from "next";

export async function generateMetadata({ params }: PostProps) {
  const foundPost = posts.find(
    (post: Post) => post.extractedSlug === params.postSlug.join("/")
  );

  return {
    title: foundPost ? foundPost.title : "",
    description: foundPost ? foundPost.description : "",
  };
}

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
    <div className="post-page">
      <Breadcrumb title={post.title} slug={post.slug.split("/")}></Breadcrumb>
      <LastUpdated date={post.date}></LastUpdated>
      <TocCollapse />

      <MDXContent code={post.body} />
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
