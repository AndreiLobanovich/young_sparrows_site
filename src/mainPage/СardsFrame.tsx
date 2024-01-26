import React from "react";
import {Box, Grid, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import {Card, renderCards} from "../scripts/renderCards";


const CardsFrame: React.FC = () => {
    const cards: Card[] = [
        {
            imagePath: '/homePage/card1.png',
            text: 'Cambridge Pathway curriculum',
            description: 'An approach that expands cognitive and emotional horizons, and instills a love for learning.'
        },
        {
            imagePath: '/homePage/card2.png',
            text: 'Fun extracurricular activities',
            description: 'An unrivaled set of exciting activities, devised and led by the leading experts in the fields.'
        },
        {
            imagePath: '/homePage/card3.png',
            text: 'Native-speaking teachers',
            description: 'A team of experienced teachers who form a caring relationship with each child in the class.'
        },
        {
            imagePath: '/homePage/card4.png',
            text: 'Central, quiet location',
            description: 'Located in a secluded Vračar street, close to the city center and the inter-city highway.'
        },
        {
            imagePath: '/homePage/card5.png',
            text: 'Parent-friendly hours',
            description: 'From 8:00 to 15:30. For the parents who need it, we offer four different extended stay options.'
        },
        {
            imagePath: '/homePage/card6.png',
            text: 'Regular checkups',
            description: 'Regular dental and medical checkups, with access to a child and family psychologist.'
        },
    ]
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            my='5vh'
            sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                px: isMobile ? '20px' : '73px',
                flexDirection: 'column',
            }}
        >
            <Box sx={{height: '10vh'}}/>
            <Grid container xs={12} spacing={4}>
                {renderCards(cards)}
            </Grid>
        </Box>
    );
};

export default CardsFrame;