"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface TagProps {
  tag: string;
  children?: string;
}

/**
 * A tag component that can be used to filter content by tag.
 * If no children are provided, the tag string will be displayed.
 */
export function Tag({ tag, children }: TagProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function selectTag() {
    console.log("Tag selected:", tag);

    const params = new URLSearchParams(searchParams);

    const currentTags = params.get("tags");
    const tags = currentTags ? currentTags.split(" ") : [];
    if (tags.includes(tag)) {
      // Remove tag
      tags.splice(tags.indexOf(tag), 1);
    } else {
      // Add tag
      tags.push(tag);
    }

    params.set("tags", tags.join(" "));
    // Remove tags parameter if empty
    if (tags.length === 0) {
      params.delete("tags");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return children ? (
    <button onClick={selectTag} className="tag">
      {children}
    </button>
  ) : (
    <button onClick={selectTag} className="tag">
      {tag}
    </button>
  );
}
