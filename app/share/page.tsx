import ArticleBlock from "@components/ArticleBlock";
import { posts, Post } from "@content";

export default function Share() {
  const displayPosts = posts.filter((post: Post) => post.published);

  return (
    <div className="share-page">
      <h1>Share</h1>
      <ul>
        {displayPosts.map((post: Post) => (
          <li key={post.slug}>
            <hr />
            <ArticleBlock article={post}></ArticleBlock>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
