import Field from "./Field.js";

function TechnicalSkillsComponent({value, setValue}: {value: any, setValue: any}) {
    const handleInputChange = (field: string) => (e: { target: { value: any; }; }) => {
        console.log(field, e);
        setValue((prevValue: any) => ({ ...prevValue, [field]: e.target.value }));
    };
    return (
        <>
            <div className="inputField">
                <label htmlFor="languages">Languages:</label>
                <input type="text" id="languages" name="languages" value={value.languages} onChange={handleInputChange("languages")} placeholder="Java, Python, ..."/>
            </div>
            <div className="inputField">
                <label htmlFor="frameworks">Frameworks:</label>
                <input type="text" id="frameworks" name="frameworks" value={value.frameworks} onChange={handleInputChange("frameworks")} placeholder="React, Node.js, ..."/>
            </div>
            <div className="inputField">
                <label htmlFor="developerTools">Developer Tools:</label>
                <input type="text" id="developerTools" name="developerTools" value={value.developerTools} onChange={handleInputChange("developerTools")} placeholder="Git, Docker, ..."/>
            </div>
            <div className="inputField">
                <label htmlFor="libraries">Libraries:</label>
                <input type="text" id="libraries" name="libraries" value={value.libraries} onChange={handleInputChange("libraries")} placeholder="pandas, NumPy, Matplotlib, ..."/>
            </div>
        </>
    )
}


export default function InputTechnicalSkills({technicalSkillsInfo, setTechnicalSkillsInfo}: {technicalSkillsInfo: any, setTechnicalSkillsInfo: any}) {
    return (
        <Field title="Technical Skills" Component={<TechnicalSkillsComponent value={technicalSkillsInfo} setValue={setTechnicalSkillsInfo}/>} />
    );
}