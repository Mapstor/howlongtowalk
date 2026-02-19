import { Metadata } from "next";
import Link from "next/link";

import TabbedCalculator from "@/components/calculators/TabbedCalculator";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { createWebAppSchema } from "@/components/seo/WebAppSchema";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "How Long to Walk a Mile? Walking & Running Time Calculator",
  description:
    "Calculate how long it takes to walk 1 mile, 5K, or any distance. Free calculator with times by pace, age, and fitness level.",
  alternates: {
    canonical: "https://howlongtowalk.org",
  },
  openGraph: {
    title: "How Long to Walk a Mile? Walking & Running Time Calculator",
    description:
      "Calculate exactly how long it takes to walk 1 mile, 2 miles, 5K, or any distance. Free calculator with times by pace, age, and fitness level.",
    url: "https://howlongtowalk.org",
    type: "website",
  },
};

// Popular walking distances for the quick reference
const popularWalkingDistances = [
  { label: "Half a mile", time: "10 min", briskTime: "8 min 34 sec", slug: "half-a-mile" },
  { label: "1 mile", time: "20 min", briskTime: "17 min 8 sec", slug: "1-mile" },
  { label: "2 miles", time: "40 min", briskTime: "34 min 17 sec", slug: "2-miles" },
  { label: "3 miles", time: "1 hr", briskTime: "51 min 26 sec", slug: "3-miles" },
  { label: "5 miles", time: "1 hr 40 min", briskTime: "1 hr 26 min", slug: "5-miles" },
  { label: "10 miles", time: "3 hr 20 min", briskTime: "2 hr 51 min", slug: "10-miles" },
];

// Popular running distances
const popularRunningDistances = [
  { label: "1 mile", beginner: "10–13 min", intermediate: "7–10 min", advanced: "Under 7 min", slug: "a-mile" },
  { label: "5K (3.1 mi)", beginner: "30–40 min", intermediate: "22–30 min", advanced: "Under 22 min", slug: "a-5k" },
  { label: "10K (6.2 mi)", beginner: "1 hr – 1 hr 20 min", intermediate: "45–60 min", advanced: "Under 45 min", slug: "a-10k" },
  { label: "Half Marathon", beginner: "2 hr 15 min – 3 hr", intermediate: "1 hr 45 min – 2 hr 15 min", advanced: "Under 1 hr 45 min", slug: "a-half-marathon" },
  { label: "Marathon", beginner: "4 hr 30 min – 6 hr", intermediate: "3 hr 30 min – 4 hr 30 min", advanced: "Under 3 hr 30 min", slug: "a-marathon" },
];

// Common time windows for distance calculator
const commonTimeWindows = [
  { label: "15 minutes", moderate: "0.75 miles", brisk: "0.88 miles", slug: "in-15-minutes" },
  { label: "30 minutes", moderate: "1.50 miles", brisk: "1.75 miles", slug: "in-30-minutes" },
  { label: "1 hour", moderate: "3.00 miles", brisk: "3.50 miles", slug: "in-1-hour" },
  { label: "2 hours", moderate: "6.00 miles", brisk: "7.00 miles", slug: "in-2-hours" },
];

