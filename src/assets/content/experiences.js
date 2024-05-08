const experiences = [
  {
    "job-title": "Software Engineer Intern",
    dates: "September 2023 - April 2024",
    company: "Dayforce",
    description: [
      "Developing the back-end microservices the comprise Dayforce's Test Execution Platform (TEP) using C#, Kafka, Redis, SQL.",
      "Designed & developed an integral part of the new version of the TEP that monitors real-time distributed test suite executions for a number of metrics (completeness, excess of failure threshold, etc) occurring concurrently across hundreds of Kubernetes pods.",
      "Designed and created the frontend & backend of the new TEP Management Dashboard, a React/ASP.NET web app that facilitates the process of managing test configuration, visualizing recent execution history, and more in a sleek, easy-to use interface; received glowing reviews from users and became the most consistently frequently visited page on the TEP dashboard.",
      "Designed and coordinated the development of the integration of TEP with Jira that enabled developers to efficiently manage, execute, and view results from tests on TEP directly with Jira.",
    ],
  },
  {
    "job-title": "Software Engineer Intern",
    dates: "May 2023 - August 2023",
    company: "Advanced Micro Devices (AMD)",
    description: [
      "Designed and developed new full-stack web application to streamline the process of collecting & analyzing performance metrics on AMD hardware and automated the collection using React, Typescript, Flask, and PostgreSQL.",
      "Developing and contributing to a C++ application related to parsing and analyzing ETL traces."
    ],
  },
  {
    "job-title": "Computer Science Teaching Assistant",
    dates: "January 2021 - April 2023",
    company: "University of Toronto",
    description: [
      "Supported professors in lecture sections (each containing 160+ students) by leading in-class activities and answering students’ questions. Received positive feedback from professors and students.",
      "Graded hundreds of assignment/exam submissions per term under tight deadlines and provide constructive feedback to students to improve their computer science skills.",
      "Created and graded weekly tutorial content and led tutorial sections each containing 40+ students.",
      "Held office hours for students to ask questions regarding course content and for help with their assignments.",
      "Courses: CSC347 (Introduction to Information Security), CSC301 (Introduction to Software Engineering), CSC209 (Systems Programming) x2, CSC258 (Computer Architecture), CSC148 (Introduction to Computer Science) x2, CSC207 (Software Design).",
    ],
  },
  {
    "job-title": "Technical/Workshop Lead",
    dates: "August 2021 - August 2022",
    company: "Google Developer Student Club at the University of Toronto",
    description: [
      "Hosted biweekly technical workshops attended by 100+ UofT students on topics like React, Docker, AWS, etc.",
      "Led professional development events such as resume reviews and mock technical interviews regularly for students.",
      "Empowered students to expand their knowledge in technology and build solutions for their local communities.",
    ],
  },
  {
    "job-title": "Full Stack Developer Intern",
    dates: "September 2021 - December 2021",
    company: "Wealthscope",
    description: [
      "Developed front-end applications with React and Redux; developing back-end APIs using the Django REST Framework",
      "Created a tool that allows users to compare their investment portfolios (consisting of stocks, ETFs, crypto, etc) to determine how various statistics differ between them (including annualized returns, total risk, fees, etc)",
      "Created CI/CD pipelines using GitHub Actions to automatically deploy code changes to AWS EC2 instances",
      "Created the new ‘Retirement Blueprint' tool that guides users through creating personalized investment and saving plans to reach their financial goals",
      "Improved the local development environment by creating new Docker containers to run all components of the application's infrastructure locally to streamline the process of full stack development",
      "Created Django commands to process and upload large amounts of financial security data to AWS RDS",
      "Technologies used:  React, Redux, Django, Django REST Framework, Python, Pandas, AWS, Docker, PostgreSQL, Jira",
    ],
  },
  {
    "job-title": "Research Assistant",
    dates: "September 2021 - October 2021",
    company: "Schulich School of Business, York University",
    description: [
      "Developed software and used various Google Cloud services to collect 31 million comments made by Reddit users on the subreddit 'Wall Street Bets' during the years 2019-2021.",
      "The data collected was used in the following research paper titled \"Social Network Sentiment and Markets: Evidence from the Wallstreetbets Forum\" which can be found at this URL: \"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4384743\"",
      "Technologies used: Docker, Google Cloud's Compute Engine, Google Cloud's Cloud Storage, Python, Pandas.",
    ],
  },
];

export default experiences;
