import { format } from "date-fns";

interface LastUpdatedProps {
  date: string | number;
}

export default function LastUpdated({ date }: LastUpdatedProps) {
  const isoDate = format(new Date(date), "yyyy-MM-dd")
  const formattedDate = format(new Date(date), "eeee, MMMM dd, yyyy");
  return (
    <p className="updated">
      Last updated on{" "}
      <time dateTime={isoDate}>{formattedDate}</time>
    </p>
  );
}
