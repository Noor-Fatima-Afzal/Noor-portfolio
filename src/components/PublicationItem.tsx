interface PublicationItemProps {
  title: string;
  authors: string;
  venue: string;
  year: string;
  links?: { label: string; url: string }[];
}

const PublicationItem = ({ title, authors, venue, year, links }: PublicationItemProps) => {
  return (
    <div className="space-y-1">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{authors}</p>
      <p className="text-sm">
        <span className="font-serif-italic">{venue}</span>, {year}
        {links?.map((link) => (
          <span key={link.label}>
            {" "}
            <a href={link.url} className="academic-link" target="_blank" rel="noopener noreferrer">
              [{link.label}]
            </a>
          </span>
        ))}
      </p>
    </div>
  );
};

export default PublicationItem;
