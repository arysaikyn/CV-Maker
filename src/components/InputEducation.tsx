import Field from "./Field.js";

function EducationComponent({value, setValue}: {value: any, setValue: React.Dispatch<React.SetStateAction<any>>}) {
    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prevValue: any) => ({ ...prevValue, [field]: e.target.value }));
    };
    return (
        <>
            <div className="inputField">
                <label htmlFor={`college-${value.college}`}>College</label>
                <input type="text" id={`college-${value.college}`} name="college" value={value.college} onChange={handleInputChange("college")} placeholder="Harvard University"/>
            </div>
            <div className="inputField">
                <label htmlFor={`location-${value.location}`}>Location</label>
                <input type="text" id={`location-${value.location}`} name="location" value={value.location} onChange={handleInputChange("location")} placeholder="Cambridge, MA"/>
            </div>
            <div className="inputField">
                <label htmlFor={`time-${value.time}`}>Time</label>
                <input type="text" id={`time-${value.time}`} name="time" value={value.time} onChange={handleInputChange("time")} placeholder="2015 - 2019"/>
            </div>
            <div className="inputField">
                <label htmlFor={`title-${value.title}`}>Degree Title</label>
                <input type="text" id={`title-${value.title}`} name="title" value={value.title} onChange={handleInputChange("title")} placeholder="Bachelor of Science in Computer Science"/>
            </div>
        </>
    );
}

export default function InputEducation({educationInfo, setEducationInfo}: {educationInfo: any, setEducationInfo: React.Dispatch<React.SetStateAction<any>>}) {
    return (
        <Field title="Education" Component={<EducationComponent value={educationInfo} setValue={setEducationInfo} />} />);
}