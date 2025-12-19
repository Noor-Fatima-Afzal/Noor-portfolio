interface ExperienceItemProps {
  institution: string;
  location: string;
  period: string;
  role: string;
  advisor?: { name: string; url?: string };
  links?: { label: string; url: string }[];
}

const ExperienceItem = ({
  institution,
  location,
  period,
  role,
  advisor,
  links,
}: ExperienceItemProps) => {
  return (
    <div className="space-y-1">
      <h3 className="institution-title">
        {institution} - {location}
      </h3>
      <p className="text-muted-foreground text-sm">({period})</p>
      
      <div className="text-sm space-y-1 mt-2">
        <p>
          <span className="font-semibold">Role:</span> {role}
        </p>
        
        {advisor && (
          <p>
            <span className="font-semibold">Advisor:</span>{" "}
            {advisor.url ? (
              <a href={advisor.url} className="academic-link" target="_blank" rel="noopener noreferrer">
                {advisor.name}
              </a>
            ) : (
              advisor.name
            )}
          </p>
        )}
        
        {links && links.length > 0 && (
          <p>
            <span className="font-semibold">Link:</span>
            {links.map((link) => (
              <span key={link.label}>
                {" "}
                <a href={link.url} className="academic-link" target="_blank" rel="noopener noreferrer">
                  [{link.label}]
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
