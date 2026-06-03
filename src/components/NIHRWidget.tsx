import { useState } from "react";
import nihrLogo from "@/assets/nihr-bepartofresearch-logo.png.asset.json";
import nhsLogo from "@/assets/nhs-logo.svg.asset.json";

const TOPICS = [
  "Cancer",
  "Diabetes",
  "Heart Disease",
  "Dementia",
  "Mental Health",
  "Asthma",
  "Stroke",
  "Arthritis",
  "Parkinson's Disease",
  "Healthy Volunteers",
  "Long COVID",
  "Obesity",
  "Rare Diseases",
];

const LOCATIONS = [
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Liverpool",
  "Bristol",
  "Sheffield",
  "Newcastle",
  "Nottingham",
  "Cambridge",
  "Oxford",
  "York",
  "Edinburgh",
  "Glasgow",
  "Cardiff",
  "Belfast",
  "Southampton",
  "Brighton",
  "Surrey",
  "Reading",
];

export const NIHRWidget = () => {
  const [topic, setTopic] = useState("Cancer");
  const [location, setLocation] = useState("York");
  const distance = 20;

  const handleClick = () => {
    const url = `https://bepartofresearch.nihr.ac.uk/results/search-results?query=${encodeURIComponent(
      topic.toLowerCase()
    )}&location=${encodeURIComponent(
      location
    )}&distance=${distance}&distance=${distance}&utm_source=https%3A%2F%2Fbepartofresearch.nihr.ac.uk%2Fresearchers-and-health-and-care-professionals%2Fweb-developer-resources%2F&utm_medium=widget`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-8 sm:py-10 px-5 sm:px-6 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-[#193E72]/15 shadow-[0_20px_60px_-20px_rgba(25,62,114,0.35)]">
          {/* Top band: logo + decorative wave */}
          <div className="relative h-[72px] sm:h-[84px] border-b border-slate-100 overflow-hidden">
            <img
              src={nihrLogo.url}
              alt="NIHR Be Part of Research"
              className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 h-10 sm:h-12 w-auto z-10"
            />
            <img
              src={nhsLogo.url}
              alt="NHS"
              className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 h-7 sm:h-8 w-auto z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-2/3"
              style={{
                background:
                  "radial-gradient(70% 140% at 70% 20%, #F4C56B 0%, transparent 55%), radial-gradient(60% 130% at 95% 70%, #2BB3A3 0%, transparent 60%), radial-gradient(50% 100% at 50% 100%, #6FBF8A 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Body */}
          <div className="px-6 sm:px-10 py-5 sm:py-6 grid md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-center">
            <div>
              <h3 className="text-[#193E72] font-bold text-xl sm:text-2xl leading-tight tracking-tight">
                Help change lives with research
              </h3>
              <p className="mt-2 text-[#193E72] text-sm sm:text-base leading-snug">
                <span className="font-bold">Find</span>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  aria-label="Research topic"
                  className="mx-1.5 px-2 py-0.5 rounded border-b-2 border-dashed border-[#193E72]/40 bg-transparent font-bold text-[#193E72] focus:outline-none focus:border-[#193E72] cursor-pointer"
                >
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>
                      {t.toLowerCase()}
                    </option>
                  ))}
                </select>
                <span className="font-bold">studies in</span>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  aria-label="Location"
                  className="mx-1.5 px-2 py-0.5 rounded border-b-2 border-dashed border-[#193E72]/40 bg-transparent font-bold text-[#193E72] focus:outline-none focus:border-[#193E72] cursor-pointer"
                >
                  {LOCATIONS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
                <span className="text-[#193E72]/90"> are currently looking for people like you to take part.</span>
              </p>
            </div>

            <button
              type="button"
              onClick={handleClick}
              className="inline-flex items-center justify-center gap-2 bg-[#F4C56B] hover:bg-[#eab84c] text-[#193E72] font-semibold text-sm sm:text-base px-5 py-2.5 rounded-md border-2 border-[#193E72] transition-colors whitespace-nowrap shadow-[0_4px_0_0_#193E72]/10"
            >
              Find studies now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 19l7-7-3-3 9-3-3 9-3-3-7 7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NIHRWidget;