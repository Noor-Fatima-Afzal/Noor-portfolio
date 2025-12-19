const Navigation = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "CV", href: "/cv.pdf" },
    { label: "Google Scholar", href: "https://scholar.google.com", external: true },
    { label: "Awards", href: "#awards" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <nav className="bg-primary sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <ul className="flex items-center justify-start gap-1 py-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="nav-link inline-block text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
