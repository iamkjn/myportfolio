import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Import images
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


// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Krunal Nayak",
  title: "Hi all, I'm Krunal",
  subTitle: emoji(
    "A highly motivated IT professional 💻 with a solid foundation in network technology 🌐, I'm passionately transitioning into a Junior Cloud Computing Engineer role ☁️. I thrive on translating business goals into actionable cloud strategies 🚀 and am committed to delivering impactful solutions for your organization's success! ✨"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1mySbFEi4jqNSvkd7qF48hGEueNgqYAAT/edit?usp=sharing&ouid=101448844358905714081&rtpof=true&sd=true",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/iamkjn",
  linkedin: "https://www.linkedin.com/in/krunalnayak/",
  gmail: "krunalnayak1409@gmail.com",
  facebook: "https://www.facebook.com/Iamkjnhere",
  medium: "https://medium.com/@krunalnayak49",
  instagram: "https://www.instagram.com/iamkjn/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "A Cloud Innovator ☁️",
  subTitle: "I thrive on architecting scalable solutions and innovating across diverse cloud platforms and services. 🚀",
  skills: [
    emoji(
      "⚡ Architecting & deploying robust cloud infrastructure across AWS, Azure, and Google Cloud"
    ),
    emoji("⚡ Automating cloud operations and monitoring solutions using tools like Terraform, Ansible, and CloudWatch"),
    emoji(
      "⚡ Integrating cloud-native services and developing scalable applications within dynamic cloud environments"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gujarat University",
      logo: gulogo,
      subHeader: "Masters in Computer Science with Computer Applications & Information Technology",
      duration:  "2016 - 2018",
      desc: "Learned Basics of Computer Science, Data Structures, Algorithms, Operating Systems, Computer Networks",
      descBullets: [
        "Mobile Application Development",
        "Software Engineering",
      ]
    },
    {
      schoolName: "Gujarat University",
      logo: gulogo,
      subHeader: "Bachelor in Computer Science with Computer Applications & Information Technology",
      duration: "2013 - 2016",
      desc: "Learned C, C++, Java, Python, HTML, CSS, JavaScript, SQL, Data Structures, Algorithms",
      descBullets: ["Completed various projects in Web Development, Mobile App Development, and Software Engineering"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Infrastructure", // Covers AWS, Azure, Google Cloud services
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud Automation", // Covers Terraform, Ansible, Docker
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Programming", // Covers Python, Java, Kotlin, SQL for cloud development
      progressPercentage: "83%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Engineer Intern",
      company: "Fortray Global Services Limited",
      companylogo: facebookLogo,
      date: "Nov 2024 – Present",
      desc: "As a Cloud Engineer Intern, I am gaining hands-on experience in cloud infrastructure management, automation, and deployment strategies. My role involves working with AWS and Azure services to design and implement scalable solutions.",
      descBullets: [
        "Collaborating with senior engineers to develop cloud architectures",
        "Assisting in the deployment and management of cloud resources",
      ]
    },
    {
      role: "Senior Android Engineer",
      company: "Simform Solutions",
      companylogo: quoraLogo,
      date: "Dec 2021 – May 2024",
      desc: "As a Senior Android Engineer, I led the development of high-performance Android applications, focusing on user experience and scalability. I implemented best practices in mobile development and mentored junior developers.",
    },
    {
      role: "Android Developer",
      company: "SpcaeO Technologies",
      companylogo: airbnbLogo,
      date: "March 2020 – Nov 2021",
      desc: "As an Android Developer, I was responsible for designing and developing user-friendly mobile applications. I collaborated with cross-functional teams to deliver high-quality software solutions."
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Learning Milestones that I have!",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Associate Level",
      subtitle:
        "Achieved AWS Certified Solutions Architect - Associate Level certification, demonstrating proficiency in designing and deploying scalable systems on AWS.",
      image: awssaa,
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1C4B3DOQUPE6XCmzM7FbXDjEsbAlG42pG/view?usp=sharing"
        }
      ]
    },
    {
      title: "Simplilearn AWS Cloud Architect",
      subtitle:
        "Completed AWS Cloud Architect certification from Simplilearn, enhancing skills in cloud architecture and deployment.",
      image: masters,
      imageAlt: "Simplilearn AWS Cloud Architect Action Logo",
      footerLink: [
        {
          name: "View Simplilearn AWS Cloud Architect",
          url: "https://drive.google.com/file/d/1RwyZlqSbYYMSLjd2lsItypmUp6cXHPBg/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Solutions Architect Associate Level",
      subtitle:
        "Achieved AWS Solutions Architect Associate Level certification, showcasing expertise in designing and deploying scalable systems on AWS.",
      image: associate,
      imageAlt: "AWS Solutions Architect Associate Level Logo",
      footerLink: [
        {
          name: "View AWS Solutions Architect Associate Level",
          url: "https://drive.google.com/file/d/1JTkjZ1NhALRbSbpa0__6gDjGd_5AKd1q/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Developer Associate",
      subtitle:
        "Achieved AWS Developer Associate certification, demonstrating proficiency in developing and maintaining applications on the AWS platform.",
      image: devassociate,
      imageAlt: "AWS Developer Associate",
      footerLink: [
        {
          name: "View AWS Developer Associate",
          url: "https://drive.google.com/file/d/1eABXUpGesCFpymU57NBcQ4-gAJ_IEjUj/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS SysOps Associate Certification Training",
      subtitle:
        "Completed AWS SysOps Associate Certification Training, enhancing skills in deploying, managing, and operating scalable systems on AWS.",
      image: sysops,
      imageAlt: "AWS SysOps Associate Certification Training",
      footerLink: [
        {
          name: "View AWS SysOps Associate Certification",
          url: "https://drive.google.com/file/d/1-3IqXG1XdWpnfQiFXgJX_ehVc2DnoL0k/view?usp=sharing"
        }
      ]
    },{
      title: "AWS Database Migration",
      subtitle:
        "Completed AWS Database Migration training, gaining expertise in migrating databases to AWS with minimal downtime and disruption.",
      image: database,
      imageAlt: "AWS Database Migration",
      footerLink: [
        {
          name: "View AWS Database Migration",
          url: "https://drive.google.com/file/d/1jP1HNSeTiE8PDYAvj4WDiq7dPLzWL_0R/view?usp=sharing"
        }
      ]
    },{
      title: "AWS Cloud Technical Essentials",
      subtitle:
        "Completed AWS Cloud Technical Essentials training, providing a foundational understanding of AWS services and cloud computing concepts.",
      image: cloud,
      imageAlt: "AWS Cloud Technical Essentials",
      footerLink: [
        {
          name: "View AWS Cloud Technical Essentials",
          url: "https://drive.google.com/file/d/1H1pzPtg4TBiE49BW9F2rLXIfRszouKO2/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};



const EmailLink = () => {
  const emailAddress = 'krunalnayak1409@gmail.com';
  const displayEmail = 'krunalnayak1409@gmail.com';

  return (
    <p>
     krunalnayak1409@gmail.com
      <a
        href={`mailto:${emailAddress}`}
        className="text-blue-400 hover:underline cursor-pointer"
        rel="noopener noreferrer"
      >
      </a>
    </p>
  );
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44-07721904401",
  email_address: EmailLink(),
};


export default EmailLink;

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  resumeSection
};
