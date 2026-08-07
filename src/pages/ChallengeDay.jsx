import { useParams } from "react-router-dom";

export default function ChallengeDay() {
  const { dayId } = useParams();

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <h1 className="text-5xl font-bold text-white">
        Challenge Day {dayId}
      </h1>
    </div>
  );
}
