import "../styles/SideBarStyles.css";
import {InputEducation, InputExperience, InputPersonal, InputProjects, InputTechnicalSkills} from "../components/InputFields.jsx";
import {sampleEducationInfo, samplePersonalInfo, sampleExperienceInfo, sampleProjectsInfo, sampleTechnicalSkillsInfo, emptyEducationInfo, emptyPersonalInfo, emptyExperienceInfo, emptyProjectsInfo, emptyTechnicalSkillsInfo} from "./DefaultData.js";

export default function Sidebar({personalInfo, educationInfo, experienceInfo, projectsInfo, technicalSkillsInfo, setPersonalInfo, setEducationInfo, setExperienceInfo, setProjectsInfo, setTechnicalSkillsInfo}){
    return(
        <aside>
            <div className="buttons">
                <button onClick={() =>{
                    setPersonalInfo(personalInfo = emptyPersonalInfo);
                    setEducationInfo(educationInfo = emptyEducationInfo);
                    setExperienceInfo(experienceInfo = emptyExperienceInfo);
                    setProjectsInfo(projectsInfo = emptyProjectsInfo);
                    setTechnicalSkillsInfo(technicalSkillsInfo = emptyTechnicalSkillsInfo);
                }}>New CV</button>
                <button onClick={() => {
                    setPersonalInfo(personalInfo = samplePersonalInfo);
                    setEducationInfo(educationInfo = sampleEducationInfo);
                    setExperienceInfo(experienceInfo = sampleExperienceInfo);
                    setProjectsInfo(projectsInfo = sampleProjectsInfo);
                    setTechnicalSkillsInfo(technicalSkillsInfo = sampleTechnicalSkillsInfo);
                }}>Sample CV</button>
            </div>
            <div className="input">
                <InputPersonal personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
                <InputEducation educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
                <InputExperience experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
                <InputProjects projectsInfo={projectsInfo} setProjectsInfo={setProjectsInfo}/>
                <InputTechnicalSkills technicalSkillsInfo={technicalSkillsInfo} setTechnicalSkillsInfo={setTechnicalSkillsInfo}/>
            </div>
            <button onClick={() => window.print()}>Print CV</button>
        </aside>
    )
}