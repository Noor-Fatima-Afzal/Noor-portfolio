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
import profilePhoto from "@/assets/profile-photo.jpeg";

const Index = () => {
  const profileData = {
    name: "Noor Fatima",
    phone: "+92 327 2734825",
    email: "noorfatimaafzalbutt@gmail.com",
    profileImage: profilePhoto,
    bio: "I am a motivated undergraduate researcher pursuing a BS in Computer Engineering at the University of Engineering and Technology (UET), Lahore. My research interests span Machine Learning, Deep Learning, EEG signal processing, Quantum Machine Learning, and Medical AI, with a strong focus on building data-driven, efficient, and clinically relevant intelligent systems.",
  };

  const education = [
{
  institution: "University of Engineering and Technology (UET) Lahore, Pakistan",
  location: "Lahore, Pakistan",
  period: "Sept 2023 - Present",
  degree: "BS, Computer Engineering",
  cgpa: "3.79 / 4",  // added CGPA here
  advisor: { 
    name: "Prof. Dr. Muhammad Shahhbaz", 
    url: "https://scholar.google.com/citations?user=rQk-wHAAAAAJ&hl=en" 
  },
  // links: [{ label: "Proposal", url: "#" }],
},

    {
      institution: "Punjab Group of Colleges, Wazirabad Campus, Pakistan",
      location: "Wazirabad, Pakistan",
      period: "Sept 2021 - June 2023",
      degree: "FSc. Pre-Engineering",
      subjects: "Mathematics, Physics, Chemistry",
      honour: [{ label: "PDF", url: "#" }],
    },  
  ];

  const researchExperience = [
    {
      institution: "Alkhawarizmi Institute of Computer Science (KICS)",
      location: "Lahore, Pakistan",
      period: "June 2024 - Present",
      role: "Research Assistant",
      advisor: { name: "Prof. Dr. Muhammad Shahhbaz", url: "https://scholar.google.com/citations?user=rQk-wHAAAAAJ&hl=en" },
    },
    {
      institution: "National Center for Quantum Computing (NCQC)",
      location: "Lahore, Pakistan",
      period: "May 2025 - Sept 2025",
      role: "Research Intern",
      advisor: { name: "Prof. Dr. Muhammad Shahhbaz", url: "https://scholar.google.com/citations?user=rQk-wHAAAAAJ&hl=en" },
      links: [{ label: "Paper", url: "https://scholar.google.com/citations?user=WRKxdKYAAAAJ&hl=en" }],
    },
    {
      institution: "Datalabb AI Research and Development",
      location: "Lahore, Pakistan",
      period: "March 2024 - June 2024",
      role: "Machine Learning Intern",
      advisor: { name: "Prof. Dr. Muhammad Shahhbaz", url: "https://scholar.google.com/citations?user=rQk-wHAAAAAJ&hl=en" },
    },
    {
      institution: "Bytewise Limited",
      location: "Remote",
      period: "Jun 2024 – Sep 2024",
      role: "Machine Learning Fellowship",
      // advisor: { name: "Dr. Eric Horvitz", url: "https://scholar.google.com" },
      // links: [{ label: "Patent", url: "#" }],
    },
  ];

  // const projects = [
  // {
  //   title: "Physics-Informed Neural Network for Solar Irradiance Forecasting",
  //   description: "Accurately forecast Global Horizontal Irradiance (GHI) for renewable energy systems while ensuring physical consistency. Integrates solar physics knowledge, PDE residuals, and monotonicity priors for improved robustness and interpretability, achieving R2 = 0.989.",
  //   techStack: ["Python", "TensorFlow", "PDE Modeling", "Physics-Informed NN"],
  //   imageUrl: "https://images.unsplash.com/photo-placeholder?w=400&h=200&fit=crop",
  //   links: [
  //     { label: "Paper", url: "#" },
  //     { label: "Code", url: "#" },
  //   ],
  // },
  // {
  //   title: "Teeth Segmentation & 3D Volume Rendering",
  //   description: "Automatic segmentation of dental DICOM volumes into enamel, root, and nerve. Uses U-Net–based 2D slice segmentation, morphological post-processing, and marching cubes 3D reconstruction, achieving 99.8% mean segmentation accuracy.",
  //   techStack: ["Python", "PyTorch", "U-Net", "3D Visualization"],
  //   imageUrl: "https://images.unsplash.com/photo-placeholder?w=400&h=200&fit=crop",
  //   links: [
  //     { label: "Paper", url: "#" },
  //     { label: "Code", url: "#" },
  //   ],
  // },
  // {
  //   title: "Cognitive & Energy-Efficient Sleep Stage Classification",
  //   description: "Classify sleep stages using spiking neural networks (SNNs) on EEG. Leverages event-driven neuromorphic processing to capture spatiotemporal brain dynamics efficiently while reducing energy consumption.",
  //   techStack: ["Python", "TensorFlow", "snnTorch", "MNE"],
  //   imageUrl: "https://images.unsplash.com/photo-placeholder?w=400&h=200&fit=crop",
  //   links: [
  //     { label: "Paper", url: "#" },
  //     { label: "Code", url: "#" },
  //   ],
  // },
  // {
  //   title: "TriNet-MTL: Multitask Learning on Auditory-Evoked EEG",
  //   description: "Jointly classify identity, stimulus language, and device modality from auditory-evoked EEG. Transformer-based shared temporal encoder with three task-specific heads. Achieved 91%+ accuracy for biometric ID with strong generalization.",
  //   techStack: ["Python", "PyTorch", "Transformers", "EEG Analysis"],
  //   imageUrl: "https://images.unsplash.com/photo-placeholder?w=400&h=200&fit=crop",
  //   links: [
  //     { label: "Paper", url: "#" },
  //     { label: "Code", url: "#" },
  //   ],
  // },
  // {
  //   title: "Real-time Seizure Detection, Classification & Forecasting",
  //   description: "Real-time EEG-based seizure analysis using graph representation of channels and connectivity. Multi-head GNN predicts detection, classification, onset-time, and type simultaneously, enabling high-accuracy, low-latency inference.",
  //   techStack: ["Python", "PyTorch Geometric", "GNN", "EEG"],
  //   imageUrl: "https://images.unsplash.com/photo-placeholder?w=400&h=200&fit=crop",
  //   links: [
  //     { label: "Paper", url: "#" },
  //     { label: "Code", url: "#" },
  //   ],
  // },
  // {
  //   title: "Emotion Classification via EEG Signals",
  //   description: "Classifies human emotions from EEG using hybrid ResNet50 + Transformer model. Features include PSD and Differential Entropy. Achieved 92% accuracy on SEED-IV and 91% on DEAP datasets through late feature fusion.",
  //   techStack: ["Python", "PyTorch", "ResNet50", "Transformer", "EEG Processing"],
  //   imageUrl: "https://images.unsplash.com/photo-placeholder?w=400&h=200&fit=crop",
  //   links: [
  //     { label: "Paper", url: "#" },
  //     { label: "Code", url: "#" },
  //   ],
  // },
  // ];

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
    venue: "ACM UET Lahore Chapter",
    title: "AI for Brain: Unlocking Cognitive Insights with Machine Learning",
    talkUrl: "https://drive.google.com/file/d/1x-XxH2F6zp6eiB1ZZIAA0W6Wj9osQ92B/view?usp=sharing",
    slidesUrl: "https://drive.google.com/file/d/12wXUE5LoYlQrvojvIz3sapi8Toq3hUma/view?usp=sharing",
    date: "August 2025",
    description: "Engaged 100+ students, and faculty in exploring machine learning applications for cognitive neuroscience.",
  },
  {
    venue: "Google Developer Group (GDG), UET Lahore",
    title: "Data-Centric AI: Why Better Data Beats Bigger Models",
    talkUrl: "https://drive.google.com/file/d/1tVBMx9-RuZW2ef1Jg25rRkIN5KVN_SLD/view?usp=sharing",
    slidesUrl: "https://drive.google.com/file/d/1Xv78iuJI_uL5iHWqCWausF7ARxtfW2oH/view?usp=sharing",
    date: "August 2025",
    description: "Addressed 50+ AI enthusiasts and students, emphasizing how high-quality datasets drive real-world AI success.",
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

      {/* <Section title="Awards" id="awards">
        {awards.map((award, index) => (
          <AwardItem key={index} {...award} />
        ))}
      </Section> */}

      <Section title="Academic Talks" id="talks">
        {talks.map((talk, index) => (
          <TalkItem key={index} {...talk} />
        ))}
      </Section>

      {/* <Section title="Projects" id="projects">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </Section> */}

      <Section title="Technical Skills" id="skills">
        <SkillsSection skillCategories={skills} />
      </Section>
    </Layout>
  );
};

export default Index;
