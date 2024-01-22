import {CssBaseline} from "@mui/material";
import StarFrame from "../elements/StarFrame";
import CambridgeFrame from "../elements/CambridgeFrame";
import VideoFrame from "./VideoFrame";
import ReserveNPricingLinkFrame from "./ReserveNPricingLinkFrame";
import WorldClassFrame from "./WorldClassFrame";
import CardsFrame from "./СardsFrame";
import PartOfCambridgeFrame from "./PartOfCambridgeFrame";
import TransitioningFrame from "./TransitioningFrame";
import EnrollFrame from "../elements/EnrollFrame";
import FooterFrame from "../elements/FooterFrame";
import HeroSection from "../elements/HeroSection";
import React, {useEffect} from "react";

const MainPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <CssBaseline/>
            <HeroSection
                mainTitle={
                    <>
                        Give your child a<br/>
                        head start in life
                    </>
                }
                secondaryTitle={
                    <>
                        ✅ A world-leading primary school academic program <br/>
                        ✅ A multicultural, language-immersive environment <br/>
                        ✅ A comprehensive curriculum for holistic development
                    </>
                }
                backgroundImageUrl={'/homePage/hero.png'}
                buttonText={'RESERVE A SPOT'}
                buttonOnClickPath={'enroll'}
                underButtonText='Limited spots available.'
            />
            {/*<StarFrame/>*/}
            <CambridgeFrame/>
            <VideoFrame/>
            <ReserveNPricingLinkFrame/>
            <WorldClassFrame/>
            <CardsFrame/>
            <PartOfCambridgeFrame/>
            <TransitioningFrame/>
            <EnrollFrame/>
            <FooterFrame/>
        </>
    )
}

export default MainPage;