import Layout from "@/components/Layout";
import ProfileHeader from "@/components/ProfileHeader";
import CollaborationCallout from "@/components/CollaborationCallout";
import Section from "@/components/Section";
import EducationItem from "@/components/EducationItem";
import ExperienceItem from "@/components/ExperienceItem";
import TalkItem from "@/components/TalkItem";
import ProjectItem from "@/components/ProjectItem";
import AwardItem from "@/components/AwardItem";
import SkillsSection from "@/components/SkillsSection";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const profileData = {
    name: "Dr. Alex Chen",
    phone: "+1 (555) 123-4567",
    email: "alex.chen@university.edu",
    profileImage: profilePhoto,
    bio: "I am a passionate researcher currently pursuing my Ph.D. at Stanford University, California. My interests lie in the areas of Deep Learning, Machine Learning, Natural Language Processing, Computer Vision, and Artificial Intelligence.",
  };

  const education = [
    {
      institution: "Stanford University",
      location: "Stanford, CA, USA",
      period: "Sept 2021 - Present",
      degree: "Ph.D., Computer Science",
      advisor: { name: "Dr. Andrew Ng", url: "https://scholar.google.com" },
      links: [{ label: "Proposal", url: "#" }],
    },
    {
      institution: "MIT",
      location: "Cambridge, MA, USA",
      period: "Sept 2019 - June 2021",
      degree: "MS, Computer Science",
      thesis: "Attention Mechanisms in Vision Transformers",
      advisor: { name: "Dr. Regina Barzilay", url: "https://scholar.google.com" },
      links: [{ label: "PDF", url: "#" }],
    },
    {
      institution: "UC Berkeley",
      location: "Berkeley, CA, USA",
      period: "Aug 2015 - May 2019",
      degree: "BS, Computer Science & Mathematics",
      advisor: { name: "Dr. Stuart Russell", url: "https://scholar.google.com" },
    },
  ];

  const researchExperience = [
    {
      institution: "Stanford University",
      location: "Stanford, CA, USA",
      period: "Sept 2021 - Present",
      role: "Graduate Research Assistant",
      advisor: { name: "Dr. Andrew Ng", url: "https://scholar.google.com" },
    },
    {
      institution: "Google DeepMind",
      location: "London, UK",
      period: "June 2023 - Sept 2023",
      role: "Research Intern",
      advisor: { name: "Dr. Demis Hassabis", url: "https://scholar.google.com" },
      links: [{ label: "Paper", url: "#" }],
    },
    {
      institution: "Meta AI Research",
      location: "Menlo Park, CA, USA",
      period: "May 2022 - Aug 2022",
      role: "Research Intern",
      advisor: { name: "Dr. Yann LeCun", url: "https://scholar.google.com" },
    },
    {
      institution: "Microsoft Research",
      location: "Redmond, WA, USA",
      period: "June 2020 - Aug 2020",
      role: "Research Intern",
      advisor: { name: "Dr. Eric Horvitz", url: "https://scholar.google.com" },
      links: [{ label: "Patent", url: "#" }],
    },
  ];

  const projects = [
    {
      title: "FlashAttention: Fast and Memory-Efficient Attention",
      description: "Developed a novel IO-aware algorithm for computing exact attention with sub-quadratic memory complexity. This enables training of longer context transformers and reduces GPU memory usage by up to 10x while achieving 2-4x speedup.",
      techStack: ["PyTorch", "CUDA", "Triton", "C++"],
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
      links: [
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" },
      ],
    },
    {
      title: "Vision Transformer Scaling Study",
      description: "Conducted comprehensive study on scaling vision transformers to 22 billion parameters. Investigated training stability, emergent capabilities, and transfer learning efficiency at unprecedented scales.",
      techStack: ["JAX", "TPU", "TensorFlow"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
      links: [
        { label: "Paper", url: "#" },
        { label: "Demo", url: "#" },
      ],
    },
    {
      title: "Constitutional AI Framework",
      description: "Built a framework for training AI systems using principles from human feedback and constitutional constraints. Achieved significant improvements in harmlessness while maintaining helpfulness.",
      techStack: ["Python", "PyTorch", "Anthropic Claude"],
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop",
      links: [
        { label: "Paper", url: "#" },
        { label: "ArXiv", url: "#" },
      ],
    },
  ];

  const awards = [
    {
      title: "Best Paper Award",
      organization: "NeurIPS 2023",
      year: "2023",
      description: "For contributions to efficient attention mechanisms",
    },
    {
      title: "Google PhD Fellowship",
      organization: "Google Research",
      year: "2022",
      description: "Awarded for outstanding research in machine learning",
    },
    {
      title: "NSF Graduate Research Fellowship",
      organization: "National Science Foundation",
      year: "2021",
    },
    {
      title: "Outstanding Graduate Student Award",
      organization: "MIT EECS Department",
      year: "2021",
    },
    {
      title: "Valedictorian",
      organization: "UC Berkeley Computer Science",
      year: "2019",
    },
  ];

  const talks = [
    {
      venue: "NeurIPS 2023, New Orleans",
      title: "Efficient Attention Mechanisms for Long-Range Dependencies",
      slidesUrl: "#",
    },
    {
      venue: "ICML 2023, Hawaii",
      title: "Self-Supervised Learning for Multimodal Representations",
      slidesUrl: "#",
    },
    {
      venue: "Google Research Summit, Mountain View",
      title: "Scaling Language Models: Challenges and Opportunities",
      slidesUrl: "#",
    },
  ];

  const skills = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "Java", "Julia", "R", "MATLAB"],
    },
    {
      category: "ML/DL Frameworks",
      skills: ["PyTorch", "TensorFlow", "JAX", "Hugging Face", "scikit-learn"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "GCP", "Linux"],
    },
    {
      category: "Research Areas",
      skills: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "Generative Models",
      ],
    },
  ];

  return (
    <Layout>
      <ProfileHeader {...profileData} />
      
      <CollaborationCallout />

      <Section title="Education" id="education">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </Section>

      <Section title="Research Experience" id="research">
        {researchExperience.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </Section>

      <Section title="Awards" id="awards">
        {awards.map((award, index) => (
          <AwardItem key={index} {...award} />
        ))}
      </Section>

      <Section title="Academic Talks" id="talks">
        {talks.map((talk, index) => (
          <TalkItem key={index} {...talk} />
        ))}
      </Section>

      <Section title="Projects" id="projects">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </Section>

      <Section title="Technical Skills" id="skills">
        <SkillsSection skillCategories={skills} />
      </Section>
    </Layout>
  );
};

export default Index;
