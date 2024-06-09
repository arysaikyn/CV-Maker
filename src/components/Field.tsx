import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Field({ title, Component }: { title: string, Component: React.ReactNode }) {
    const [openOrNot, setOpenOrNot] = useState(false);
    return (
        <>
            <div onClick={() => setOpenOrNot(!openOrNot)} style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h1>{title}</h1>
                <div id="container">
                    <RiArrowDropDownLine id="icon" style={{
                        transform: openOrNot ? "rotate(0deg)" : "rotate(180deg)",
                        transition: "transform 0.2s linear",
                        height: "2rem",
                        width: "2rem",
                    }} />
                </div>
            </div>
            <div style={openOrNot ? {
                maxHeight: "max-content",
                overflow: "hidden",
                transition: "max-height 1s ease-in",
                opacity: 1,
            } : {
                maxHeight: 0,
                overflow: "hidden",
                transition: "max-height 0.5s ease-out",
                opacity: 1,
            }}>
                {Component}
            </div>
        </>
    );
}