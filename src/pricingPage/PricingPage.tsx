import {Box, CssBaseline} from "@mui/material";
import PricingFrame from "./PricingFrame";
import EnrollFrame from "../elements/EnrollFrame";
import FooterFrame from "../elements/FooterFrame";
import HeroSection from "../elements/HeroSection";
import React, {useEffect} from "react";
import CambridgeFrame from "../elements/CambridgeFrame";

const PricingPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <CssBaseline/>
            <HeroSection
                mainTitle={
                    <>
                        More for your child
                    </>
                }
                secondaryTitle={
                    <>
                        ✅ World-class curriculum and empathetic teachers<br/>
                        ✅ Small classes for a more personalized learning experience<br/>
                        ✅ Unrivaled set of activities and value-packed extras for your child<br/>
                    </>
                }
                backgroundImageUrl={'/pricingPage/hero.png'}
            />
            <Box my={'5vh'}>
                <CambridgeFrame/>
            </Box>

            <PricingFrame/>
            <EnrollFrame/>
            <FooterFrame/>
        </>
    )
}

export default PricingPage;