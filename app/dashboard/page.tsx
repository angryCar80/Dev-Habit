"use client"

import PopupEdit from "./components/popup";

export default function Dashboard() {
  const stats = [
    { label: "Current Streak", value: "42", icon: "🔥", color: "accent" },
    { label: "Total Days", value: "127", icon: "📅", color: "primary" },
    { label: "This Week", value: "6/7", icon: "📊", color: "primary" },
    { label: "Best Streak", value: "89", icon: "⭐", color: "accent" },
  ];

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const thisWeek = [1, 1, 1, 1, 1, 0, 0];

  const goals = [
    { title: "Code Daily", progress: 85, target: "30 min/day" },
    { title: "Complete Projects", progress: 60, target: "2 projects" },
    { title: "Learn New Skills", progress: 45, target: "1 new language" },
  ];

  const editPopUp = () => {
    <PopupEdit />
  }

  return (
    <main className="min-h-screen px-6 py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Welcome back! 👋</h1>
        <p className="text-muted">Keep building your coding habits</p>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-surface p-6 rounded-xl border border-subtle hover:border-accent transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-muted text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* This Week Activity */}
        <div className="lg:col-span-2 bg-surface p-6 rounded-xl border border-subtle">
          <h2 className="text-xl font-bold text-primary mb-6">This Week</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-end gap-2">
              {weekDays.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-20 rounded-lg transition-all duration-300 ${thisWeek[idx]
                      ? "bg-accent glow-primary"
                      : "bg-subtle border border-muted"
                      }`}
                  />
                  <span className="text-xs text-muted">{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 pt-8 border-t border-subtle">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Recent Activity
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-secondary">Completed daily coding session</span>
                <span className="text-muted text-xs ml-auto">2 hours ago</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-secondary">Reached 1-week milestone</span>
                <span className="text-muted text-xs ml-auto">2 days ago</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-secondary">Started new project tracking</span>
                <span className="text-muted text-xs ml-auto">5 days ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Goals */}
        <div className="bg-surface p-6 rounded-xl border border-subtle">
          <h2 className="text-xl font-bold text-primary mb-6">Active Goals</h2>
          <div className="space-y-6">
            {goals.map((goal, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-secondary font-medium">{goal.title}</p>
                  <p className="text-xs text-muted">{goal.progress}%</p>
                </div>
                <div className="w-full h-2 bg-subtle rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-300 rounded-full"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted mt-2">{goal.target}</p>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 py-3 bg-accent text-on-accent font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
            Log Session
          </button>

          <button className="w-full mt-8 py-3 bg-accent text-on-accent font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer" onClick={editPopUp}>
            Edit
          </button>
        </div>
      </div>
    </main>
  );
}