// Real-world examples of different people - professional case studies
const realWorldExamples = [
  {
    name: "Dr. Sarah Mitchell",
    age: 42,
    occupation: "Hospital Physician",
    location: "Boston, MA",
    scenario: "Daily hospital commute",
    distance: "0.8 miles each way",
    pace: "Brisk (3.5 mph)",
    time: "14 minutes",
    frequency: "5 days/week",
    weeklyTotal: "8 miles",
    calories: "64 cal/trip",
    steps: "1,800 steps",
    context: "Parks at the far lot to add movement between 12-hour shifts. Studies show physicians who walk during commutes report 23% lower burnout rates.",
    healthBenefit: "Improved cardiovascular health",
    heartRateZone: "Zone 2 (fat burning)",
  },
  {
    name: "Marcus Thompson",
    age: 67,
    occupation: "Retired Engineer",
    location: "Phoenix, AZ",
    scenario: "Morning fitness walk",
    distance: "3 miles",
    pace: "Moderate (2.8 mph)",
    time: "64 minutes",
    frequency: "Daily",
    weeklyTotal: "21 miles",
    calories: "255 cal",
    steps: "6,750 steps",
    context: "Walks before 7 AM to avoid desert heat. His cardiologist recommended daily walking after a mild cardiac event in 2022. Has maintained healthy blood pressure for 18 months.",
    healthBenefit: "Blood pressure management",
    heartRateZone: "Zone 1-2 (recovery/endurance)",
  },
  {
    name: "Jennifer Walsh",
    age: 34,
    occupation: "Software Developer",
    location: "Seattle, WA",
    scenario: "Lunch break walk",
    distance: "1.5 miles",
    pace: "Moderate (3.0 mph)",
    time: "30 minutes",
    frequency: "4 days/week",
    weeklyTotal: "6 miles",
    calories: "120 cal",
    steps: "3,375 steps",
    context: "Combats sedentary work by walking during lunch. Research indicates 30-minute midday walks improve afternoon focus by 25% and reduce eye strain from screen time.",
    healthBenefit: "Mental clarity & posture",
    heartRateZone: "Zone 2 (fat burning)",
  },
  {
    name: "Robert Chen",
    age: 29,
    occupation: "Marathon Runner",
    location: "Austin, TX",
    scenario: "Easy recovery run",
    distance: "5 miles",
    pace: "Jogging (9:30 min/mile)",
    time: "47 min 30 sec",
    frequency: "3 days/week",
    weeklyTotal: "15 easy miles",
    calories: "475 cal",
    steps: "9,500 steps",
    context: "Uses recovery runs between interval training sessions. Finished Boston Marathon in 3:12:45. Easy pace kept below 75% max heart rate per training plan.",
    healthBenefit: "Active recovery & base building",
    heartRateZone: "Zone 2 (aerobic base)",
  },
  {
    name: "Patricia Gonzalez",
    age: 58,
    occupation: "Elementary School Teacher",
    location: "Denver, CO",
    scenario: "After-dinner walk with spouse",
    distance: "2 miles",
    pace: "Leisurely (2.5 mph)",
    time: "48 minutes",
    frequency: "6 evenings/week",
    weeklyTotal: "12 miles",
    calories: "170 cal",
    steps: "4,500 steps",
    context: "Started walking together after her husband's Type 2 diabetes diagnosis. Their routine has helped him reduce A1C from 7.8 to 6.4 over 8 months without medication changes.",
    healthBenefit: "Blood sugar regulation",
    heartRateZone: "Zone 1 (recovery)",
  },
  {
    name: "David Park",
    age: 45,
    occupation: "Construction Manager",
    location: "Chicago, IL",
    scenario: "Weekend trail hiking",
    distance: "6 miles",
    pace: "Moderate terrain (2.5 mph)",
    time: "2 hr 24 min",
    frequency: "Every Saturday",
    weeklyTotal: "6+ miles hiking",
    calories: "540 cal",
    steps: "13,500 steps",
    context: "Uses weekend hikes to decompress from high-stress job site management. Elevation gain of 800 ft adds intensity. Has completed 47 of Illinois' marked trail systems.",
    healthBenefit: "Stress reduction & leg strength",
    heartRateZone: "Zone 2-3 (endurance/tempo)",
  },
];

// Walking speed by age data
const walkingSpeedByAge = [
  { age: "20-29", male: "3.04 mph", female: "3.00 mph", time: "20 min" },
  { age: "30-39", male: "3.20 mph", female: "3.00 mph", time: "19 min" },
  { age: "40-49", male: "3.20 mph", female: "3.11 mph", time: "19 min" },
  { age: "50-59", male: "3.20 mph", female: "2.93 mph", time: "19 min" },
  { age: "60-69", male: "3.00 mph", female: "2.77 mph", time: "21 min" },
  { age: "70-79", male: "2.82 mph", female: "2.53 mph", time: "23 min" },
  { age: "80+", male: "2.17 mph", female: "2.07 mph", time: "28 min" },
];

