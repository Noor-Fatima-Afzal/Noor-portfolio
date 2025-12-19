import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

const Section = ({ title, children, id }: SectionProps) => {
  return (
    <section id={id} className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
        <div className="section-label hidden md:block">
          {title}
        </div>
        <div className="md:hidden font-serif-italic text-lg text-muted-foreground border-b border-border pb-2 mb-4">
          {title}
        </div>
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
};

export default Section;
