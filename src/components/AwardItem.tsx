interface AwardItemProps {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

const AwardItem = ({ title, organization, year, description }: AwardItemProps) => {
  return (
    <div className="mb-4 pb-4 border-b border-border last:border-b-0 last:pb-0 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{organization}</p>
          {description && (
            <p className="text-muted-foreground text-sm mt-1 font-serif-italic">
              {description}
            </p>
          )}
        </div>
        <span className="text-sm text-muted-foreground flex-shrink-0">{year}</span>
      </div>
    </div>
  );
};

export default AwardItem;
