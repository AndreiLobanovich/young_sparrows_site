import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import {Card, renderCards} from "../scripts/renderCards";

const ApproachFrame: React.FC = () => {
    const cards: Card[] = [
        {
            imagePath: '/approachPage/card1.png',
            text: 'Personalized learning',
            description: 'Small groups make it possible to cater to each child’s unique abilities, ' +
                'interests, and needs.'
        },
        {
            imagePath: '/approachPage/card2.png',
            text: 'Language immersion',
            description: 'Language adoption feels almost effortless because children learn, read, ' +
                'and interact in English.'
        },
        {
            imagePath: '/approachPage/card3.png',
            text: 'Multicultural environment',
            description: 'Your child bonds with teachers and students of different cultures, nationalities, and races.'
        }
    ]
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            px: isMobile ? '20px' : '73px',
            flexDirection: 'column',
            marginTop: '5vh'
        }}>
            <Typography variant='h2'  mx='auto' textAlign='center' gutterBottom>
                The Young Sparrows approach
            </Typography>
            <Grid container xs={12} spacing={4}>
                {renderCards(cards)}
            </Grid>
        </Box>
    )
}

export default ApproachFrame;