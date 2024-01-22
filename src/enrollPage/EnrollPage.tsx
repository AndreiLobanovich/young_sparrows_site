import {CssBaseline} from "@mui/material";
import FooterFrame from "../elements/FooterFrame";
import EnrollFormFrame from "./EnrollFormFrame";
import HeroSection from "../elements/HeroSection";
import {useEffect} from "react";

const NurceryPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <CssBaseline/>
            <HeroSection
                mainTitle={
                    <>
                        Reserve a spot in<br/> just two minutes
                    </>
                }
                secondaryTitle={
                    <>
                        Enroll your child before May 2024 and claim a 5%<br/>
                        early bird discount on yearly tuition. Limited<br/>
                        spots available.
                    </>
                }
                backgroundImageUrl={'/enrollPage/hero.png'}
            />
            <EnrollFormFrame/>
            <FooterFrame/>
        </>
    )
}

export default NurceryPage;