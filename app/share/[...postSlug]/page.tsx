import { MDXContent } from "@components/MDXContent";
import { posts, Post } from "@content";
import { notFound } from "next/navigation";
import LastUpdated from "@components/LastUpdated";
import Breadcrumb from "@components/Breadcrumb";
import TocCollapse from "@components/TocCollapse";
import { Metadata } from "next";

export async function generateMetadata(props: PostProps): Promise<Metadata> {
  const params = await props.params;
  const foundPost = posts.find(
    (post: Post) => post.extractedSlug === params.postSlug.join("/")
  );

  if (!foundPost) {
    return {};
  }

  const postUrl = `https://sidonie.me/share/${foundPost.extractedSlug}`;
  
  return {
    title: foundPost.title,
    description: foundPost.description || `${foundPost.title} - Shared by Sidonie Bouthors`,
    openGraph: {
      url: postUrl,
      type: "article",
      publishedTime: foundPost.date,
    },
  };
}

interface PostProps {
  params: Promise<{
    postSlug: string[];
  }>;
}

export default async function PostPage(props: PostProps) {
  const params = await props.params;
  const slug = params?.postSlug?.join("/");
  const post = posts.find((post: Post) => post.extractedSlug === slug);

  if (!post || (!post.published && !post.publishedUnlisted)) {
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
