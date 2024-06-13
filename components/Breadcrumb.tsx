import Link from "next/link";

interface BreadcrumbProps {
  slug: string[];
  title: string;
}

export default function Breadcrumb({ slug, title }: BreadcrumbProps) {
  var ref = "";
  return (
    <nav className="breadcrumb">
      <ol>
        {slug
          .map((str) => {
            ref += "/" + str;
            console.log(str);
            return (
              <li>
                <Link href={ref}>
                  {str.charAt(0).toUpperCase() + str.slice(1)}
                </Link>
              </li>
            );
          })
          .slice(0, slug.length - 1)
          .concat(<li>{title}</li>)}
      </ol>
    </nav>
  );
}
