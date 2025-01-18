import ArticleBlock from "@components/ArticleBlock";
import { posts, Post } from "@content";
import { Metadata } from "next";
import TagFilteredList from "@components/TagFilteredList";
import Tag from "@components/Tag";

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

  const tagList = displayPosts.reduce(
    (acc: { [tag: string]: number }, post: Post) => {
      post.tags.forEach((tag: string) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    },
    {}
  );

  const sortedTags = Object.entries(tagList)
    .map(([tag, frequency]) => ({ tag, frequency }))
    .sort((a, b) => b.frequency - a.frequency);

  return (
    <div className="share-page">
      <h1>Share</h1>
      <div className="tag-bar">
        {sortedTags.map((tagItem, index) => (
          <Tag tag={tagItem.tag} tagCount={tagItem.frequency} key={index} />
        ))}
      </div>
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
