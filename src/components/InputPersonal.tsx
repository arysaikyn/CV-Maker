import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Field from "./Field.js";

interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
}

interface PersonalComponentProps {
    value: PersonalInfo;
    setValue: Dispatch<SetStateAction<PersonalInfo>>;
}

function PersonalComponent({value, setValue}: PersonalComponentProps) {
    const handleInputChange = (field: keyof PersonalInfo) => (e: ChangeEvent<HTMLInputElement>) => {
        setValue(prevValue => ({ ...prevValue, [field]: e.target.value }));
    };
    return (
        <>
            <div className="inputField">
                <label htmlFor={`name-${value.name}`}>Name</label>
                <input type="text" id={`name-${value.name}`} name="name" value={value.name} onChange={handleInputChange("name")} placeholder="John Doe"/>
            </div>
            <div className="inputField">
                <label htmlFor={`email-${value.email}`}>Email</label>
                <input type="email" id={`email-${value.email}`} name="email" value={value.email} onChange={handleInputChange("email")} placeholder="example@example.com"/>
            </div>
            <div className="inputField">
                <label htmlFor={`phone-${value.phone}`}>Phone</label>
                <input type="tel" id={`phone-${value.phone}`} name="phone" value={value.phone} onChange={handleInputChange("phone")} placeholder="123-456-7890"/>
            </div>
            <div className="inputField">
                <label htmlFor={`github-${value.github}`}>Github Link</label>
                <input type="url" id={`github-${value.github}`} name="github" value={value.github} onChange={handleInputChange("github")} placeholder="github.com/username"/>
            </div>
            <div className="inputField">
                <label htmlFor={`linkedin-${value.linkedin}`}>Linkedin Link</label>
                <input type="url" id={`linkedin-${value.linkedin}`} name="linkedin" value={value.linkedin} onChange={handleInputChange("linkedin")} placeholder="linkedin.com/in/username"/>
            </div>
        </>
    );
}

interface InputPersonalProps {
    personalInfo: PersonalInfo;
    setPersonalInfo: Dispatch<SetStateAction<PersonalInfo>>;
}

export default function InputPersonal({personalInfo, setPersonalInfo}: InputPersonalProps) {
    return (
        <Field title="Personal" Component={<PersonalComponent value={personalInfo} setValue={setPersonalInfo} />} />);
}