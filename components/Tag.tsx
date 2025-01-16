"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface TagProps {
  tag: string;
  disabled?: boolean;
  children?: string;
}

/**
 * A tag component that can be used to filter content by tag.
 * If no children are provided, the tag string will be displayed.
 */
function SuspenseTag({ tag, disabled, children }: TagProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selected =
    searchParams.has("tags") && searchParams.get("tags")?.includes(tag);

  function selectTag() {
    if (disabled) {
      return;
    }

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

  return (
    <button
      onClick={selectTag}
      className={`tag ${selected ? "selected-tag" : ""} ${
        disabled ? "" : "enabled-tag"
      }`}
    >
      {children || tag}
    </button>
  );
}

export default function Tag({ tag, disabled, children }: TagProps) {
  return (
    <Suspense>
      <SuspenseTag tag={tag} disabled={disabled}>
        {children}
      </SuspenseTag>
    </Suspense>
  );
}
