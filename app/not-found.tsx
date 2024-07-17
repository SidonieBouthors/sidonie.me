import Link from "next/link";

export const metadata = {
  title: "404",
  description: "Page not found",
};

export default function Error404() {
  return (
    <div className="error-page">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <span className="error-number">404</span>
      <div className="error-buttons">
        <Link className="button" href="/">Back Home</Link>
        <Link className="button" target="_blank" rel="noopener noreferrer" href="https://github.com/SidonieBouthors/sidonie.me-v2/issues/new?assignees=SidonieBouthors&labels=broken-link&projects=&template=broken-link.md&title=%5BBroken+Link%5D+">
          Report Issue
        </Link>
      </div>
    </div>
  );
}
