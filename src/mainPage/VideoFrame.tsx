import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";

const VideoFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const lines = [
        '👉 World-class curriculum',
        '👉 Experienced, empathetic teachers',
        '👉 Language-immersive programs',
        '👉 Personalized learning experience',
        '👉 Healthy food made by a resident chef',
        '👉 Closed compound, regulated access',
    ]
    return (
        <Box sx={{
            height: '100%',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: isMobile ? '20px' : '73px',
            paddingRight: isMobile ? '20px' : '73px',
        }}>
            <Typography variant='h2' fontWeight='800' mx='auto' textAlign='center'>
                Welcome to Young Sparrows 👋
            </Typography>
            <Typography variant='h2' fontWeight='400' mx='auto' textAlign='center' gutterBottom>
                A student-centered school for 5 to 11-year-olds
            </Typography>
            <Box display='flex' justifyContent='center'>
                <Grid container spacing={2} xs={11} md={9} justifyContent="center" display='flex'>
                    {lines.map((line, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Typography variant='h4' fontWeight='400'>
                                    {line}
                                </Typography>
                            </Grid>
                        )
                    )}
                </Grid>
            </Box>
            <Box width={{ms: '70%', xs: '100%'}} mx='auto'>
                <video width="100%" controls>
                    <source src="sample-5s.mp4" type="video/mp4"/>
                </video>
            </Box>

        </Box>
    );
}

export default VideoFrame;