import React from "react";
import {Box, Grid, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import {Card, renderCards} from "../scripts/renderCards";


const CardsFrame: React.FC = () => {
    const cards: Card[] = [
        {
            imagePath: '/approachPage/card4.png',
            text: 'Home-cooked meals',
            description: 'Approved by a nutrition expert, we use only the freshest and most nutritious ingredients.'
        },
        {
            imagePath: '/approachPage/card5.png',
            text: 'Regular checkups',
            description: 'Regular dental and medical checkups, with access to a child and family psychologist.'
        },
        {
            imagePath: '/approachPage/card6.png',
            text: 'Accident insurance',
            description: 'Each child gets accident insurance that includes kindergarten stays and field trips, ' +
                'free of charge.'
        }
    ]
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            px: isMobile ? "20px" : "73px",
            flexDirection: 'column',
            marginTop: '5vh'
        }}>
            <Box sx={{flexGrow: 1}}/>
            <Grid container xs={12} spacing={4}>
                {renderCards(cards)}
            </Grid>
        </Box>
    )
}

export default CardsFrame;