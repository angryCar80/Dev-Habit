"use client"

import Option, { OptionState } from "../components/Option";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(OptionState.On);
  const [emailReminders, setEmailReminders] = useState(OptionState.On);
  const [darkMode, setDarkMode] = useState(OptionState.On);
  const [soundEffects, setSoundEffects] = useState(OptionState.On);
  const [privateProfile, setPrivateProfile] = useState(OptionState.Off);
  const [analytics, setAnalytics] = useState(OptionState.On);

  const settings = [
    {
      icon: "🔔",
      title: "Push Notifications",
      description: "Get notified when it's time to log your daily habits",
      state: notifications,
      setState: setNotifications,
    },
    {
      icon: "📧",
      title: "Email Reminders",
      description: "Receive weekly summary emails with your progress",
      state: emailReminders,
      setState: setEmailReminders,
    },
    {
      icon: "🌙",
      title: "Dark Mode",
      description: "Easier on the eyes during night sessions",
      state: darkMode,
      setState: setDarkMode,
    },
    {
      icon: "🔊",
      title: "Sound Effects",
      description: "Play sound when you complete a habit",
      state: soundEffects,
      setState: setSoundEffects,
    },
    {
      icon: "🔒",
      title: "Private Profile",
      description: "Keep your goals and progress private",
      state: privateProfile,
      setState: setPrivateProfile,
    },
    {
      icon: "📊",
      title: "Analytics Tracking",
      description: "Help us improve by sharing usage data",
      state: analytics,
      setState: setAnalytics,
    },
  ];

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Settings</h1>
          <p className="text-secondary">Customize your DevHabit experience</p>
        </div>

        {/* Account Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-4">Account</h2>
          <div className="bg-surface p-6 rounded-xl border border-subtle">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@example.com"
                  disabled
                  className="w-full px-4 py-2 bg-subtle border border-muted rounded-lg text-primary opacity-60 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Username</label>
                <input
                  type="text"
                  placeholder="Your username"
                  className="w-full px-4 py-2 bg-elevated border border-subtle rounded-lg text-primary focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <button className="px-6 py-2 bg-accent text-on-accent font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-4">Preferences</h2>
          <div className="space-y-4">
            {settings.map((setting, idx) => (
              <div key={idx} className="bg-surface p-6 rounded-xl border border-subtle hover:border-accent transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-3xl">{setting.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{setting.title}</h3>
                      <p className="text-secondary text-sm">{setting.description}</p>
                    </div>
                  </div>
                  <Option
                    option=""
                    optionState={setting.state}
                    createOption={() => {}}
                    onToggle={(newState) => setting.setState(newState)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-4">Goals</h2>
          <div className="bg-surface p-6 rounded-xl border border-subtle">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Weekly Goal Target</label>
                <input
                  type="number"
                  placeholder="7"
                  className="w-full px-4 py-2 bg-elevated border border-subtle rounded-lg text-primary focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Default Daily Session Duration (minutes)</label>
                <input
                  type="number"
                  placeholder="30"
                  className="w-full px-4 py-2 bg-elevated border border-subtle rounded-lg text-primary focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-3">
          <h2 className="text-xl font-bold text-red-500 mb-4">Danger Zone</h2>
          <div className="bg-surface p-6 rounded-xl border border-red-500/30 hover:border-red-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-primary">Delete Account</h3>
                <p className="text-secondary text-sm">Permanently delete your account and all data</p>
              </div>
              <button className="px-6 py-2 bg-red-500/20 text-red-500 font-medium rounded-lg hover:bg-red-500/30 transition-colors cursor-pointer border border-red-500/30">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
