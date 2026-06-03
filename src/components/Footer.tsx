import { Youtube, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30 bg-background">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h3 className="text-gray-300 font-semibold mb-3 uppercase tracking-wider text-xs">Legal Information</h3>
            <p className="mb-2">JatHub CIC is a Community Interest Company registered in England and Wales.</p>
            <p><span className="text-gray-300">Company Number:</span> 17193758</p>
            <p><span className="text-gray-300">Registered Office:</span> Suite 642 Chremma House, 14 London Road, Guildford, Surrey, United Kingdom, GU1 2AG</p>
          </div>
          <div>
            <h3 className="text-gray-300 font-semibold mb-3 uppercase tracking-wider text-xs">Get in Touch</h3>
            <p>
              <a href="mailto:jat@jathub.com" className="hover:text-primary transition-colors">jat@jathub.com</a>
              <span className="mx-2">·</span>
              <a href="tel:+447766456376" className="hover:text-primary transition-colors">+44 7766 456376</a>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border/30">
          <p className="text-gray-400 text-sm">
            © 2026 JatHub CIC. All rights reserved.
          </p>
        <div className="flex gap-6">
          <a 
            href="https://www.youtube.com/@JatHub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/company/jathub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com/jathub_uk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};
