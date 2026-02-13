"use client"

import Option, { OptionState } from "../components/Option";
import { useState } from "react";


export default function SettingsPage() {
  const [ track, setTrack ] = useState(OptionState.Off);

  const handleTrackToggle = (state: OptionState) => {
    setTrack(state);
    if (state === OptionState.On) {
      console.log("Turned on");
    } else {
      console.log("Turned on");
    }
  }

  return (
    <>
      <div className="feature-card p-5 rounded-xl transition-all duration-300 group text-center w-60 ml-5 mt-2">
        <h1 className="text-4xl font-bold text-primary">Settings</h1>
      </div>
      <div className="feature-card bg-surface p-6 rounded-xl border border-subtle hover:border-accent transition-all duration-300 group cursor-pointer text-center w-100 h-50 m-auto">
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
          Put Option Here Devolper
        </div>
        <Option
          option="Donate"
          optionState={track}
          createOption={(option) => console.log(option)}
          onToggle={handleTrackToggle}
        />
        <h3 className="mt-2 text-primary font-semibold mb-2"> Breaf Option Description </h3>
        <p className="text-muted text-sm">More Description</p>
      </div>
    </>
  );
}
