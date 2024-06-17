import "../styles/DisplayStyles.css"

type PersonalInfo = {
    name: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
};

type EducationInfo = {
    college: string;
    title: string;
    time: string;
    location: string;
};

type ExperienceInfo = {
    title: string;
    subtitle: string;
    time: string;
    location: string;
    bullets: string[];
}[];

type ProjectInfo = {
    title: string;
    technologies: string;
    time: string;
    bullets: string[];
}[];

type TechnicalSkillsInfo = {
    languages: string;
    frameworks: string;
    developerTools: string;
    libraries: string;
};

type DisplayProps = {
    personalInfo: PersonalInfo;
    educationInfo: EducationInfo;
    experienceInfo: ExperienceInfo;
    projectsInfo: ProjectInfo;
    technicalSkillsInfo: TechnicalSkillsInfo;
};

export default function Display({
    personalInfo,
    educationInfo,
    experienceInfo,
    projectsInfo,
    technicalSkillsInfo
}: DisplayProps){

    return(
        <div className="main">
            <h1>{personalInfo.name}</h1>

            <div className="section headerInfo">
                <ul>
                    <li><a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a></li>
                    <li><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></li>
                    <li><a href={"https://" + personalInfo.linkedin}>{personalInfo.linkedin}</a></li>
                    <li><a href={"https://" + personalInfo.github}>{personalInfo.github}</a></li>
                </ul>
            </div>

            <h2>Education</h2>
            <h3>{educationInfo.college} <span className="spacer"></span><span className="normal">{educationInfo.time}</span></h3>
            <h3>{educationInfo.title}<span className="spacer"></span>{educationInfo.location}</h3>

            <h2>Experience</h2>
            {experienceInfo.map((job, index) => (
                <div key={index}>
                    <h3>{job.title} <span className="spacer"></span><span className="normal"> {job.time} </span></h3>
                    <h4>{job.location} <span className="spacer"></span> {job.location}</h4>
                    <ul>
                        {job.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <h2>Projects</h2>
            {projectsInfo.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}<span className="tech-stack">&nbsp;| {project.technologies}</span><span className="spacer"></span><span className="normal">{project.time}</span></h3>
                    <ul>
                        {project.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <h2>Technical Skills</h2>
            <p className="indent"><strong>Languages</strong>: {technicalSkillsInfo.languages}</p>
            <p className="indent"><strong>Frameworks</strong>: {technicalSkillsInfo.frameworks}</p>
            <p className="indent"><strong>Developer Tools</strong>: {technicalSkillsInfo.developerTools}</p>
            <p className="indent"><strong>Libraries</strong>: {technicalSkillsInfo.libraries}</p>
        </div>
    )
}