import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import ResizableImage from "../elements/ResizableImage";

const EducationalThinkingFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: isMobile ? '20px' : '73px',
        }}>
            <Typography variant={'h2'} mx='auto' fontWeight={400}>
                Cambridge Primary:
            </Typography>
            <Typography variant={'h2'} mx='auto' gutterBottom>
                The leading educational thinking
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Typography variant='h3' fontWeight={400}>
                        Each time children step into our welcoming classrooms, they step into a world where learning
                        feels exciting and natural.<br/><br/>
                        This is largely due to our certified program that challenges and stimulates minds, uncovering
                        thekey concepts behind each subject.<br/><br/>
                        With a program that recognizes, rewards, and encourages creativity, expression, and critical
                        thinking - it’s no wonder Cambridge Primary opens doors to the world’s best schools and
                        universities.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <ResizableImage src={'/programPage/leadingThinking.png'}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EducationalThinkingFrame;