import Layout from "@/components/Layout";
import Section from "@/components/Section";
import AwardItem from "@/components/AwardItem";
import { describe } from "node:test";

const Awards = () => {
  const awards = [
    {
      title: "Excellence in Neuroscience Research Award",
      organization: "Al-Khawarizmi Institute of Computer Science (KICS), Lahore, Pakistan",
      year: "June 2025",
      description: "Recognized for contributions to signal processing, Neuro-AI pipelines, and innovative neuroscience methods.",
    },
    {
      title: "Chief Minister Punjab’s Honhaar Scholarship",
      organization: "Government of Punjab, Pakistan",
      year: "May 2025",
      description: "Awarded for achieving one of the highest CGPAs (top 1%) in Computer Engineering at UET Lahores.",
    },
    {
      title: "Top 6 at Optimized AI Conference 2025",
      organization: "Traversaal.ai",
      year: "March 2025",
      description: "Our Team TROJAN AI ranked among the Top 6 out of 200+ global teams, part of OAI 2025 (Atlanta).",
    },
    {
      title: "CS50x Puzzle Day 2025 (9/9 puzzles solved)",
      organization: "Harvard & MIT (Cambridge)",
      year: "April 2025",
      description: "Recognized for outstanding performance in problem-solving, teamwork, and analytical thinking.",
    },
    {
      title: "Merit Scholarship",
      organization: "Punjab Group of Colleges, Wazirabad Campus, Pakistan",
      year: "2021 - 2023",
      description: "Full tuition scholarship for intermediate studies.",
    },
  ];

  return (
    <Layout>
      <Section title="Awards & Honors" id="awards">
        {awards.map((award, index) => (
          <AwardItem key={index} {...award} />
        ))}
      </Section>
    </Layout>
  );
};

export default Awards;
