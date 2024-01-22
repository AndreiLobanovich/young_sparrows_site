import {CssBaseline} from "@mui/material";
import SkillFrame from "./SkillFrame";
import EducationalThinkingFrame from "./EducationalThinkingFrame";
import DifferenceFrame from "./DifferenceFrame";
import EnrollFrame from "../elements/EnrollFrame";
import FooterFrame from "../elements/FooterFrame";
import CambridgeFrame from "../elements/CambridgeFrame";
import ProgramFrame from "./ProgramFrame";
import HeroSection from "../elements/HeroSection";
import {useEffect} from "react";

const ProgramPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <CssBaseline/>
            <HeroSection
                mainTitle={<>Education for the future</>}
                secondaryTitle={
                    <>
                        Our program lays exceptional academic<br/>
                        foundations, supporting your child’s well-<br/>
                        rounded development.
                    </>
                }
                buttonText={'RESERVE A SPOT'}
                buttonOnClickPath={'enroll'}
                backgroundImageUrl={'/programPage/hero.png'}
                underButtonText={'Limited spots available'}
            />
            <CambridgeFrame/>
            <SkillFrame/>
            <EducationalThinkingFrame/>
            <DifferenceFrame/>
            <ProgramFrame/>
            <EnrollFrame/>
            <FooterFrame/>
        </>
    )
}

export default ProgramPage;