import Sidebar from "./parts/Sidebar.tsx";
import Display from "./parts/Display.tsx";
import {sampleEducationInfo, samplePersonalInfo, sampleExperienceInfo, sampleProjectsInfo, sampleTechnicalSkillsInfo} from "./parts/DefaultData.tsx";
import "./App.css";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function App(){
  const [personalInfo, setPersonalInfo] = useState(samplePersonalInfo);
  const [educationInfo, setEducationInfo] = useState(sampleEducationInfo);
  const [experienceInfo, setExperienceInfo] = useState(sampleExperienceInfo);
  const [projectsInfo, setProjectsInfo] = useState(sampleProjectsInfo);
  const [technicalSkillsInfo, setTechnicalSkillsInfo] = useState(sampleTechnicalSkillsInfo);

  return(
    <>
      <main>
        <Sidebar
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
          projectsInfo={projectsInfo}
          technicalSkillsInfo={technicalSkillsInfo}
          setPersonalInfo={setPersonalInfo}
          setEducationInfo={setEducationInfo}
          setExperienceInfo={setExperienceInfo}
          setProjectsInfo={setProjectsInfo}
          setTechnicalSkillsInfo={setTechnicalSkillsInfo}
        />
        <Display
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
          projectsInfo={projectsInfo}
          technicalSkillsInfo={technicalSkillsInfo}
        />
      </main>
      <a href="https://github.com/arysaikyn/CV-Maker">
        <FaGithub style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          scale: "2"
        }}></FaGithub>
      </a>
    </>
  )
}