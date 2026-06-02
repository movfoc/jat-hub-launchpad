import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface WinnerArticleProps {
  date?: string;
  project: string;
  title: string;
  location: string;
  children: React.ReactNode;
}

export const XPloreWinnerArticle = ({
  date = "MAY 26, 2026",
  project,
  title,
  location,
  children,
}: WinnerArticleProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased selection:bg-[#D4FF00] selection:text-black">
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="font-mono text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D4FF00] rounded-sm shadow-[0_0_10px_#D4FF00]" />
            JatHub <span className="text-[#D4FF00]">X-PLORE</span>
          </Link>
          <Link to="/xplore" className="text-sm text-gray-400 hover:text-[#D4FF00] transition-colors">
            Back to X-PLORE
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/xplore#winners"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#D4FF00] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Winners
          </Link>

          <header className="mb-10">
            <div className="inline-block bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              2026 X-Plore Winner · {project}
            </div>
            <p className="text-sm font-semibold text-[#D4FF00] mb-3">{date}</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-400">{location}</h2>
          </header>

          <article className="prose prose-invert prose-lg max-w-none space-y-6">
            {children}
          </article>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        <p>&copy; 2026 JatHub. All rights reserved.</p>
      </footer>
    </div>
  );
};