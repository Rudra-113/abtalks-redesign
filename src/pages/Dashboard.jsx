import ProfileCard from "../components/dashboard/ProfileCard";
import StatsCards from "../components/dashboard/StatsCards";
import TodayTask from "../components/dashboard/TodayTask";
import ProgressCard from "../components/dashboard/ProgressCard";
import Achievements from "../components/dashboard/Achievements";
import Leaderboard from "../components/dashboard/Leaderboard";
import QuickActions from "../components/dashboard/QuickActions";
import WeeklyStreak from "../components/dashboard/WeeklyStreak";
import LearningTimeline from "../components/dashboard/LearningTimeline";
import MotivationCard from "../components/dashboard/MotivationCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <div className="max-w-md mx-auto p-5">

        <div className="mb-8">

  <h1 className="text-4xl font-bold">
    👋 Welcome Back,
  </h1>

  <p className="text-2xl text-indigo-400 font-semibold mt-2">
    Rudrapratap
  </p>

  <p className="text-zinc-400 mt-1">
    Ready to continue your coding streak?
  </p>
</div>

        <ProfileCard />

        <StatsCards />

        <TodayTask />

        <ProgressCard />

        <WeeklyStreak />

        <LearningTimeline />

        <MotivationCard />
        
        <Achievements />

        <Leaderboard />

        <QuickActions />

      </div>

    </div>
  );
}