import Layout from "@/components/Layout";
import Section from "@/components/Section";
import AwardItem from "@/components/AwardItem";

const Awards = () => {
  const awards = [
    {
      title: "Best Paper Award",
      organization: "International Conference on Machine Learning",
      year: "2023",
      description: "Recognized for outstanding contribution in deep learning research.",
    },
    {
      title: "Graduate Research Fellowship",
      organization: "National Science Foundation",
      year: "2022",
      description: "Competitive fellowship supporting doctoral research in computer science.",
    },
    {
      title: "Dean's List",
      organization: "Georgia State University",
      year: "2021 - 2023",
    },
    {
      title: "Gold Medal",
      organization: "National University of Computer and Emerging Sciences",
      year: "2020",
      description: "Awarded for highest academic achievement in M.S. program.",
    },
    {
      title: "Merit Scholarship",
      organization: "University of the Punjab",
      year: "2014 - 2018",
      description: "Full tuition scholarship for undergraduate studies.",
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
