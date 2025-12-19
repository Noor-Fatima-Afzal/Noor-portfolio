interface EducationItemProps {
  institution: string;
  location: string;
  period: string;
  degree: string;
  thesis?: string;
  advisor?: { name: string; url?: string };
  links?: { label: string; url: string }[];
}

const EducationItem = ({
  institution,
  location,
  period,
  degree,
  thesis,
  advisor,
  links,
}: EducationItemProps) => {
  return (
    <div className="space-y-1">
      <h3 className="institution-title">
        {institution} - {location}
      </h3>
      <p className="text-muted-foreground text-sm">({period})</p>
      
      <div className="text-sm space-y-1 mt-2">
        <p>
          <span className="font-semibold">Major:</span> {degree}
          {links?.map((link) => (
            <span key={link.label}>
              {" "}
              <a href={link.url} className="academic-link" target="_blank" rel="noopener noreferrer">
                [{link.label}]
              </a>
            </span>
          ))}
        </p>
        
        {thesis && (
          <p>
            <span className="font-semibold">Thesis:</span> {thesis}
          </p>
        )}
        
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
      </div>
    </div>
  );
};

export default EducationItem;
