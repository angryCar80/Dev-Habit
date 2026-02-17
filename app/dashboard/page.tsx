"use client"

import { useState } from "react";

type Goal = {
  id: number;
  title: string;
  progress: number;
  target: string;
};

export default function Dashboard() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, title: "Code Daily", progress: 85, target: "30 min/day" },
    { id: 2, title: "Complete Projects", progress: 60, target: "2 projects" },
    { id: 3, title: "Learn New Skills", progress: 45, target: "1 new language" },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ title: "", target: "" });

  const openEdit = (goal: Goal) => {
    setEditingId(goal.id);
    setFormData({ title: goal.title, target: goal.target });
  };

  const closeEdit = () => {
    setEditingId(null);
    setFormData({ title: "", target: "" });
  };

  const saveGoal = () => {
    setGoals(
      goals.map((g) =>
        g.id === editingId
          ? { ...g, title: formData.title, target: formData.target }
          : g
      )
    );
    closeEdit();
  };

  const stats = [
    { label: "Current Streak", value: "42", icon: "🔥", color: "accent" },
    { label: "Total Days", value: "127", icon: "📅", color: "primary" },
    { label: "This Week", value: "6/7", icon: "📊", color: "primary" },
    { label: "Best Streak", value: "89", icon: "⭐", color: "accent" },
  ];

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const thisWeek = [1, 1, 1, 1, 1, 0, 0];

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
            {goals.map((goal) => (
              <div key={goal.id}>
                <div className="flex justify-between items-center mb-2 gap-2">
                  <p className="text-secondary font-medium text-sm flex-1 truncate">{goal.title}</p>
                  <button
                    onClick={() => openEdit(goal)}
                    className="text-xs text-accent hover:text-primary transition-colors cursor-pointer flex-shrink-0"
                  >
                    ✏️
                  </button>
                </div>
                <div className="flex justify-between items-center gap-2 mb-2">
                  <div className="flex-1 h-2 bg-subtle rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-300 rounded-full"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted flex-shrink-0 w-8 text-right">{goal.progress}%</p>
                </div>
                <p className="text-xs text-muted truncate">{goal.target}</p>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 py-3 bg-accent text-on-accent font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
            Log Session
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {editingId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-surface border border-subtle rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-primary mb-4">Edit Goal</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Goal Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-subtle border border-muted rounded-lg text-primary focus:outline-none focus:border-accent"
                  placeholder="e.g., Code Daily"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Target
                </label>
                <input
                  type="text"
                  value={formData.target}
                  onChange={(e) =>
                    setFormData({ ...formData, target: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-subtle border border-muted rounded-lg text-primary focus:outline-none focus:border-accent"
                  placeholder="e.g., 30 min/day"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={saveGoal}
                className="flex-1 py-2 bg-accent text-on-accent font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                Save
              </button>
              <button
                onClick={closeEdit}
                className="flex-1 py-2 bg-subtle text-secondary font-semibold rounded-lg hover:border-accent border border-muted transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
