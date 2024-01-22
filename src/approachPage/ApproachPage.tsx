import {CssBaseline} from "@mui/material";
import ApproachFrame from "./ApproachFrame";
import ForwardThinkingFrame from "./ForwardThinkingFrame";
import CardsFrame from "./СardsFrame";
import FooterFrame from "../elements/FooterFrame";
import EnrollFrame from "../elements/EnrollFrame";
import BeyondProgramFrame from "./BeyondProgramFrame";
import HeroSection from "../elements/HeroSection";
import React, {useEffect} from "react";

const ApproachPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <CssBaseline/>
            <HeroSection
                mainTitle={
                    <>
                        Learning, as it should be
                    </>
                }
                secondaryTitle={
                    <>
                        Cultivating curiosity, creativity, and independent thinking in an inclusive
                        environment - we set cornerstones for lifelong growth.
                    </>
                }
                backgroundImageUrl={'/approachPage/hero.png'}
                buttonText={'RESERVE A SPOT'}
                buttonOnClickPath={'enroll'}
                underButtonText={'Limited spots available'}
            />
            <ApproachFrame/>
            <ForwardThinkingFrame/>
            <BeyondProgramFrame/>
            <CardsFrame/>
            <EnrollFrame/>
            <FooterFrame/>
        </>
    )
}

export default ApproachPage;