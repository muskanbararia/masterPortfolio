/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Muskan's Portfolio",
  description:
    "Hi! I am dealing with my imposter syndrome by trying to learn more each day.",
  og: {
    title: "Muskan's Portfolio",
    type: "website",
    url: "http://muskanb.dev/",
  },
};

//Home Page
const greeting = {
  title: "Muskan Bararia",
  logo_name: "Muskan Bararia",
  subTitle:
    "Hi! I am dealing with my imposter syndrome by trying to learn more each day.",
  resumeLink:
    "https://docs.google.com/document/u/1/d/e/2PACX-1vRr_jlnEzJcp1Ww3y3swMitDv-sSsiWyLogjT0GEm8FjDn5yrlwZgJrFNP5mLBbZyj2oZs45VUqJu4r/pub",
  portfolio_repository: "https://github.com/muskanbararia/masterPortfolio",
  githubProfile: "https://github.com/muskanbararia",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/muskanbararia",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muskan-b-a9190311b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:me@muskan.dev",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Functional Programmer",
      fileName: "FPImg",
      skills: [
        "⚡ Avoiding impurities in code since 2019",
        "⚡ Bringing ASCII art into the codebases",
        "⚡ Shipping prod apps in Rescript and Purescript",
      ],
    },
    {
      title: "FrontEnd Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive typesafe front end using Rescript-React",
        "⚡ Handling the data atomically using Recoil",
        "⚡ Creating scaled apps that handles million hits per minute",
      ],
    },
    {
      title: "Creating random stuff",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Crocheting granny squares at granny speed",
        "⚡ Needling fabric to embroider art",
        "⚡ Trying best to create edible fusion veg recipes and mostly failing",
        "⚡ Writing about how pissed I am at the world mostly",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Gaming and Consuming Content",
      fileName: "DesignImg",
      skills: [
        "⚡ Currently hooked to Valheim",
        "⚡ Rewatching Matrix for 0b1010 th time",
        "⚡ Reading 1984 since 2004",
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "International Institute of Information Technology, Bhubaneswar",
      subtitle: "B.Tech. in IT",
      logo_path: "iiitb.png",
      alt_name: "IIIT BBSR",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ Studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Excelled in labs by securing 9 GPA throughout all lab courses",
        "⚡ Contributed in college chapter of ACM and GDG",
      ],
      website_link: "https://www.iiit-bh.ac.in/",
    },
  ],
};

// Experience Page
const experience = {
  experience: [
    {
      title: "Juspay",
      subtitle: "SDE-I",
      logo_path: "juspay.png",
      alt_name: "juspay",
      duration: "August 2019 - PRESENT",
      descriptions: [
        "⚡ Working on creating a UI and functionality rich dashboard for onboarding merchants.",
        "⚡ Created a unified payment page product that has onboarded 30+ merchants serving over 100k hits per minute.",
        "⚡ Created a payment page configurator that allows merchants to create any custom UI via simple json configuration",
        "⚡ Created a real time highly efficient collaborator using websockets",
      ],
      website_link: "https://www.juspay.in/",
    },
    {
      title: "MPokket",
      subtitle: "SDE",
      logo_path: "mpokket.png",
      alt_name: "mpokket",
      duration: "June 2019 - July 2019",
      descriptions: [
        "⚡ Created a cost optimized OCR API for KYC that saved over 60 man hours daily.",
        "⚡ Created a BigQuery Dataset with over 7 billion rows and worked on creating the most cost-efficient queries to perform the cron jobs. ",
      ],
      website_link: "https://www.mpokket.in/",
    },
    {
      title: "Infosys",
      subtitle: "SE",
      logo_path: "infy.png",
      alt_name: "infy",
      duration: "June 2019 - July 2019",
      descriptions: [
        "⚡ Worked on .NET Core with Angular6 to develop an in-house, platform independent service to help the company in its training process. ",
      ],
      website_link: "https://www.infosys.com/",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
