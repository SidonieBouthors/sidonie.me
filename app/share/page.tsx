import { posts, Post } from "@content";

export default function Share() {
  const displayPosts = posts.filter((post: Post) => post.published);
  return (
    <div>
      <h1>Share</h1>
      <ul>
        {displayPosts.map((post: Post) => (
          <li key={post.id}>
            <a href={`/share/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
