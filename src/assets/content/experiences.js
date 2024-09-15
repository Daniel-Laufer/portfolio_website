const experiences = [
    {
        "job-title": "Software Engineer Intern",
        dates: "September 2023 - April 2024",
        company: "Dayforce",
        description: [
            "Designed & developed an integral microservice for the revamped Test Platform Services (TPS) engine that monitors and reports on the real-time progress of test suite executions executing concurrently across 100s of Kubernetes (K8s) pods (K8s, Kafka, Redis, C#).",
            "Created the frontend & backend of the new TPS Management Dashboard, a React & C# web app that facilitates visualizing test execution history, viewing execution trends, managing execution settings; received glowing reviews from users, consequently becoming the most popular page on the TPS dashboard ever since.",
            "Integrated the TPS engine with Jira, enhancing platform accessibility and convenience by allowing developers to view results and execute tests directly through Jira 'Xray' tickets managed by this service (Azure, SQL Server, GraphQL, C#)."
        ],
    },
    {
        "job-title": "Software Engineer Intern",
        dates: "May 2023 - August 2023",
        company: "Advanced Micro Devices (AMD)",
        description: [
            "Developed a C++ application for analyzing Windows performance logs/traces, with my contributions being pivotal in my team discovering and resolving a critical performance issue specific to AMD graphics cards.",
            "Designed and built a new full-stack web application to streamline the process of collecting & visualizing performance metrics from AMD hardware using React, Flask, and PostgreSQL."
        ],
    },
    {
        "job-title": "Computer Science Teaching Assistant",
        dates: "January 2021 - April 2023",
        company: "University of Toronto",
        description: [
            "Taught and coordinated the following courses: CSC301 (Software Engineering), CSC347 (Information Security), CSC207 (Software Design - Java), CSC209 (Systems Programming - C, Concurrency, Networking, Linux), CSC148 (Computer Science - Python).",
            "Distinguished as the lead CSC301 tutorial TA, assuming responsibility for creating engaging tutorial content for 150+ students covering a wide range of technical subjects: Microservices, SQL/NoSQL, REST APIs, CI/CD, Testing, React, Java, Docker, etc.",
            "Created & presented tutorial content as a CSC347 TA to 200+ students about: Web Security (XSS, SQL Injection, CSRF, Session Fixation, Digital Certificates, JWT, OAuth, Authentication/Authorization), Buffer Overruns, Cryptography, Network Security, etc.",
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
            "Engineered & launched the 'Retirement Blueprint' tool using React and Django, featuring a modern UI that offers AI-driven personalized suggestions, calculators, graphs, etc to facilitate & optimize the process of the creation of retirement investment plans.",
            "Implemented CI/CD pipelines with GitHub Actions to automate testing and deployment of the front/back-end code on AWS EC2 instances, leading to a substantial gain in developer productivity.",
            "Spearheaded the development of a new investment portfolio comparison tool created using React and Django, allowing investors to easily analyze and compare various statistics/metrics across various stocks/ETFs/etc side-by-side."
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
