import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

import gulogo from "./assets/images/gulogo.png";
import facebookLogo from "./assets/images/facebookLogo.png";
import quoraLogo from "./assets/images/quoraLogo.png";
import airbnbLogo from "./assets/images/airbnbLogo.png";
import awssaa from "./assets/images/awssaa.png";
import masters from "./assets/images/masters.jpg";
import associate from "./assets/images/associate.jpg";
import devassociate from "./assets/images/devassociate.jpg";
import sysops from "./assets/images/sysops.jpg";
import database from "./assets/images/database.jpg";
import cloud from "./assets/images/cloud.jpg";

// Splash screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Greeting
const illustration = {
  animated: true,
};

const greeting = {
  username: "Krunal Nayak",
  title: "Hi all, I'm Krunal",
  subTitle: emoji(
    "A highly motivated IT professional 💻 with a solid foundation in network technology 🌐, I'm passionately transitioning into a Junior Cloud Computing Engineer role ☁️. I thrive on translating business goals into actionable cloud strategies 🚀 and am committed to delivering impactful solutions for your organization's success! ✨"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1mySbFEi4jqNSvkd7qF48hGEueNgqYAAT/edit?usp=sharing",
  displayGreeting: true,
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/iamkjn",
  linkedin: "https://www.linkedin.com/in/krunalnayak/",
  gmail: "krunalnayak1409@gmail.com",
  facebook: "https://www.facebook.com/Iamkjnhere",
  medium: "https://medium.com/@krunalnayak49",
  instagram: "https://www.instagram.com/iamkjn/",
  display: true,
};

// Skills
const skillsSection = {
  title: "A Cloud Innovator ☁️",
  subTitle: "I thrive on architecting scalable solutions and innovating across diverse cloud platforms and services. 🚀",
  skills: [
    emoji("⚡ Architecting & deploying robust cloud infrastructure across AWS, Azure, and Google Cloud"),
    emoji("⚡ Automating cloud operations and monitoring solutions using tools like Terraform, Ansible, and CloudWatch"),
    emoji("⚡ Integrating cloud-native services and developing scalable applications within dynamic cloud environments"),
  ],
  softwareSkills: [
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "android", fontAwesomeClassname: "fab fa-android" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
  ],
  display: true,
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Gujarat University",
      logo: gulogo,
      subHeader: "Masters in Computer Science with Computer Applications & IT",
      duration: "2016 - 2018",
      desc: "Learned Basics of Computer Science, Data Structures, Algorithms, Operating Systems, Computer Networks",
      descBullets: ["Mobile Application Development", "Software Engineering"],
    },
    {
      schoolName: "Gujarat University",
      logo: gulogo,
      subHeader: "Bachelor in Computer Science with Computer Applications & IT",
      duration: "2013 - 2016",
      desc: "Learned C, C++, Java, Python, HTML, CSS, JavaScript, SQL, Data Structures, Algorithms",
      descBullets: ["Completed various projects in Web, Mobile, and Software Development"],
    },
  ],
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Cloud Infrastructure", progressPercentage: "85%" },
    { Stack: "Cloud Automation", progressPercentage: "80%" },
    { Stack: "Cloud Programming", progressPercentage: "83%" },
  ],
  displayCodersrank: true,
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Cloud Engineer Intern",
      company: "Fortray Global Services Limited",
      companylogo: facebookLogo,
      date: "Nov 2024 – Present",
      desc: "Gaining hands-on experience in cloud infrastructure management, automation, and deployment strategies.",
      descBullets: [
        "Collaborating with senior engineers to develop cloud architectures",
        "Assisting in deployment and management of cloud resources",
      ],
    },
    {
      role: "Senior Android Engineer",
      company: "Simform Solutions",
      companylogo: quoraLogo,
      date: "Dec 2021 – May 2024",
      desc: "Led the development of high-performance Android apps with a focus on UX and scalability.",
    },
    {
      role: "Android Developer",
      company: "SpaceO Technologies",
      companylogo: airbnbLogo,
      date: "March 2020 – Nov 2021",
      desc: "Designed and developed user-friendly mobile applications.",
    },
  ],
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: true,
};

// Big Projects
const bigProjects = {
  title: "Big Projects",
  subtitle: "Startups and Companies I’ve Helped Build Tech For",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Health support platform with confidential therapy support.",
      footerLink: [{ name: "Visit Website", url: "http://saayahealth.com/" }],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Online tech learning and upskilling platform.",
      footerLink: [{ name: "Visit Website", url: "http://nextu.se/" }],
    },
  ],
  display: true,
};

// Achievements
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and Milestones",
  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "Validated AWS expertise in scalable cloud systems.",
      image: awssaa,
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1C4B3DOQUPE6XCmzM7FbXDjEsbAlG42pG/view",
        },
      ],
    },
    {
      title: "Simplilearn AWS Cloud Architect",
      subtitle: "Completed advanced cloud architect curriculum.",
      image: masters,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1RwyZlqSbYYMSLjd2lsItypmUp6cXHPBg/view",
        },
      ],
    },
    {
      title: "AWS Developer Associate",
      subtitle: "Certified in AWS application development and deployment.",
      image: devassociate,
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1eABXUpGesCFpymU57NBcQ4-gAJ_IEjUj/view",
        },
      ],
    },
  ],
  display: true,
};

// Resume
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
};

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let’s build something together. My inbox is open for all.",
  number: "+44-07721904401",
  email_address: "krunalnayak1409@gmail.com",
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection,
  greeting
};
