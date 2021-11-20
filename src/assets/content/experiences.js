const experiences = [
  {
    "job-title": "Full Stack Developer",
    dates: "September 2021 - Present",
    company: "Wealthscope",
    description: [
      "Developing front-end applications with React and Redux; developing back-end APIs using the Django REST Framework",
      "Created a tool to allow users to compare their investment portfolios (consisting of stocks, ETFs, crypto, etc) to determine how various statistics differ between them including (annualized returns, total risk, fees, etc)",
      "Created a CI/CD pipeline using GitHub Actions to automatically deploy code changes to AWS EC2 instances",
      "Created the new ‘Retirement Blueprint’ tool that determines an individual’s required retirement target wealth and creates an investment plan to assist them in obtaining it",
      "Created Django commands to process and upload large amounts of financial security data to AWS RDS",
      "Improved the local development environment by creating new Docker containers to run all components of the application’s infrastructure locally to streamline the process of full stack development",
      "Technologies used:  React, Redux, Django, Django REST Framework, Python, Pandas, AWS, Docker, PostgreSQL, Jira",
    ],
  },
  {
    "job-title": "Technical/Workshop Lead",
    dates: "September 2021 - Present",
    company: "Google Developer Student Club at the University of Toronto",
    description: [
      "Hosting biweekly technical workshops regularly attended by over 30 UofT students on topics like Git, React, AWS, etc",
      "Empowering students to expand their knowledge in technology and build solutions for their local communities",
      "Regularly hosted professional development events such as mock technical interviews for students",
    ],
  },
  {
    "job-title": "Cloud Computing Research Assistant",
    dates: "September 2021 - October 2021",
    company: "Schulich School of Business, York University",
    description: [
      "Used Google Cloud’s Compute Engine and Cloud Storage to gather *31 million* comments made by Reddit users on the subreddit ‘Wall Street Bets’ during the years 2019-2021",
      "Created a scalable, easy-to-use, and powerful data collection system through creating python scripts to start up andevenly distribute the processing load amongst multiple docker containers running on the Google Cloud Compute Engine",
    ],
  },
  {
    "job-title": "Computer Science Teaching Assistant (CSC148)",
    dates: "January 2021 - May 2021",
    company: "University of Toronto",
    description: [
      "Led weekly tutorial sessions for 80 students, assisted professors in lectures containing 160 students, and marked assessments",
      "CSC148 is a Computer Science course at the University of Toronto teaches object-oriented programming in Python, asymptotic analysis of algorithms, data structures, and more",
    ],
  },
];

export default experiences;
