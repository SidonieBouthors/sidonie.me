import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import { CalendarIcon } from "./icons/CalendarIcon";
import { Tag } from "@components/Tag";

interface ArticleBlockProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags: string[];
}

export default function ArticleBlock({
  article: { slug, title, description, date, tags },
}: {
  article: ArticleBlockProps;
}) {
  const isoDate = format(new Date(date), "yyyy-MM-dd");
  const formattedDate = format(new Date(date), "MMMM dd, yyyy");

  return (
    <article className="article-block">
      <Link href={slug}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
      {tags.length != 0 ? (
        <div className="tags">
          {tags?.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      ) : null}
      <span className="art-date">
        <CalendarIcon />
        {formattedDate}
      </span>
    </article>
  );
}
