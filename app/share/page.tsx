import ArticleBlock from "@components/ArticleBlock";
import { posts, Post } from "@content";
import { Metadata } from "next";
import TagFilteredList from "@/components/TagFilteredList";

export const metadata: Metadata = {
  title: "Share",
  description: "Tutorials, projects & more",
};

export default function Share() {
  const displayPosts = posts
    .filter((post: Post) => post.published)
    .sort((a: Post, b: Post) => {
      var dateA = new Date(a.date).getTime();
      var dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

  return (
    <div className="share-page">
      <h1>Share</h1>
      <TagFilteredList>
        {displayPosts.map((post: Post) => ({
          content: <ArticleBlock article={post} />,
          tags: post.tags,
          slug: post.slug,
        }))}
      </TagFilteredList>
    </div>
  );
}
