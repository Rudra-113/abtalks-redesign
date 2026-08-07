export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
      <h1 className="text-3xl font-bold text-indigo-500">
        ABTalks
      </h1>

      <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-xl text-white transition">
        Join Challenge
      </button>
    </nav>
  );
}