import Field from "./Field.js";
import { useState } from "react";
import { IoMdRemove } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

// need to create an addable input block that can be used for experience and projects
function RegularFieldComponent({ id, title, value, handleInputChange, index }: { id: string, title: string, value: string, handleInputChange: Function, index: number }) {
  return (
      <div className="regularFieldComponent">
          <label htmlFor={id}>{title}</label>
          <input
              type="text"
              id={id}
              name={title}
              value={value}
              onChange={(e) => {
                  handleInputChange(e, index)
              }}
          />
      </div>
  )
}

function IrregularFieldComponent({ id, value, superValue, setValue, handleInputChange, bulletIndex, index }: { id: string, value: string, superValue: any, setValue: Function, handleInputChange: Function, bulletIndex: number, index: number }) {
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
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
            style={{
              transform: hover ? "scale(1.5)" : undefined
          }}/>
          <label htmlFor={id}>Details</label>
        </div>
            <input
              type="text"
              id={id}
              name={bulletIndex.toString()} // Convert bulletIndex to a string
              value={value}
              onChange={(e) => {
                handleInputChange(e, index)
              }}
            />
      </div>
  )
}

function FieldComponent({value, setValue, index}: {value: any, setValue: Function, index: number}) {
  function handleRegularInputChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    const {name, value: v} = e.target;
    let prevValue = [...value];
    prevValue[i] = {...prevValue[i], [name]:v};
    setValue(prevValue);
  }

  function handleIrregularInputChange(e: React.ChangeEvent<HTMLInputElement>, i: number){
    const {name, value: v} = e.target;
    let prevValue = [...value];
    prevValue[i].bullets[name] = v
    setValue(prevValue)
  }

  return (
    <div className="fieldComponent">
      <div className="InputField">
        <RegularFieldComponent
    id={`title-${index}`}
    title="title"
    value={value[index].title}
    handleInputChange={handleRegularInputChange}
    index={index}
  />
  <RegularFieldComponent
    id={`subtitle-${index}`}
    title="subtitle"
    value={value[index].subtitle}
    handleInputChange={handleRegularInputChange}
    index={index}
  />
  <RegularFieldComponent
    id={`time-${index}`}
    title="time"
    value={value[index].time}
    handleInputChange={handleRegularInputChange}
    index={index}
  />
  <RegularFieldComponent
    id={`location-${index}`}
    title="location"
    value={value[index].location}
    handleInputChange={handleRegularInputChange}
    index={index}
  />
  {value[index].bullets.map((bullet: string, i: number) => {
    return <IrregularFieldComponent id={`bullet-${index}-${i}`} superValue={value} value={bullet} setValue={setValue} handleInputChange={handleIrregularInputChange} bulletIndex={i} index={index}/>
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

function InputPart({index, value, setValue}: {index: number, value: any, setValue: Function}) {
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
          transform: hover ? "scale(1.5)" : undefined,
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

function ExperienceComponent({value, setValue}: {value: any, setValue: Function}) {
    return (
        <>
            {value.map((_item: any, index: number) => {
              return <InputPart index={index} value={value} setValue={setValue} key={index}/>
            })}
            <button className="newgen" onClick={() => {
            setValue([
                ...value,
                {
                    title: "",
                    subtitle: "",
                    time: "",
                    location: "",
                    bullets: []
                }
            ]);
        }}>
            Add Experience
        </button>
        </>
    );
}

export default function InputExperience({experienceInfo, setExperienceInfo}: {experienceInfo: any, setExperienceInfo: Function}) {
  return (
    <Field title="Experience" Component={<ExperienceComponent value={experienceInfo} setValue={setExperienceInfo} />}/>
  );
}