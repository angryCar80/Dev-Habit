"use client"

import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
  const routes = useRouter();

  const goToDashboard = () => {
    routes.push("/dashboard");
  };


  const goToPricing = () => {
    routes.push("/pricing");
  };

  return (
    <main className="min-h-screen px-6 py-12">
      {/* App Logo */}
      <div className="w-24 h-24 mx-auto bg-surface rounded-2xl flex items-center justify-center border border-subtle glow-primary">
        <span className="text-5xl">⚡</span>
      </div>

      {/* App Title */}
      <div className="text-center mt-8 mb-12">
        <h1 className="text-4xl font-bold text-primary">DevHabit</h1>
        <p className="text-secondary mt-2">Build better coding habits</p>
      </div>

      {/* Feature Cards Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="feature-card bg-surface p-6 rounded-xl border border-subtle hover:border-accent transition-all duration-300 group cursor-pointer text-center">
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
            🔥
          </div>
          <h3 className="text-primary font-semibold mb-2">
            Streak Tracking
          </h3>
          <p className="text-muted text-sm">Never break the chain. Keep your daily coding streak alive.</p>
        </div>
        <div className="feature-card bg-surface p-6 rounded-xl border border-subtle hover:border-accent transition-all duration-300 group cursor-pointer text-center">
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
            📊
          </div>
          <h3 className="text-primary font-semibold mb-2">
            Analytics
          </h3>
          <p className="text-muted text-sm">Track your progress with detailed insights and stats.</p>
        </div>
        <div className="feature-card bg-surface p-6 rounded-xl border border-subtle hover:border-accent transition-all duration-300 group cursor-pointer text-center">
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
            🎯
          </div>
          <h3 className="text-primary font-semibold mb-2">
            Goals
          </h3>
          <p className="text-muted text-sm">Set and achieve your coding goals step by step.</p>
        </div>
      </div>

      <div className="flex justify-center mt-10 ">
        <button
          onClick={goToPricing}
          className="w-50 h-12 mr-10 mt-10 bg-accent text-on-accent font-semibold rounded-full glow-primary cursor-pointer"
        >Start Your Streak</button>
        <button
          onClick={goToDashboard}
          className="w-50 h-12 bg-surface mt-10 font-semibold rounded-full cursor-pointer"
        >
          Show Demo
        </button>
      </div>
    </main>
  );
}
