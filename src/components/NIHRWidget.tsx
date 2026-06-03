import { useState } from "react";

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
    <section className="py-12 sm:py-16 px-5 sm:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-[0_10px_40px_-15px_rgba(0,48,135,0.25)]">
          {/* Top band with logo + decorative wave */}
          <div className="relative px-6 sm:px-10 pt-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="text-[#193E72] font-extrabold text-2xl sm:text-3xl tracking-tight">
                NIHR
              </span>
              <span className="h-7 w-px bg-[#E04F39]" />
              <span className="text-[#193E72] font-semibold text-lg sm:text-xl leading-tight">
                Be Part<br className="sm:hidden" /> of Research
              </span>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 h-full w-1/2 opacity-80"
              style={{
                background:
                  "radial-gradient(60% 120% at 80% 20%, #F4C56B 0%, transparent 55%), radial-gradient(50% 120% at 100% 80%, #2BB3A3 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Body */}
          <div className="px-6 sm:px-10 py-7 sm:py-9 grid md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-[#193E72] font-bold text-2xl sm:text-3xl leading-tight">
                Help change lives with research
              </h3>
              <p className="mt-3 text-slate-700 text-base sm:text-lg leading-relaxed">
                <span className="font-semibold">Find</span>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  aria-label="Research topic"
                  className="mx-1.5 px-2 py-1 rounded-md border border-slate-300 bg-white font-semibold text-[#193E72] focus:outline-none focus:ring-2 focus:ring-[#193E72]/30"
                >
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <span className="font-semibold">studies in</span>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  aria-label="Location"
                  className="mx-1.5 px-2 py-1 rounded-md border border-slate-300 bg-white font-semibold text-[#193E72] focus:outline-none focus:ring-2 focus:ring-[#193E72]/30"
                >
                  {LOCATIONS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
                <span> currently looking for people like you to take part.</span>
              </p>
            </div>

            <button
              type="button"
              onClick={handleClick}
              className="inline-flex items-center justify-center gap-2 bg-[#193E72] hover:bg-[#0f2d57] text-white font-semibold text-base sm:text-lg px-6 py-4 rounded-md transition-colors min-h-11 whitespace-nowrap"
            >
              Find studies now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NIHRWidget;