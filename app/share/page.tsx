import ArticleBlock from "@components/ArticleBlock";
import { posts, Post } from "@content";
import { Metadata } from "next";

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
      <ul>
        <hr />
        {displayPosts.map((post: Post) => (
          <li key={post.slug}>
            <ArticleBlock article={post}></ArticleBlock>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
