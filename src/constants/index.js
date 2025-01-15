import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  eyepax,
  uom,
  python,
  tensorflow,
  pytorch,
  js,
  scikit,
  cpp,
  mysql,
  postgresql,
  firebase,
  cardioscanpro,
  soniccypher,
  supplychain,
  ezygo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: js,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "Scikit-learn",
    icon: scikit,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Eyepax IT Consulting Pvt Ltd",
    icon: eyepax,
    iconBg: "#E6DEDD",
    date: "December 2023 - June 2024",
    points: [
      "Worked on performance enhancement and optimization (article classification) in research and development project mysocial.ai ",
      "Researched Azure ML prompt flows with the project F & P AI Proof of Concept.",
      "Researched models used for article recommendation under the project F & P AI Proof of Concept.",
      "Practiced and applied software architectures like microservices and micro frontends, gaining hands-on experience in modular software design.",
    ],
  },
  {
    title: "Teaching assistant",
    company_name: "University of Moratuwa",
    icon: uom,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Oct 2024",
    points: [
      " Conducted lab sessions for the module Programming fundamentals for semester 1 students under the supervision of Prof. Sanath Jayasena.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SonicCypher",
    subtitle: "Research Project (Ongoing)", 
    subtitleStyle: { fontSize: "0.9em", fontWeight: "normal" }, 
    description:
      "This research aims to develop a resource-efficient speaker verification system that enhances accuracy by capturing prosodic features. Planned to design as a plugin for practical applications such as social media platforms and voice authentication systems that aim to detect spoofing in real time.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: soniccypher,
    source_code_link: "https://github.com/SonicCypher/SonicCypher.git",
  },
  {
    name: "CardioScanPro",
    subtitle: "",
    description:
      "Developed an innovative ECG (Electrocardiogram) anomaly detection system, which is designed to automatically identify and alert healthcare professionals to potential anomalies in ECG data, enabling early intervention and diagnosis.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "ResNet",
        color: "green-text-gradient",
      },
      {
        name: "streamlit.io",
        color: "pink-text-gradient",
      },
    ],
    image: cardioscanpro,
    source_code_link: "https://github.com/IsuruGunarathne/CardioScanPro.git",
  },
  {
    name: "Supply chain management system",
    subtitle:"",
    description:
      "A supply chain management system includes features such as order scheduling, capacity allocation, route planning, driver roster management, and reporting tools for sales monitoring, driver hours tracking, and customer order analysis.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: supplychain,
    source_code_link: "https://github.com/sulakshigunarathne/Supply_Chain_Management_System.git",
  },
  {
    name: "EzyGo",
    subtitle:"Ongoing",
    description:
      "EzyGo is a platform designed for efficient ride and package sharing, addressing high commuting and delivery costs while enhancing convenience. By connecting users for shared rides and parcel deliveries, EzyGo promotes affordability, sustainability, and accessibility. Currently in research, it focuses on cost-sharing models, safety, and scalability for broader impact.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      // {
      //   name: "MySQL",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Node.js",
      //   color: "pink-text-gradient",
      // },
    ],
    image: ezygo,
    source_code_link: "",
  },
];

export { technologies, experiences, testimonials, projects };
