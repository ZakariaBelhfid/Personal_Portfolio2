import {
  frontend,
  backend,
  devops,
  analytics,
  javascript,
  html,
  css,
  reactjs,
  docker,
  cacib,
  efrei,
  EcomShop,
  Elearning,
  TradingBot,
  csharp,
  python,
  c,
  java,
  kub,
  mysql,
  postgresql,
  spring,
  cpge,



} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "Experience",
    title: "Experience",
  },

  {
    id: "contact",
    title: "Contact",
  },


];

const services = [
  {
    title: "FrontEnd Developer",
    icon: frontend,
  },
  {
    title: "BackEnd Developer",
    icon: backend,
  },
  {
    title: "Devops Engineer",
    icon: devops,
  },
  {
    title: "Data Analyst",
    icon: analytics,
  },
];

const technologies = [

    {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Csharp",
    icon: csharp,
  },


  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kub,
  },
];

const experiences = [
  {
    title: "IT Business Analyst",
    company_name: "Credit Agricole CIB, Paris",
    icon: cacib,
    iconBg: "#383E56",
    date: "September 2022 - August 2025",
    points: [
      "Built IT projects in Agile environments",
      "Built IT projects in Agile environments",
      "Documented business requirements through Story Maps and User Stories",
      "Wrote and executed functional test senarios",
      "Provided support to development teams",


    ],
  },
];

const educations = [
  {
    title: "Software Engineering",
    school: "EFREI, Paris",
    icon: efrei,
    iconBg: "#383E56",
    date: "September 2022 - August 2025",
    points: [
      "Web & Software Development : Java, C++, Python, Spring Boot, and React",
      "Technologies : .NET (C#), JEE, XML, JSON, MySQL, and PostgreSQL",
      "Big Data and AI : Machine Learning, Hadoop, and TensorFlow",
      "Cloud Computing & DevOps : AWS, Azure, CI/CD pipelines, Ansible, and Terraform",
      "Linux Administration",
      "Cyber-security : Cryptography, and system security",
      "Android App development : Kotlin"
    ]
  },

  {
    title: "CPGE TSI",
    school: "Lycée du Hainaut, Valenciennes",
    icon: cpge,
    iconBg: "#4A90E2", // Example background color
    date: "September 2020 - August 2022",
    points: [
      "Specialization : Industrial Technologies and Sciences ",
      "Core Subjects : Mathematics, Physics, and Engineering Sciences",
      "Practical Skills : Mechanics, Electronics, and Computer Programming",
      "Projects : Multidisciplinary engineering challenges and problem-solving",
      "Key Competencies : Analytical thinking, problem-solving, and time management"
    ]
  }
];



const projects = [
  {
    name: "Ecommerce Shop",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: EcomShop,
    source_code_link: "https://github.com/",
  },
  {
    name: "E Learning Platefrom",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Elearning,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trading Bot",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: TradingBot,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, educations, projects };
