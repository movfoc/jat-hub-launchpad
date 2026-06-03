import { useState, FormEvent } from "react";
import { Search, Heart, FlaskConical, Users, ExternalLink, Loader2 } from "lucide-react";

const NHS_BLUE = "#005EB8";
const NHS_DARK = "#003087";

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
  "Other",
];

const QUICK_CHIPS = ["Cancer", "Diabetes", "Mental Health", "Dementia", "Healthy Volunteers"];

const DISTANCES = [5, 10, 20, 50];

const NIHR = () => {
  const [topic, setTopic] = useState("");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("20");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ topic?: string; location?: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { topic?: string; location?: string } = {};
    if (!topic.trim()) newErrors.topic = "Please select or enter a research topic.";
    if (!location.trim()) newErrors.location = "Please enter a location.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    const url = `https://bepartofresearch.nihr.ac.uk/?query=${encodeURIComponent(
      topic.trim()
    )}&location=${encodeURIComponent(location.trim())}&distance=${encodeURIComponent(distance)}`;
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  };

  return (
    <div className="min-h-dvh bg-white text-slate-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <header className="border-b border-slate-200" style={{ backgroundColor: NHS_BLUE }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-white font-bold text-lg sm:text-xl tracking-tight">
            JAT Hub × NIHR
          </a>
          <a
            href="https://bepartofresearch.nihr.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white text-sm inline-flex items-center gap-1"
          >
            NIHR <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-6 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: NHS_DARK }}>
          Help Change Lives Through Research
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium">
          Find health and care research studies taking place near you.
        </p>
        <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
          Search thousands of UK research studies and discover opportunities to contribute to healthcare innovation.
        </p>
      </section>

      {/* Quick chips */}
      <section className="px-5 sm:px-6 max-w-3xl mx-auto">
        <p className="text-sm text-slate-500 text-center mb-3">Popular topics</p>
        <div className="flex flex-wrap justify-center gap-2">
          {QUICK_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => {
                setTopic(chip);
                setErrors((prev) => ({ ...prev, topic: undefined }));
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                topic === chip
                  ? "text-white border-transparent"
                  : "bg-white text-slate-700 border-slate-300 hover:border-[color:var(--nhs)] hover:text-[color:var(--nhs)]"
              }`}
              style={
                topic === chip
                  ? { backgroundColor: NHS_BLUE }
                  : ({ ["--nhs" as any]: NHS_BLUE } as React.CSSProperties)
              }
            >
              {chip}
            </button>
          ))}
        </div>
      </section>

      {/* Search Card */}
      <section className="px-5 sm:px-6 mt-6 mb-12 max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,48,135,0.2)] border border-slate-200 p-6 sm:p-8"
          aria-label="Find research studies"
        >
          <div className="space-y-5">
            {/* Topic */}
            <div>
              <label htmlFor="topic" className="block text-sm font-semibold text-slate-800 mb-2">
                Research Topic
              </label>
              <input
                id="topic"
                list="topics-list"
                type="text"
                value={topic}
                onChange={(e) => {
                  setTopic(e.target.value);
                  if (e.target.value.trim()) setErrors((prev) => ({ ...prev, topic: undefined }));
                }}
                placeholder="Select or type a condition"
                aria-invalid={!!errors.topic}
                aria-describedby={errors.topic ? "topic-error" : undefined}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-[color:var(--nhs)] focus:outline-none focus:ring-2 focus:ring-[color:var(--nhs)]/20 text-base"
                style={{ ["--nhs" as any]: NHS_BLUE } as React.CSSProperties}
              />
              <datalist id="topics-list">
                {TOPICS.map((t) => (
                  <option key={t} value={t} />
                ))}
              </datalist>
              {errors.topic && (
                <p id="topic-error" className="mt-1.5 text-sm text-red-600" role="alert">
                  {errors.topic}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-slate-800 mb-2">
                Location
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  if (e.target.value.trim()) setErrors((prev) => ({ ...prev, location: undefined }));
                }}
                placeholder="Enter city, town or postcode"
                aria-invalid={!!errors.location}
                aria-describedby={errors.location ? "location-error" : undefined}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-[color:var(--nhs)] focus:outline-none focus:ring-2 focus:ring-[color:var(--nhs)]/20 text-base"
                style={{ ["--nhs" as any]: NHS_BLUE } as React.CSSProperties}
              />
              {errors.location && (
                <p id="location-error" className="mt-1.5 text-sm text-red-600" role="alert">
                  {errors.location}
                </p>
              )}
            </div>

            {/* Distance */}
            <div>
              <label htmlFor="distance" className="block text-sm font-semibold text-slate-800 mb-2">
                Search Radius
              </label>
              <select
                id="distance"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-[color:var(--nhs)] focus:outline-none focus:ring-2 focus:ring-[color:var(--nhs)]/20 text-base bg-white"
                style={{ ["--nhs" as any]: NHS_BLUE } as React.CSSProperties}
              >
                {DISTANCES.map((d) => (
                  <option key={d} value={d}>
                    {d} miles
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 text-white font-bold text-lg py-4 rounded-lg transition-all hover:brightness-110 disabled:opacity-70 min-h-11"
              style={{ backgroundColor: NHS_BLUE }}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Redirecting…
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" /> Find Studies Now
                </>
              )}
            </button>
          </div>
        </form>
      </section>

      {/* Info Cards */}
      <section className="px-5 sm:px-6 max-w-6xl mx-auto pb-12">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: Search, title: "Discover Research", body: "Find studies related to conditions that matter to you." },
            { icon: FlaskConical, title: "Support Medical Innovation", body: "Help researchers develop better treatments and healthcare services." },
            { icon: Heart, title: "Make a Difference", body: "Contribute to future healthcare improvements across the UK." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${NHS_BLUE}15`, color: NHS_BLUE }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1.5" style={{ color: NHS_DARK }}>
                {title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="px-5 sm:px-6 pb-16">
        <div
          className="max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          style={{ backgroundColor: `${NHS_BLUE}0D`, border: `1px solid ${NHS_BLUE}33` }}
        >
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8" style={{ color: NHS_BLUE }} />
            <p className="font-semibold text-slate-800">Powered by NIHR Be Part of Research</p>
          </div>
          <a
            href="https://bepartofresearch.nihr.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white hover:brightness-110 transition-all min-h-11"
            style={{ backgroundColor: NHS_BLUE }}
          >
            Learn More <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        This service redirects to the NIHR Be Part of Research website.
      </footer>
    </div>
  );
};

export default NIHR;