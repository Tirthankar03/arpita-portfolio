import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate developer with expertise in Python, C, C++, Java, and R. I specialize in data analysis and visualization using tools like NumPy, Pandas, Matplotlib, and Tableau. My goal is to leverage my technical skills and problem-solving abilities to create impactful data-driven solutions.`;

export const ABOUT_TEXT = `I am a dedicated developer with a strong foundation in programming and data analysis. My journey in technology started with a deep curiosity about how data can be transformed into meaningful insights. I have developed expertise in various programming languages and tools, with a particular focus on data analysis and visualization. I enjoy tackling complex problems and am always eager to learn new technologies. My experience includes building data analytics dashboards, developing management systems, and working with various data structures and algorithms. Outside of coding, I'm passionate about continuous learning and have completed several certifications in data structures, AI, and business analytics.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Data Analyst",
    company: "Self-Employed",
    description: `Built a comprehensive sales analytics dashboard using Tableau, leveraging data from MySQL database. Designed and executed SQL queries for data extraction, performed data cleaning and transformation, and prepared datasets for visualization.`,
    technologies: ["MySQL", "Tableau", "Excel", "Data Analysis"],
  },
  {
    year: "2023",
    role: "Software Developer",
    company: "Self-Employed",
    description: `Developed a console-based Courier Management System in C, implementing CRUD operations, sorting algorithms, and file handling for data persistence.`,
    technologies: ["C", "Data Structures", "File Handling"],
  }
];

export const PROJECTS = [
  {
    title: "Retail Sales Insights Dashboard",
    image: project1,
    description:
      "Built a comprehensive sales analytics dashboard using Tableau, providing real-time insights into sales trends, product performance, and customer behavior. Features include sales performance analysis, product & category insights, customer segmentation, and dynamic filtering.",
    technologies: ["MySQL", "Excel", "Tableau", "Data Analysis"],
  },
  {
    title: "Courier Management System",
    image: project2,
    description:
      "Developed a console-based system in C for managing courier records. Implemented CRUD operations, sorting algorithms, secure authentication, and file handling for data persistence.",
    technologies: ["C", "Data Structures", "File Handling"],
  }
];

export const CONTACT = {
  address: "India",
  phoneNo: "+91-7009869331",
  email: "arpitadutta670@gmail.com",
  linkedin: "www.linkedin.com/in/arpita-dutta1",
  github: "https://github.com/arpitaDUTTA7"
};
