interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

const SkillsSection = ({ skillCategories }: SkillsSectionProps) => {
  return (
    <div className="space-y-4">
      {skillCategories.map((category) => (
        <div key={category.category} className="text-sm">
          <span className="font-semibold">{category.category}:</span>{" "}
          <span className="text-muted-foreground">{category.skills.join(", ")}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
