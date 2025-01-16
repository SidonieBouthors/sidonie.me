import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import { CalendarIcon } from "./icons/CalendarIcon";
import Tag from "@components/Tag";

interface ArticleBlockProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags: string[];
}

export default function ArticleBlock({
  article: { slug, title, description, date, tags },
  disableTags,
  fillSpace,
  titleLevel,
}: {
  article: ArticleBlockProps;
  disableTags?: boolean;
  fillSpace?: boolean;
  titleLevel?: number;
}) {
  const isoDate = format(new Date(date), "yyyy-MM-dd");
  const formattedDate = format(new Date(date), "MMMM dd, yyyy");

  return (
    <article className={`article-block ${fillSpace ? "fill-space" : ""}`}>
      <div className="flex-group">
        <Link href={slug}>
          {React.createElement(
            `h${titleLevel || 2}`,
            { className: "article-block-title" },
            title
          )}
        </Link>
        <p>{description}</p>
      </div>
      <div className="flex-group">
        {tags.length != 0 ? (
          <div className="tags">
            {tags?.map((tag) => (
              <Tag key={tag} tag={tag} disabled={disableTags} />
            ))}
          </div>
        ) : null}
        <span className="art-date">
          <CalendarIcon />
          {formattedDate}
        </span>
      </div>
    </article>
  );
}
