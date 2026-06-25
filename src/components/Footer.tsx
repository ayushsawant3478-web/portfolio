import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer-section"
      className="w-full bg-[#0C0C0C] py-10 px-6 flex flex-col sm:flex-row items-center justify-center gap-6 select-none"
    >
      {/* Footer text details */}
      <p className="text-[#D7E2EA] font-light text-sm opacity-50 text-center sm:text-left">
        © 2026 Ayush Sawant · ayushsawant5478@gmail.com · Mumbai
      </p>

      {/* Social links block */}
      <div className="flex items-center gap-4">
        {/* GitHub link */}
        <a
          href="https://github.com/ayushsawant3478-web"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D7E2EA] transition-opacity hover:opacity-70 p-1"
          id="social-link-github"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </a>

        {/* LinkedIn link */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D7E2EA] transition-opacity hover:opacity-70 p-1"
          id="social-link-linkedin"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
