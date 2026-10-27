import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, ExternalLink, Mail, Newspaper, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import youthLogo from "@/assets/fou/future-of-youth-logo.png.asset.json";

const platforms = [
  { name: "LinkedIn", href: "https://www.linkedin.com/legal/privacy-policy" },
  { name: "Luma", href: "https://lu.ma/privacy" },
  { name: "Eventbrite", href: "https://www.eventbrite.com/help/en-us/articles/460838/eventbrite-privacy-policy/" },
];

const FutureOfYouthPrivacy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Privacy Policy | Future of Youth | JAT Hub";
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="youth-theme min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-6">
          <Link to="/future-of-youth" aria-label="Future of Youth event page">
            <img src={youthLogo.url} alt="Future of Youth" className="h-auto w-44 sm:w-56" />
          </Link>
          <Button asChild variant="ghost" className="text-foreground hover:bg-accent">
            <Link to="/future-of-youth"><ArrowLeft className="mr-2 h-4 w-4" />Back to event</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          <ShieldCheck className="h-5 w-5" /> Future of Youth · JAT Hub CIC
        </div>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Privacy policy</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          How registration information is used, and what to expect from photography and press coverage at our public festival events.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: 27 October 2026</p>

        <aside className="mt-8 border-l-4 border-primary bg-secondary px-5 py-5" aria-label="Public event notice">
          <div className="flex items-center gap-2 font-bold"><Camera className="h-5 w-5 shrink-0" />Photography &amp; press notice</div>
          <p className="mt-2 leading-relaxed">Future of Youth is a public event. Photographs will be taken, and press will report on the event. You may appear in group photographs, crowd scenes or coverage of public activities.</p>
          <p className="mt-2 leading-relaxed text-muted-foreground">If you prefer not to be photographed, please tell the event team or photographer on arrival. For a public event, we cannot guarantee that you will not appear in background images or independent press coverage.</p>
        </aside>

        <div className="mt-10 divide-y divide-border">
          <section className="pb-8" aria-labelledby="registration">
            <h2 id="registration" className="text-2xl font-bold">1. Registering through other platforms</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">You may register through LinkedIn, Luma, Eventbrite or Jatpoint. Each platform handles the information you submit under its own privacy notice and terms. Please read these before registering, including any choices about marketing or account settings.</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">The registration platform may share attendee details with JAT Hub CIC as the event organiser. Depending on the form you complete, this may include your name, email address, ticket or booking details, and any information you choose to provide. We use the details we receive to manage attendance, communicate essential event updates and respond to your enquiries.</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {platforms.map((platform) => <a key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:text-muted-foreground">{platform.name} privacy notice<ExternalLink className="h-3.5 w-3.5" /></a>)}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">For Jatpoint, please check the privacy information provided on its registration page or contact the platform directly.</p>
          </section>

          <section className="py-8" aria-labelledby="information">
            <h2 id="information" className="text-2xl font-bold">2. How we handle your information</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">We use personal information only for relevant event administration, communications and enquiries. We do not treat event registration as permission for unrelated marketing. Where consent is required, it should be requested separately and you can withdraw it.</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">Information may be shared with event staff, relevant venue teams or service providers where needed to run the event, or where required by law. We keep it only for as long as needed for the purpose for which it was collected and applicable legal obligations. Contact us for details about the information held for your booking.</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">Please avoid including unnecessary medical or other sensitive information in registration forms or the event assistant. If you need accessibility or welfare support, contact the event team so we can discuss the appropriate way to help.</p>
          </section>

          <section className="py-8" aria-labelledby="photography">
            <h2 id="photography" className="text-2xl font-bold">3. Event photography</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">Event photographs may be used to document and report on Future of Youth, including on JAT Hub websites, social media, event recaps and publicity for the festival series. Public attendance is not blanket consent to every use of your image.</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">General event reporting may rely on legitimate interests, balanced against attendees’ privacy rights. Where consent is needed, such as for a posed promotional photograph or identifiable promotional images of children, it should be sought separately from the person or an appropriate parent or guardian. You can decline a posed photograph.</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">To raise a concern or request removal of an organiser-published image, contact us with a link or a description of the photograph. We will consider your request and explain what we can do. Copies already shared by others may be outside our control.</p>
          </section>

          <section className="py-8" aria-labelledby="press">
            <h2 id="press" className="flex items-center gap-2 text-2xl font-bold"><Newspaper className="h-6 w-6 shrink-0" />4. Press &amp; public reporting</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">Press may attend, photograph and report on public event activities. Independent journalists and publishers are responsible for their own reporting and handling of personal information. Their privacy policies may differ from ours.</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">You can decline an interview or a request to pose for a photograph. Please speak to the event team if you have concerns. For material published by an independent outlet, contact that publisher directly; JAT Hub cannot guarantee removal of its coverage.</p>
          </section>

          <section className="py-8" aria-labelledby="rights">
            <h2 id="rights" className="text-2xl font-bold">5. Your choices &amp; privacy rights</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">Under UK data protection law, you may have rights to access, correct or request deletion of your personal information, restrict its use, or object to processing based on legitimate interests. These rights depend on the circumstances. Where we rely on consent, you can withdraw it without affecting earlier lawful use.</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">For information held by a registration platform, contact that platform. For information held by JAT Hub or organiser-published photographs, contact us below. You can also raise a concern with the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline underline-offset-4">Information Commissioner’s Office (ICO)</a>.</p>
          </section>

          <section className="pt-8" aria-labelledby="contact">
            <h2 id="contact" className="text-2xl font-bold">6. Contact JAT Hub CIC</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">For privacy questions, photography preferences or a request about your personal information, email the Future of Youth event team.</p>
            <Button asChild className="mt-5 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="mailto:jat@jathub.com?subject=Future%20of%20Youth%20privacy%20enquiry"><Mail className="mr-2 h-4 w-4" />jat@jathub.com</a>
            </Button>
          </section>
        </div>
      </main>
      <footer className="border-t border-border px-5 py-7 text-center text-sm text-muted-foreground">
        <Link to="/future-of-youth" className="underline underline-offset-4">Future of Youth</Link> · JAT Hub CIC
      </footer>
    </div>
  );
};

export default FutureOfYouthPrivacy;