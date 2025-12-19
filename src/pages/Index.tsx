import Navigation from "@/components/Navigation";
import ProfileHeader from "@/components/ProfileHeader";
import CollaborationCallout from "@/components/CollaborationCallout";
import Section from "@/components/Section";
import EducationItem from "@/components/EducationItem";
import ExperienceItem from "@/components/ExperienceItem";
import TalkItem from "@/components/TalkItem";
import PublicationItem from "@/components/PublicationItem";
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

  const teaching = [
    {
      institution: "Stanford University",
      location: "Stanford, CA, USA",
      period: "Fall 2023",
      role: "Teaching Assistant - CS229: Machine Learning",
      links: [{ label: "Slides", url: "#" }],
    },
    {
      institution: "Stanford University",
      location: "Stanford, CA, USA",
      period: "Spring 2023",
      role: "Teaching Assistant - CS231N: Deep Learning for Computer Vision",
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

  const publications = [
    {
      title: "FlashAttention-3: Fast and Memory-Efficient Exact Attention",
      authors: "A. Chen, T. Dao, D. Fu, S. Ermon, A. Rudra, C. Ré",
      venue: "NeurIPS",
      year: "2023",
      links: [
        { label: "PDF", url: "#" },
        { label: "Code", url: "#" },
      ],
    },
    {
      title: "Scaling Vision Transformers to 22 Billion Parameters",
      authors: "A. Chen, M. Dehghani, et al.",
      venue: "ICML",
      year: "2023",
      links: [{ label: "PDF", url: "#" }],
    },
    {
      title: "Constitutional AI: Harmlessness from AI Feedback",
      authors: "A. Chen, Y. Bai, S. Kadavath, et al.",
      venue: "ICLR",
      year: "2023",
      links: [
        { label: "PDF", url: "#" },
        { label: "ArXiv", url: "#" },
      ],
    },
    {
      title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
      authors: "A. Chen, J. Wei, X. Wang, D. Schuurmans, et al.",
      venue: "NeurIPS",
      year: "2022",
      links: [{ label: "PDF", url: "#" }],
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-8">
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

        <Section title="Teaching" id="teaching">
          {teaching.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </Section>

        <Section title="Academic Talks" id="talks">
          {talks.map((talk, index) => (
            <TalkItem key={index} {...talk} />
          ))}
        </Section>

        <Section title="Selected Publications" id="publications">
          {publications.map((pub, index) => (
            <PublicationItem key={index} {...pub} />
          ))}
        </Section>

        <Section title="Technical Skills" id="skills">
          <SkillsSection skillCategories={skills} />
        </Section>
      </main>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <div className="max-w-4xl mx-auto px-4">
          © {new Date().getFullYear()} Dr. Alex Chen. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
