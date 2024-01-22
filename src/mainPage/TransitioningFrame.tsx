import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import ResizableImage from "../elements/ResizableImage";


const TransitioningFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '30px',
            paddingLeft: isMobile ? '20px' : '73px',
            paddingRight: isMobile ? '20px' : '73px',
            flexDirection: 'column',
        }}>
            <Typography variant={'h2'} mx='auto' marginBottom='2vh'>
                Transitioning to and from Young Sparrows
            </Typography>
            <Grid container spacing={12} sx={{display: 'flex', flexDirection: 'row'}}>
                <Grid item xs={5}>
                    <ResizableImage src={'/homePage/transition.png'}/>
                </Grid>
                <Grid item sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}} xs={7}>
                    <Typography variant={'h3'} fontWeight={400}>
                        Easing the move from kindergarten, our first-year curriculum at primary school blends
                        play-based learning within a structured setting.<br/><br/>
                        In the second year, we prepare your child for greater challenges, fostering advanced
                        learning and growth.<br/><br/>
                        As your child approaches the age for lower secondary school, we ensure a seamless transition
                        by introducing families to secondary school teachers. They provide guidance and insights
                        your child needs to make the next educational step.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TransitioningFrame;