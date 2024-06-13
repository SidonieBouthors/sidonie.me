import { posts, Post } from "@content";

export default function Share() {
  const displayPosts = posts.filter((post: Post) => post.published);
  return (
    <main>
      <h1>Share</h1>
      <ul>
        {displayPosts.map((post: Post) => (
          <li key={post.extractedSlug}>
            <a href={`/share/${post.extractedSlug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
