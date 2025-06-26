/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Lillian Lee",
  title: "Hi all, I'm Lillian Lee",
  subTitle: emoji(
    "An Applied Data Science graduate skilled in Python, SQL, and data visualization, with hands-on experience in turning data into insights. I'm currently exploring AI-powered tools and intelligent agents, with a long-term goal to become an AI Engineer or Principal Data & AI Scientist. Passionate about bridging data, technology, and real-world impact."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vC09cYEWrL7-OhBgmxr2VIyMBzjoKg8C/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Lillian-Lee/",
  linkedin: "https://www.linkedin.com/in/lillian-lee-data-analyst/",
  gmail: "lillian00lee@gmail.com",
  display: true // Set true to display this section, defaults to false
};


// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Applied Data Science graduate with a strong foundation in analytics, machine learning, and data storytelling. Passionate about solving problems with data and building toward intelligent systems.",
  skills: [
    emoji("📊 Analyze and visualize data using Python, R, Power BI, and Tableau"),
    emoji("🧹 Perform data cleaning, preprocessing, and feature engineering for real-world datasets"),
    emoji("📚 Apply statistical modeling and hypothesis testing to uncover insights"),
    emoji("🤖 Build supervised and unsupervised machine learning models"),
    emoji("🌐 Integrate data workflows via APIs and support cross-functional collaboration"),
    emoji("🗺️ Conduct geospatial analysis using ArcGIS, QGIS, and GeoDa"),
    emoji("📈 Communicate findings through dashboards and actionable recommendations for stakeholders")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "R",
    fontAwesomeClassname: "fab fa-r-project" // 你需要引入支持这个图标的包，或用图像代替
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "fas fa-chart-bar" // 没有官方 logo，可用通用图标
  },
  {
    skillName: "Tableau",
    fontAwesomeClassname: "fas fa-chart-line" // 没有官方 logo
  },
  {
    skillName: "Microsoft Azure",
    fontAwesomeClassname: "fab fa-microsoft"
  },
  {
    skillName: "Apache Spark",
    fontAwesomeClassname: "fas fa-bolt" // 也可换成自定义图标
  },
  {
    skillName: "ArcGIS / QGIS",
    fontAwesomeClassname: "fas fa-map-marked-alt"
  }
]
,
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Canterbury",
      logo: require("./assets/images/ucLogo.jpg"),
      subHeader: "Master of Applied Data Science",
      duration: "February 2024 - February 2026",
      desc: "Studied advanced data analytics, machine learning, and business intelligence with hands-on projects.",
      descBullets: [
        "Capstone project: Built an AI-powered reporting tool for driver licensing trends in New Zealand",
        "Worked on real-world datasets using Python, SQL, Power BI"
      ]
    },
    {
      schoolName: "Communication University of China",
      logo: require("./assets/images/CUC_logo.png"),
      subHeader: "Bachelor of Arts in Ideological and Political Education",
      duration: "September 2004 - June 2009",
      desc: "Explored public communication, policy understanding and critical thinking with a humanities foundation.",
      descBullets: [
        "Student leader in cross-cultural activities",
        "Developed strong foundation bridging humanities and tech"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "85%"
    },
    {
      Stack: "Machine Learning & Modeling",
      progressPercentage: "70%"
    },
    {
      Stack: "Geospatial Analysis",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst (Academic Project)",
      company: "Licensing Ecosystem Insights Project",
      companylogo: require("./assets/images/analysisLogo.jpg"),
      date: "Jul 2024 – Nov 2024",
      desc: "Integrated datasets from six government sources to support investment decisions and regulatory reform.",
      descBullets: [
        "Built predictive models for market demand and regional targeting",
        "Created Tableau dashboards and financial impact analysis reports"
      ]
    },
    {
      role: "Spatial Data Analyst (Academic Research)",
      company: "Multi-Scale Modeling Project",
      companylogo: require("./assets/images/arcGIS.jpg"),
      date: "Feb 2025 – Jun 2025",
      desc: "Analyzed urban poverty clusters in NZ and NYC using spatial statistics and regression techniques",
      descBullets: [
        "Applied ArcGIS Pro hotspot analysis, OLS, GWR, spatial lag/error models",
        "Developed Python automation tools for geospatial data processing"
      ]
    },
    {
      role: "Survey Analyst",
      company: "Mother’s Work-Life Balance Study",
      companylogo: require("./assets/images/Analyse.png"),
      date: "Feb 2024 – Jun 2025",
      desc: "Designed bilingual surveys, built a full data pipeline and dashboards for social research",
      descBullets: [
        "Used Pandas, Seaborn, Matplotlib, Plotly for insight extraction and visualization"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects exploring data, society and AI capabilities",
  projects: [
    {
      image: require("./assets/images/AI.jpg"),
      projectName: "AI-Human Therapeutic Discourse Analysis",
      projectDesc:
        "Scraped 44 therapy transcripts, created LLM prompts and automated dialogue generation pipeline to compare human-AI sessions.",
      footerLink: [
        {
          name: "Report Summary",
          url: "https://your-report-link.com"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "lillian00lee@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