// FAQ data for schema
const faqData = [
  {
    question: "How long does it take to walk a mile?",
    answer: "It takes about 15-22 minutes to walk a mile for most adults. At a moderate pace of 3.0 mph, walking a mile takes exactly 20 minutes. Brisk walkers (3.5 mph) complete a mile in about 17 minutes, while leisurely walkers (2.5 mph) take around 24 minutes.",
  },
  {
    question: "How long does it take to walk 2 miles?",
    answer: "Walking 2 miles takes approximately 30-45 minutes for most people. At the average walking speed of 3.0 mph, 2 miles takes 40 minutes. Brisk walkers can complete it in about 34 minutes.",
  },
  {
    question: "How far can you walk in 30 minutes?",
    answer: "In 30 minutes of walking, most people cover 1.25 to 1.75 miles. At a moderate pace (3.0 mph), you'll walk 1.5 miles. Brisk walkers (3.5 mph) can cover about 1.75 miles in the same time.",
  },
  {
    question: "What is a good walking pace?",
    answer: "A good walking pace for health benefits is 3.0-3.5 mph (moderate to brisk). This equals a 17-20 minute mile. For reference: leisurely is 2.0-2.5 mph, moderate is 2.8-3.2 mph, brisk is 3.2-3.5 mph, and power walking is 4.0+ mph.",
  },
  {
    question: "How many calories do you burn walking a mile?",
    answer: "Walking a mile burns approximately 80-100 calories for most adults, depending on body weight and pace. A 150-pound person burns about 80 calories per mile at moderate pace. Heavier individuals and faster paces burn more calories.",
  },
  {
    question: "How long does it take to run a 5K?",
    answer: "A 5K (3.1 miles) takes 20-40 minutes to run, depending on fitness level. Beginners typically finish in 30-40 minutes, intermediate runners in 22-30 minutes, and advanced runners under 22 minutes. Elite runners complete a 5K in under 15 minutes.",
  },
  {
    question: "Does walking speed decrease with age?",
    answer: "Yes, walking speed naturally decreases with age. Adults in their 30s-40s walk fastest at about 3.2 mph. Speed gradually decreases to 2.8-3.0 mph in the 60s, and 2.1-2.5 mph for those 80+. Regular exercise can help maintain walking speed.",
  },
  {
    question: "How many steps is 1 mile?",
    answer: "One mile equals approximately 2,000-2,500 steps, depending on your stride length. The average is about 2,252 steps per mile. Taller individuals with longer strides take fewer steps, while shorter individuals take more.",
  },
];

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// HowTo Schema for AI visibility
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Walking Time for Any Distance",
  description: "Learn how to calculate exactly how long it takes to walk any distance based on your pace and fitness level.",
  step: [
    {
      "@type": "HowToStep",
      name: "Enter your distance",
      text: "Enter the distance you want to walk in miles or kilometers. You can use decimals for partial distances (e.g., 1.5 miles).",
    },
    {
      "@type": "HowToStep",
      name: "Select your unit preference",
      text: "Choose between miles and kilometers using the toggle button.",
    },
    {
      "@type": "HowToStep",
      name: "Click Calculate",
      text: "Press the Calculate button to see your walking times across different paces.",
    },
    {
      "@type": "HowToStep",
      name: "Review your results",
      text: "View walking times for leisurely, moderate, brisk, and fast paces. The highlighted row shows the most common moderate pace (3.0 mph).",
    },
    {
      "@type": "HowToStep",
      name: "Check additional info",
      text: "Optionally, enter your weight to see estimated calories burned, and view the total step count for your distance.",
    },
  ],
};

