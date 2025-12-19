import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "CV", href: "/cv.pdf", external: true },
    { label: "Google Scholar", href: "https://scholar.google.com", external: true },
    { label: "Awards", href: "/awards" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <nav className="bg-primary">
      <div className="max-w-4xl mx-auto px-4">
        <ul className="flex items-center justify-start gap-1 py-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link inline-block text-sm font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className={`nav-link inline-block text-sm font-medium ${
                    location.pathname === link.href ? "bg-primary-foreground/10" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
