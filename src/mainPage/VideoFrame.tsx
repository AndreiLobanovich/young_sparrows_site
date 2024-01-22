import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";

const VideoFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
            <Typography variant='h2' fontWeight='400' mx='auto' textAlign='center'>
                A student-centered school for 5 to 11-year-olds
            </Typography>
            <Box sx={{height: '3vh'}}/>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Box width='fit-content'>
                            <Typography variant='h3'>👉 World-class curriculum<br/></Typography>
                            <Typography variant='h3'>👉 Experienced, empathetic teachers<br/></Typography>
                            <Typography variant='h3'>👉 Language-immersive programs<br/></Typography>
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Box width='fit-content'>
                            <Typography variant='h3'>👉 Personalized learning experience<br/></Typography>
                            <Typography variant='h3'>👉 Healthy food made by a resident chef<br/></Typography>
                            <Typography variant='h3'>👉 Closed compound, regulated access</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} order={isMobile ? -1 : 1}>
                    <video width="100%" controls>
                        <source src="sample-5s.mp4" type="video/mp4"/>
                    </video>
                </Grid>
            </Grid>
        </Box>
    );
}

export default VideoFrame;