export default function HomePage() {
  // Schema data
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
  ];
  const webAppSchema = createWebAppSchema({
    name: "Walking & Running Time Calculator",
    description:
      "Free calculators for walking and running times. Find how long it takes to walk 1 mile, run a 5K, or cover any distance.",
    url: "https://howlongtowalk.org",
    applicationCategory: "HealthApplication",
  });

  return (
    <>
      {/* Schema.org JSON-LD */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />

      <div className="content-container py-8">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          {/* Brand Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-gradient-to-r from-teal-50 to-white px-4 py-1.5 text-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-teal-600 to-teal-500 text-[8px] font-extrabold text-white">
              HLW
            </span>
            <span className="font-medium text-teal-800">howlongtowalk.org</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Free Calculator</span>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            How Long Does It Take to Walk a Mile?
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            <strong>Get your answer instantly.</strong> Enter any distance, select your pace,
            and see exactly how long it takes to walk or run — personalized by age and fitness level.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">
            Trusted by runners, walkers, and fitness enthusiasts. Based on peer-reviewed research from 23,111 participants.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm">
            <span className="rounded-full bg-teal-50 px-3 py-1.5 font-medium text-teal-700">Walking Time</span>
            <span className="rounded-full bg-teal-50 px-3 py-1.5 font-medium text-teal-700">Running Time</span>
            <span className="rounded-full bg-teal-50 px-3 py-1.5 font-medium text-teal-700">Distance Calculator</span>
            <span className="rounded-full bg-teal-50 px-3 py-1.5 font-medium text-teal-700">Calories Burned</span>
            <span className="rounded-full bg-teal-50 px-3 py-1.5 font-medium text-teal-700">Step Counter</span>
          </div>
        </div>

        {/* Quick Answer Box - Featured Snippet Target */}
        <div className="mb-8 rounded-xl border-2 border-teal-200 bg-teal-50 p-6">
          <h2 className="mb-3 text-lg font-bold text-teal-900">Quick Answer: Walking a Mile</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-teal-700">20 min</div>
              <div className="text-sm text-gray-600">Moderate pace (3.0 mph)</div>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-teal-700">17 min</div>
              <div className="text-sm text-gray-600">Brisk pace (3.5 mph)</div>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-teal-700">15 min</div>
              <div className="text-sm text-gray-600">Fast pace (4.0 mph)</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-teal-800">
            Most adults walk at 3.0 mph, taking <strong>20 minutes per mile</strong>.
            Use the calculator below for precise times based on your distance and pace.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="mb-12">
          <TabbedCalculator initialTab="walk" />
        </div>

        {/* How to Use Section */}
        <section className="mb-12 rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            How to Use the Walking Time Calculator
          </h2>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">1</div>
              <h3 className="font-semibold text-gray-900">Enter Distance</h3>
              <p className="text-sm text-gray-600">Type the distance you want to walk</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">2</div>
              <h3 className="font-semibold text-gray-900">Select Units</h3>
              <p className="text-sm text-gray-600">Choose miles or kilometers</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">3</div>
              <h3 className="font-semibold text-gray-900">Click Calculate</h3>
              <p className="text-sm text-gray-600">Press the button to get results</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">4</div>
              <h3 className="font-semibold text-gray-900">View Times</h3>
              <p className="text-sm text-gray-600">See times for all pace levels</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">5</div>
              <h3 className="font-semibold text-gray-900">Add Weight</h3>
              <p className="text-sm text-gray-600">Optional: see calories burned</p>
            </div>
          </div>
        </section>

        {/* Real-World Examples - Case Studies */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Real-World Case Studies: Walking & Running in Practice
          </h2>
          <p className="mb-6 text-gray-600">
            How real people incorporate walking and running into their lives. These examples demonstrate
            practical applications across different ages, occupations, and fitness goals.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            {realWorldExamples.map((example, index) => (
              <div key={example.name} className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-5 py-4 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
                        {example.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{example.name}</h3>
                        <p className="text-sm text-gray-600">{example.occupation}, {example.age}</p>
                        <p className="text-xs text-gray-400">{example.location}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
                      Case #{index + 1}
                    </span>
                  </div>
                </div>

                {/* Activity Details */}
                <div className="px-5 py-4">
                  <div className="mb-4">
                    <div className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">Activity</div>
                    <p className="font-semibold text-gray-900">{example.scenario}</p>
                    <p className="text-sm text-gray-600">{example.distance} · {example.pace}</p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="mb-4 grid grid-cols-4 gap-3 rounded-lg bg-gray-50 p-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-teal-700">{example.time}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-teal-700">{example.calories}</div>
                      <div className="text-xs text-gray-500">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-teal-700">{example.steps}</div>
                      <div className="text-xs text-gray-500">Steps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-teal-700">{example.frequency}</div>
                      <div className="text-xs text-gray-500">Frequency</div>
                    </div>
                  </div>

                  {/* Context */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">{example.context}</p>
                  </div>

                  {/* Health Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                      {example.healthBenefit}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {example.heartRateZone}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                      {example.weeklyTotal}/week
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            These examples represent typical use cases based on clinical guidelines and fitness research.
            Individual results vary based on factors including terrain, weather, and baseline fitness.
          </p>
        </section>

        {/* Walking Time Section */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Walking Time by Distance
          </h2>
          <p className="mb-6 text-gray-600">
            How long does it take to walk 1 mile, 2 miles, 5 miles, or more? Here are the most common distances:
          </p>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Distance</th>
                  <th>Moderate (3.0 mph)</th>
                  <th>Brisk (3.5 mph)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {popularWalkingDistances.map((row) => (
                  <tr key={row.slug}>
                    <td className="font-medium text-gray-900">{row.label}</td>
                    <td>{row.time}</td>
                    <td>{row.briskTime}</td>
                    <td>
                      <Link
                        href={`/how-long-to-walk/${row.slug}`}
                        className="text-teal-700 hover:text-teal-900 hover:underline"
                      >
                        Details →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <Link
              href="/how-long-to-walk"
              className="text-sm font-medium text-teal-700 hover:text-teal-900 hover:underline"
            >
              See all walking distances →
            </Link>
          </div>
        </section>

        {/* Running Time Section */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Running Time by Distance & Level
          </h2>
          <p className="mb-6 text-gray-600">
            How long to run a 5K, 10K, half marathon, or marathon? Times vary by experience level:
          </p>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Distance</th>
                  <th>Beginner</th>
                  <th>Intermediate</th>
                  <th>Advanced</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {popularRunningDistances.map((row) => (
                  <tr key={row.slug}>
                    <td className="font-medium text-gray-900">{row.label}</td>
                    <td>{row.beginner}</td>
                    <td>{row.intermediate}</td>
                    <td>{row.advanced}</td>
                    <td>
                      <Link
                        href={`/how-long-to-run/${row.slug}`}
                        className="text-teal-700 hover:text-teal-900 hover:underline"
                      >
                        Details →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <Link
              href="/how-long-to-run"
              className="text-sm font-medium text-teal-700 hover:text-teal-900 hover:underline"
            >
              See all running distances →
            </Link>
          </div>
        </section>

        {/* Distance Calculator Section */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            How Far Can You Walk in X Minutes?
          </h2>
          <p className="mb-6 text-gray-600">
            Planning your walk? See how far you can go in a given amount of time:
          </p>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Time Available</th>
                  <th>Moderate Pace</th>
                  <th>Brisk Pace</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {commonTimeWindows.map((row) => (
                  <tr key={row.slug}>
                    <td className="font-medium text-gray-900">{row.label}</td>
                    <td>{row.moderate}</td>
                    <td>{row.brisk}</td>
                    <td>
                      <Link
                        href={`/how-far-can-i-walk/${row.slug}`}
                        className="text-teal-700 hover:text-teal-900 hover:underline"
                      >
                        Details →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <Link
              href="/how-far-can-i-walk"
              className="text-sm font-medium text-teal-700 hover:text-teal-900 hover:underline"
            >
              See all time durations →
            </Link>
          </div>
        </section>

        {/* Walking Speed by Age */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Average Walking Speed by Age
          </h2>
          <p className="mb-6 text-gray-600">
            Walking speed naturally varies by age group. Here&apos;s the data from research on 23,111 participants:
          </p>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Age Group</th>
                  <th>Men</th>
                  <th>Women</th>
                  <th>Time per Mile</th>
                </tr>
              </thead>
              <tbody>
                {walkingSpeedByAge.map((row) => (
                  <tr key={row.age}>
                    <td className="font-medium text-gray-900">{row.age}</td>
                    <td>{row.male}</td>
                    <td>{row.female}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Source: Bohannon & Andrews (2011), meta-analysis of 41 studies.{" "}
            <Link href="/walking-speed" className="text-teal-700 hover:underline">
              View full walking speed reference →
            </Link>
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group rounded-lg border border-gray-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-gray-900">
                  {faq.question}
                  <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="border-t border-gray-100 px-4 py-3 text-gray-700">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Why This Site - Trust Signals */}
        <section className="mb-12 rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Why Trust Our Calculations?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl">📊</div>
              <h3 className="mb-1 font-semibold text-gray-900">Research-Based Data</h3>
              <p className="text-sm text-gray-600">
                All calculations use the Bohannon & Andrews (2011) meta-analysis — the largest study of walking speeds ever published, with 23,111 participants across 41 studies.
              </p>
            </div>
            <div>
              <div className="mb-2 text-3xl">👥</div>
              <h3 className="mb-1 font-semibold text-gray-900">Age-Adjusted</h3>
              <p className="text-sm text-gray-600">
                Unlike generic calculators, we account for natural changes in walking speed with age — from your 20s through your 80s.
              </p>
            </div>
            <div>
              <div className="mb-2 text-3xl">🎯</div>
              <h3 className="mb-1 font-semibold text-gray-900">Precise Results</h3>
              <p className="text-sm text-gray-600">
                Enter any distance, get exact times for 5+ different pace levels. No vague ranges or SEO filler — just the numbers you need.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Article Categories */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Explore Our Guides
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/how-long-to-walk" className="group rounded-lg border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
              <div className="mb-3 text-3xl">🚶</div>
              <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-teal-700">Walking Time Guides</h3>
              <p className="text-sm text-gray-600">
                Detailed guides for walking half a mile to 100 miles. Times, calories, steps, and tips for every distance.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-teal-700">22 guides →</span>
            </Link>
            <Link href="/how-long-to-run" className="group rounded-lg border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
              <div className="mb-3 text-3xl">🏃</div>
              <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-teal-700">Running Time Guides</h3>
              <p className="text-sm text-gray-600">
                From your first mile to ultramarathons. Race times by level, training tips, and pace charts.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-teal-700">21 guides →</span>
            </Link>
            <Link href="/how-far-can-i-walk" className="group rounded-lg border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
              <div className="mb-3 text-3xl">📍</div>
              <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-teal-700">Distance Guides</h3>
              <p className="text-sm text-gray-600">
                How far can you walk in 10 minutes? 30 minutes? An hour? Find your walking radius.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-teal-700">10 guides →</span>
            </Link>
          </div>
        </section>

        {/* Walking Pace Guide */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Understanding Walking Pace Levels
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
              <h3 className="font-semibold text-green-800">Leisurely</h3>
              <p className="text-2xl font-bold text-green-700">2.0 mph</p>
              <p className="text-sm text-green-700">30 min/mile</p>
              <p className="mt-2 text-xs text-green-600">Casual stroll, window shopping, conversation pace</p>
            </div>
            <div className="rounded-lg border-l-4 border-teal-400 bg-teal-50 p-4">
              <h3 className="font-semibold text-teal-800">Moderate</h3>
              <p className="text-2xl font-bold text-teal-700">3.0 mph</p>
              <p className="text-sm text-teal-700">20 min/mile</p>
              <p className="mt-2 text-xs text-teal-600">Average walking speed, light exercise, commuting</p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
              <h3 className="font-semibold text-blue-800">Brisk</h3>
              <p className="text-2xl font-bold text-blue-700">3.5 mph</p>
              <p className="text-sm text-blue-700">17 min/mile</p>
              <p className="mt-2 text-xs text-blue-600">Fitness walking, elevated heart rate, purposeful</p>
            </div>
            <div className="rounded-lg border-l-4 border-purple-400 bg-purple-50 p-4">
              <h3 className="font-semibold text-purple-800">Power Walking</h3>
              <p className="text-2xl font-bold text-purple-700">4.5 mph</p>
              <p className="text-sm text-purple-700">13 min/mile</p>
              <p className="mt-2 text-xs text-purple-600">Athletic pace, workout intensity, race walking</p>
            </div>
          </div>
        </section>

        {/* Footer Links */}
        <section className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/about" className="text-teal-700 hover:text-teal-900 hover:underline">
              About & Methodology
            </Link>
            <Link href="/walking-speed" className="text-teal-700 hover:text-teal-900 hover:underline">
              Walking Speed Reference
            </Link>
            <Link href="/how-long-to-walk" className="text-teal-700 hover:text-teal-900 hover:underline">
              All Walking Distances
            </Link>
            <Link href="/how-long-to-run" className="text-teal-700 hover:text-teal-900 hover:underline">
              All Running Distances
            </Link>
            <Link href="/how-far-can-i-walk" className="text-teal-700 hover:text-teal-900 hover:underline">
              Distance Calculator
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
