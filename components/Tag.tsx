import Link from "next/link";
import { slug } from "github-slugger";

interface TagProps {
  children: string;
}
export function Tag({ children }: TagProps) {
  return <span className="tag">{children}</span>;
}
