import { Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground/60 text-sm">
          <div>
            <h3 className="text-foreground font-semibold mb-2">Legal Information</h3>
            <p className="mb-1">
              JatHub CIC is a Community Interest Company registered in England and Wales.
            </p>
            <p>
              Company Number: 17193758 | Registered Office: Suite 642 Chremma House,
              14 London Road, Guildford, Surrey, United Kingdom, GU1 2AG
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-2">Get in Touch</h3>
            <p>
              <a href="mailto:jat@jathub.com" className="hover:text-primary transition-colors">
                jat@jathub.com
              </a>
              {" | "}
              <a href="tel:+447766456376" className="hover:text-primary transition-colors">
                +44 7766 456376
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border/20">
          <p className="text-foreground/50 text-sm">
            © 2026 JatHub CIC. All rights reserved.
          </p>
        <div className="flex gap-6">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
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
