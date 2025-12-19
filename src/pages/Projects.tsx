import Layout from "@/components/Layout";
import Section from "@/components/Section";
import ProjectItem from "@/components/ProjectItem";

const Projects = () => {
  const projects = [
    {
      title: "Deep Learning for Genomic Sequence Analysis",
      description: "Developed a novel deep learning architecture for analyzing genomic sequences, achieving state-of-the-art performance in predicting gene expression levels from DNA sequences.",
      techStack: ["Python", "PyTorch", "Bioinformatics", "AWS"],
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      links: [
        { label: "GitHub", url: "https://github.com" },
        { label: "Paper", url: "https://arxiv.org" },
      ],
    },
    {
      title: "COVID-19 Variant Classification System",
      description: "Built a machine learning pipeline for rapid classification of COVID-19 variants using spike protein sequences, enabling faster identification of new variants.",
      techStack: ["Python", "TensorFlow", "Docker", "REST API"],
      imageUrl: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop",
      links: [
        { label: "GitHub", url: "https://github.com" },
        { label: "Demo", url: "https://demo.example.com" },
      ],
    },
    {
      title: "Natural Language Processing for Medical Records",
      description: "Created an NLP system to extract and structure information from unstructured medical records, improving clinical decision support systems.",
      techStack: ["Python", "BERT", "spaCy", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      links: [
        { label: "Paper", url: "https://arxiv.org" },
      ],
    },
    {
      title: "Distributed Machine Learning Framework",
      description: "Designed and implemented a distributed training framework for large-scale machine learning models, reducing training time by 70% on multi-GPU clusters.",
      techStack: ["Python", "PyTorch", "Kubernetes", "Redis"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      links: [
        { label: "GitHub", url: "https://github.com" },
      ],
    },
  ];

  return (
    <Layout>
      <Section title="Projects" id="projects">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Projects;
