import Layout from "@/components/Layout";
import Section from "@/components/Section";
import ProjectItem from "@/components/ProjectItem";
import dicomImg from "@/assets/images/DICOM.jpg";
import sleepImg from "@/assets/images/sleep (1).png";
import auditoryImg from "@/assets/images/auditory.jpeg";
import sezImg from "@/assets/images/sez (1).jpeg";
import eegEmotionImg from "@/assets/images/EEG-Emotion.jpg";
import pinnImg from "@/assets/images/PINN.jpeg";


const Projects = () => {
  const projects = [  
  {
    title: "Teeth Segmentation & 3D Volume Rendering",
    description: "Automatic segmentation of dental DICOM volumes into enamel, root, and nerve. Uses U-Net–based 2D slice segmentation, morphological post-processing, and marching cubes 3D reconstruction, achieving 99.8% mean segmentation accuracy.",
    techStack: ["Python", "PyTorch", "U-Net", "3D Visualization"],
    imageUrl: dicomImg,
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
    ],
  },
  {
    title: "Cognitive & Energy-Efficient Sleep Stage Classification",
    description: "Classify sleep stages using spiking neural networks (SNNs) on EEG. Leverages event-driven neuromorphic processing to capture spatiotemporal brain dynamics efficiently while reducing energy consumption.",
    techStack: ["Python", "TensorFlow", "snnTorch", "MNE"],
    imageUrl: sleepImg,
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
    ],
  },
  {
    title: "TriNet-MTL: Multitask Learning on Auditory-Evoked EEG",
    description: "Jointly classify identity, stimulus language, and device modality from auditory-evoked EEG. Transformer-based shared temporal encoder with three task-specific heads. Achieved 91%+ accuracy for biometric ID with strong generalization.",
    techStack: ["Python", "PyTorch", "Transformers", "EEG Analysis"],
    imageUrl: auditoryImg,
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
    ],
  },
  {
    title: "Real-time Seizure Detection, Classification & Forecasting",
    description: "Real-time EEG-based seizure analysis using graph representation of channels and connectivity. Multi-head GNN predicts detection, classification, onset-time, and type simultaneously, enabling high-accuracy, low-latency inference.",
    techStack: ["Python", "PyTorch Geometric", "GNN", "EEG"],
    imageUrl: sezImg,
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
    ],
  },
  {
    title: "Emotion Classification via EEG Signals",
    description: "Classifies human emotions from EEG using hybrid ResNet50 + Transformer model. Features include PSD and Differential Entropy. Achieved 92% accuracy on SEED-IV and 91% on DEAP datasets through late feature fusion.",
    techStack: ["Python", "PyTorch", "ResNet50", "Transformer", "EEG Processing"],
    imageUrl: eegEmotionImg,
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
    ],
  },
  {
    title: "Physics-Informed Neural Network for Solar Irradiance Forecasting",
    description: "Accurately forecast Global Horizontal Irradiance (GHI) for renewable energy systems while ensuring physical consistency. Integrates solar physics knowledge, PDE residuals, and monotonicity priors for improved robustness and interpretability, achieving R2 = 0.989.",
    techStack: ["Python", "TensorFlow", "PDE Modeling", "Physics-Informed NN"],
    imageUrl: pinnImg,
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
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
