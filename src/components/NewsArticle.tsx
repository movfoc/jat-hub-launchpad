import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface NewsArticleProps {
  date: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const NewsArticle = ({ date, title, subtitle, children }: NewsArticleProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          {/* Back Button */}
          <Link 
            to="/#news" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
          
          {/* Article Header */}
          <header className="mb-12">
            <p className="text-primary font-medium mb-4">{date}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {subtitle}
            </p>
          </header>
          
          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            {children}
          </article>
          
          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-foreground font-semibold mb-4">Share this article:</p>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/intent/tweet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
              >
                Share on X
              </a>
              <a 
                href="https://www.linkedin.com/sharing/share-offsite/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
              >
                Share on LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
              >
                Share on Instagram
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
