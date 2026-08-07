import ProfileCard from "../components/dashboard/ProfileCard";
import StatsCards from "../components/dashboard/StatsCards";
import TodayTask from "../components/dashboard/TodayTask";
import ProgressCard from "../components/dashboard/ProgressCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <ProfileCard />

        <StatsCards />

        <TodayTask />

        <ProgressCard />

      </div>
    </div>
  );
}