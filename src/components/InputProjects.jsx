import Field from "./Field.jsx";
import { useState } from "react";
import { IoMdRemove } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function RegularFieldComponent({ id, title, value, handleInputChange, index }) {
    return (
        <div className="regularFieldComponent">
            <label htmlFor={`${id}-${index}`}>{title}</label>
            <input
                type="text"
                id={`${id}-${index}`}
                name={id}
                value={value}
                onChange={(e) => {
                    handleInputChange(e, index)
                }}
            />
        </div>
    )
}

function IrregularFieldComponent({ id, value, superValue, setValue, handleInputChange, bulletIndex, index }) {
    const [hover, setHover] = useState(false)
    return (
        <div className="irregularFieldComponent">
            <div>
                <IoMdRemove
                    onClick={() => {
                        index = Number(index);
                        bulletIndex = Number(bulletIndex);
                        let arr = [...superValue[index].bullets];
                        arr.splice(bulletIndex, 1);
                        let prevValue = [...superValue];
                        prevValue[index].bullets = arr;
                        setValue(prevValue);
                    }}
                    onMouseEnter={() => { setHover(!hover) }}
                    onMouseLeave={() => { setHover(!hover) }}
                    style={{
                        transform: hover && "scale(1.5)",
                    }} />
                <label htmlFor={`${id}-${index}`}>Details</label>
            </div>
                <input
                    type="text"
                    id={`${id}-${index}`}
                    name={id}
                    value={value}
                    onChange={(e) => {
                        handleInputChange(e, index)
                    }}
                />
        </div>
    )
}

// ... rest of the code remains the same

function FieldComponent({ value, setValue, index }) {
    function handleRegularInputChange(e, i) {
        const { name, value: v } = e.target;
        let prevValue = [...value];
        prevValue[i] = { ...prevValue[i], [name]: v };
        setValue(prevValue);
    }

    function handleIrregularInputChange(e, i) {
        const { name, value: v } = e.target;
        let prevValue = [...value];
        prevValue[i].bullets[name] = v
        setValue(prevValue)
    }

    return (
        <div className="fieldComponent">
            <div className="InputField">
                <RegularFieldComponent
                    id="title"
                    title="Title"
                    value={value[index].title}
                    handleInputChange={handleRegularInputChange}
                    index={index}
                />
                <RegularFieldComponent
                    id="technologies"
                    title="Technologies"
                    value={value[index].technologies}
                    handleInputChange={handleRegularInputChange}
                    index={index}
                />
                <RegularFieldComponent
                    id="time"
                    title="Time"
                    value={value[index].time}
                    handleInputChange={handleRegularInputChange}
                    index={index}
                />
                {value[index].bullets.map((bullet, i) => {
                    return <IrregularFieldComponent id={i} superValue={value} value={bullet} setValue={setValue} handleInputChange={handleIrregularInputChange} bulletIndex={i} index={index} />
                })}
            </div>
            <button onClick={() => {
                let prevValue = [...value];
                prevValue[index].bullets.push("");
                setValue(prevValue);
            }}>
                Add More Details
            </button>
        </div>
    );
}

function InputPart({index, value, setValue}){
    const [hover, setHover] = useState(false)
    return (
      <div style={{
        border: "2px dashed white",
        margin: "1rem",
      }}>
        <RxCross2
          onClick={() => {
            let arr = [...value];
            arr.splice(index, 1);
            setValue(arr);
          }}
          onMouseEnter={() => {setHover(!hover)}}
          onMouseLeave={() => {setHover(!hover)}}
          style={{
          transform: hover && "scale(1.5)",
          display: "block",
          marginLeft: "auto",
          marginRight: "10px",
          marginTop: "10px",
          marginBottom: "10px",
          height: "30px",
          width: "30px"
        }}/>
        <FieldComponent value={value} setValue={setValue} index={index}/>
      </div>
    );
}

function ProjectsComponent({value, setValue}) {
    return (
        <>
            {value.map((item, index) => {
                return <InputPart item={item} index={index} value={value} setValue={setValue} key={index}/>
            })}
            <button className="newgen" onClick={() => {
                setValue([
                    ...value,
                    {
                        title: "",
                        technologies: "",
                        time: "",
                        bullets: []
                    }
                ]);
            }}>
                Add Project
            </button>
        </>
    );
}

export default function InputProjects({ projectsInfo, setProjectsInfo }) {
    return (
        <Field title="Projects" Component={<ProjectsComponent value={projectsInfo} setValue={setProjectsInfo} />} />
    );
}