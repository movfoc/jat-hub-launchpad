export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-8 text-center text-muted-foreground">
        <p>&copy; 2025 JATLINK. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a 
            href="#" 
            className="hover:text-foreground transition-colors"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a 
            href="#" 
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a 
            href="#" 
            className="hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};
