import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import {Card, renderCards} from "../scripts/renderCards";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";


const DifferenceFrame: React.FC = () => {
    let history = useHistory();
    const cards: Card[] = [
        {
            text: 'Small groups',
            description: 'To offer an exceptionally personalized learning experience, our groups have up to 14 students.',
            imagePath: '/programPage/card1.png'
        },
        {
            text: 'Experienced teachers',
            description: 'Our certified teachers truly care about each child’s wellbeing and development.',
            imagePath: '/programPage/card2.png'
        },
        {
            text: 'Language-immersion',
            description: 'Native-speaking teachers guide your child in naturally adopting the English language.',
            imagePath: '/programPage/card3.png'
        },
    ]

    function handleClick() {
        history.push('/pricing');
    }

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            mt='5vh'
            sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: isMobile ? '20px' : '73px'
        }}>
            <Typography variant={'h2'} mx='auto' gutterBottom>
                The Young Sparrows difference
            </Typography>
            <Grid container xs={12} spacing={4}>
                {renderCards(cards)}
            </Grid>
            <Box mx='auto' my='5vh'>
                <OrangeHighlightButton onClick={handleClick}>
                    <Typography variant='h3'>
                        PRICING
                    </Typography>
                </OrangeHighlightButton>
            </Box>
        </Box>
    )
}

export default DifferenceFrame;