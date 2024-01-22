import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import ResizableImage from "../elements/ResizableImage";
import theme from "../elements/Theme";

const ForwardThinkingFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            display: 'flex',
            paddingTop: '73px',
            px: isMobile ? '20px' : '73px',
            flexDirection: 'column',
        }}>
            <Typography variant={'h2'} mx='auto'>
                Forward-thinking educational approach
            </Typography>
            <Grid container spacing={12}>
                <Grid item xs={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Typography variant={'h3'} width={'80%'} fontWeight={400}>
                        With the esteemed Cambridge Primary certification, Young Sparrows nurtures holistic development
                        for students aged 5-11.<br/><br/>

                        Our integrated approach fosters intellectual, emotional, social, and physical growth,
                        empowering children to navigate and find their niche in the dynamic world.<br/><br/>

                        We ignite a passion for learning, delving deep into each subject’s core concepts, ensuring
                        thorough understanding and enthusiasm.
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <ResizableImage src={'/approachPage/forwardThinking.png'}/>
                </Grid>
            </Grid>
            <Typography variant='h2' mx='auto'>
                Committed to your child’s growth
            </Typography>
            <Typography variant='h3' fontWeight={400}>
                There’s a reason why both children and parents love our educational brand. We truly care about the
                well-being and progress of each child.<br/><br/>

                We want to give your child a head start in life by delivering exceptional, personalized primary
                education. This is why we offer a flexible, culturally sensitive, and inspiring curriculum that
                develops creative, expressive, and problem-solving skills.<br/><br/>

                At Young Sparrows, learning is about self-driven and long-lasting growth.
            </Typography>
        </Box>
    )
}

export default ForwardThinkingFrame;

