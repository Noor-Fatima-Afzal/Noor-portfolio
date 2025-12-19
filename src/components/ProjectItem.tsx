interface ProjectItemProps {
  title: string;
  description: string;
  techStack?: string[];
  imageUrl?: string;
  links?: { label: string; url: string }[];
}

const ProjectItem = ({ title, description, techStack, imageUrl, links }: ProjectItemProps) => {
  return (
    <div className="project-card">
      <div className="flex flex-col md:flex-row gap-6">
        {imageUrl && (
          <div className="flex-shrink-0 md:w-64">
            <img
              src={imageUrl}
              alt={`${title} project`}
              className="w-full h-40 md:h-32 object-cover rounded border border-border"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {description}
          </p>
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-secondary text-muted-foreground rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {links && links.length > 0 && (
            <div className="flex gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="academic-link text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [{link.label}]
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
