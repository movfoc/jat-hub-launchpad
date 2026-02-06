import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import bhfLogo from "@/assets/bhf-logo.jpg";

const BHFTraining = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-10">
            <img
              src={bhfLogo}
              alt="British Heart Foundation"
              className="h-44 rounded-xl object-contain"
            />
          </div>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-center">
              Learn CPR. <span className="text-cpr">Save a Life.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify mb-8">
              <strong className="text-foreground">RevivR</strong> is a free, interactive, online CPR training tool provided by the British Heart Foundation, making it easy for you to learn how to save a life in 30 minutes and request a personalised CPR certificate.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify mb-8">
              It couldn't be simpler – you just need your mobile phone or tablet and a cushion to practise on.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify mb-8">
              <strong className="text-foreground">Jat Hub</strong> is the community partner of the British Heart Foundation. We invite you to participate in the training and get yourself a CPR certificate.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify mb-8">
              You can claim <strong className="text-primary">JATSCORE</strong> on{" "}
              <a
                href="https://jatpoint.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                jatpoint.com
              </a>{" "}
              upon showing us the evidence of your completion of the training. Please send the evidence to{" "}
              <a
                href="mailto:jat@jatpoint.com"
                className="text-primary hover:underline"
              >
                jat@jatpoint.com
              </a>.
            </p>

            {/* CTA */}
            <div className="flex justify-center mt-12">
              <Button
                size="lg"
                className="bg-cpr text-cpr-foreground hover:bg-cpr/90 transition-all hover:scale-105 text-lg px-10 py-7 font-semibold"
                asChild
              >
                <a
                  href="https://www.bhf.org.uk/how-you-can-help/how-to-save-a-life/how-to-do-cpr/learn-cpr-in-15-minutes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  START the Training Now
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BHFTraining;
