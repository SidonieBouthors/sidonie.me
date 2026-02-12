import InfoBox from "@components/InfoBox";

interface RecipeInfoProps {
  recYieldUnit: string;
  recYield: number;
  prepTime: number;
  cookTime: number;
  waitTime: number;
  totalTime: number;
}

function formatTime(time: number): string | undefined {
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
  recYieldUnit,
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
    <InfoBox className="recipe-info">
      <ul>
        <li><b>Yield:</b> {recYield} {recYieldUnit}</li>
        {formattedPrepTime? <li><b>Prep Time:</b> {formattedPrepTime}</li> : null}
        {formattedWaitTime? <li><b>Wait Time:</b> {formattedWaitTime}</li> : null}
        {formattedCookTime? <li><b>Cooking Time:</b> {formattedCookTime}</li> : null}
        <li><b>Total Time:</b> {formattedTotalTime}</li>
      </ul>
    </InfoBox>
  );
}
