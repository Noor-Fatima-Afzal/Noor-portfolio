interface TalkItemProps {
  venue: string;
  title: string;
  slidesUrl?: string;
}

const TalkItem = ({ venue, title, slidesUrl }: TalkItemProps) => {
  return (
    <div className="space-y-1">
      <h3 className="institution-title">{venue}</h3>
      <p className="text-sm">
        <span className="text-muted-foreground">Title:</span> {title}
      </p>
      {slidesUrl && (
        <p className="text-sm">
          <span className="font-semibold">Slides:</span>{" "}
          <a href={slidesUrl} className="academic-link" target="_blank" rel="noopener noreferrer">
            URL
          </a>
        </p>
      )}
    </div>
  );
};

export default TalkItem;
