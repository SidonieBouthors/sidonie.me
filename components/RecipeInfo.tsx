import { format, interval } from "date-fns";

interface RecipeInfoProps {
  recYield: number;
  prepTime: number;
  cookTime: number;
  waitTime: number;
  totalTime: number;
}

function formatTime(time: number): string | undefined {
  const millisPerMinute: number = 60000;
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  if (hours === 0) {
    if (minutes === 0) {
      return undefined;
    }
    return `${minutes}min`;
  }
  if (minutes === 0) {
    return `${hours}h`;
  }
  return `${hours}h${minutes}min`;
}

export default function RecipeInfo({
  recYield,
  prepTime,
  cookTime,
  waitTime,
  totalTime,
}: RecipeInfoProps) {
  const formattedPrepTime = formatTime(prepTime);
  const formattedCookTime = formatTime(cookTime);
  const formattedWaitTime = formatTime(waitTime);
  const formattedTotalTime = formatTime(totalTime);
  return (
    <div className="recipe-info">
      <ul>
        <li>Yield: {recYield} people</li>
        {formattedPrepTime? <li>Prep Time: {formattedPrepTime}</li> : null}
        {formattedWaitTime? <li>Wait Time: {formattedWaitTime}</li> : null}
        {formattedCookTime? <li>Cooking Time: {formattedCookTime}</li> : null}
        <li>Total Time: {formattedTotalTime}</li>
      </ul>
    </div>
  );
}
