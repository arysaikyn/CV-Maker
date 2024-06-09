const samplePersonalInfo = {
    name: "Jake Ryan",
    phone: "1234567890",
    email: "jake@su.edu",
    github: "github.com/jake",
    linkedin: "linkedin.com/in/jake",
}

const sampleEducationInfo = {
    college: "South Western University",
    title: "Bachelor of Arts in Computer Science, Minor in Business",
    time: "Aug. 2018 - May 2021",
    location: "Gerorgetown, TX"
}

const sampleExperienceInfo = [
    {
        title: "Undergraduate Research Assistant",
        subtitle: "Texas A&M University",
        time: "June 2020 - Present",
        location: "College, Station, TX",
        bullets: [
            "Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems",
            "Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data",
            "Explored ways to visualize GitHub collaboration in a classroom setting"
        ]
    },
    {
        title: "Information Technology Support Specialist",
        subtitle: "Southwestern University",
        time: "Sep. 2018 – Present",
        location: "Georgetown, TX",
        bullets: [
            "Communicate with managers to set up campus computers used on campus",
            "Assess and troubleshoot computer problems brought by students, faculty and staff",
            "Maintain upkeep of computers, classroom equipment, and 200 printers across campus"
        ]
    },
    {
        title: "Artificial Intelligence Research Assistant",
        subtitle: "Southwestern University",
        time: "May 2019 – July 2019",
        location: "Georgetown, TX",
        bullets: [
            "Explored methods to generate video game dungeons based off of The Legend of Zelda",
            "Developed a game in Java to test the generated dungeons",
            "Contributed 50K+ lines of code to an established codebase via Git",
            "Conducted a human subject study to determine which video game dungeon generation technique is enjoyable",
            "Wrote an 8-page paper and gave multiple presentations on-campus",
            "Presented virtually to the World Conference on Computational Intelligence"
        ]
    }
]

const sampleProjectsInfo = [
    {
        title: "Gitlytics",
        technologies: "Python, Flask, React, PostgreSQL, Docker",
        time: "June 2020 – Present",
        bullets: [
            "Developed a full-stack web application using with Flask serving a REST API with React as the frontend",
            "Implemented GitHub OAuth to get data from user’s repositories",
            "Visualized GitHub data to show collaboration",
            "Used Celery and Redis for asynchronous tasks"
        ]
    },
    {
        title: "Simple Paintball",
        technologies: "Spigot API, Java, Maven, TravisCI, Git",
        time: "May 2018 – May 2020",
        bullets: [
            "Developed a Minecraft server plugin to entertain kids during free time for a previous job",
            "Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review",
            "Implemented continuous delivery using TravisCI to build the plugin upon new a release",
            "Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin"
        ]
    }
]

const sampleTechnicalSkillsInfo = {
    languages: "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R",
    frameworks: "React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI",
    developerTools: "Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse",
    libraries: "pandas, NumPy, Matplotlib"
}

const emptyPersonalInfo = {
    name: "",
    phone: "",
    email: "",
    github: "",
    linkedin: ""
}

const emptyEducationInfo = {
    college: "",
    title: "",
    time: "",
    location: ""
}

const emptyExperienceInfo = [
    {
        title: "",
        subtitle: "",
        time: "",
        location: "",
        bullets: []
    }
]

const emptyProjectsInfo = [
    {
        title: "",
        technologies: "",
        time: "",
        bullets: []
    }
]

const emptyTechnicalSkillsInfo = {
    languages: "",
    frameworks: "",
    developerTools: "",
    libraries: ""
}

export {emptyEducationInfo, emptyPersonalInfo, emptyExperienceInfo, emptyProjectsInfo, emptyTechnicalSkillsInfo}
export {sampleEducationInfo, samplePersonalInfo, sampleExperienceInfo, sampleProjectsInfo, sampleTechnicalSkillsInfo}

