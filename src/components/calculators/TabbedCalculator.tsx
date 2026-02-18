"use client";

import { useState } from "react";
import WalkingTimeCalculator from "./WalkingTimeCalculator";
import RunningTimeCalculator from "./RunningTimeCalculator";
import DistanceCalculator from "./DistanceCalculator";

type Tab = "walk" | "run" | "howfar";

interface TabbedCalculatorProps {
  /** Initial tab to show */
  initialTab?: Tab;
}

const tabs = [
  { id: "walk" as Tab, label: "Walking Time", icon: "🚶" },
  { id: "run" as Tab, label: "Running Time", icon: "🏃" },
  { id: "howfar" as Tab, label: "How Far?", icon: "📍" },
];

export default function TabbedCalculator({
  initialTab = "walk",
}: TabbedCalculatorProps) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-teal-600 bg-teal-50 text-teal-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <span className="mr-1.5" aria-hidden="true">
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-0" role="tabpanel">
        {activeTab === "walk" && (
          <div className="[&>.card]:rounded-none [&>.card]:border-0 [&>.card]:shadow-none">
            <WalkingTimeCalculator
              initialDistance={1}
              showExtras={true}
            />
          </div>
        )}
        {activeTab === "run" && (
          <div className="[&>.card]:rounded-none [&>.card]:border-0 [&>.card]:shadow-none">
            <RunningTimeCalculator
              initialDistance={5}
              initialUnit="km"
              presetRace="5k"
            />
          </div>
        )}
        {activeTab === "howfar" && (
          <div className="[&>.card]:rounded-none [&>.card]:border-0 [&>.card]:shadow-none">
            <DistanceCalculator initialMinutes={30} />
          </div>
        )}
      </div>
    </div>
  );
}
