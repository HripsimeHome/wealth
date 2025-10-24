import Tabs from "../../../../layout/Tabs/Tabs";

const tabLabels = ["Hardwork", "Research", "Innovation", "Veterans"];

const tabContent = [
  {
    title:
      "Our Hardwork approach reflects dedication, perseverance, and attention to detail in every project.",
    description:
      "We provide diligent and reliable solutions for every project, ensuring that each task is completed with precision and attention to detail. Our Hardwork approach emphasizes commitment, consistency, and high-quality results, helping clients achieve their goals efficiently. From planning to execution, we maintain focus on delivering dependable outcomes while adapting to challenges, making sure every project meets expectations and stands out for its excellence.",
  },
  {
    title: "In-depth Research and Insight-Driven Analysis",
    description:
      "Our research-driven approach ensures every decision is backed by accurate data and thorough analysis. We explore trends, gather insights, and evaluate solutions to provide informed strategies. This process helps us innovate, minimize risks, and deliver impactful results that align with client goals and expectations.",
  },
  {
    title: "Fostering Innovation for Smarter Solutions",
    description:
      "By embracing new technologies, methodologies, and forward-thinking strategies, we ensure that our projects remain at the forefront of industry standards, delivering value and efficiency to every initiative.",
  },
  {
    title:
      "Honoring and Supporting Veterans: Programs, Opportunities, and Recognition for Those Who Have Served",
    description:
      "We deeply value the service and sacrifice of veterans. Our initiatives provide tailored support, resources, and opportunities to help them transition successfully, continue their professional growth, and be recognized for their contributions. Through guidance, community programs, and personalized assistance, we ensure veterans feel empowered, respected, and connected to meaningful opportunities.",
  },
];

const AboutStatisticTabs = () => {
  return (
    <div className="paddingB">
      <Tabs tabLabels={tabLabels} tabContent={tabContent} />
    </div>
  );
};

export default AboutStatisticTabs;
