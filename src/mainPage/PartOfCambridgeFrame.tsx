import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import ResizableImage from "../elements/ResizableImage";


const PartOfCambridgeFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingLeft: isMobile ? '20px' : '73px',
            paddingRight: isMobile ? '20px' : '73px',
            flexDirection: 'column',
        }}>
            <Grid container spacing={{md: 12, xs: 5}} sx={{display: 'flex', flexDirection: 'row'}}>
                <Grid item sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}} xs={12} md={7}>
                    <Typography variant={'h3'} fontWeight={800}>
                        Young Sparrows is a proud part of the Cambridge International School system
                    </Typography>
                    <Typography variant={'h3'} fontWeight={400}>
                        Following the Cambridge Pathway program, each year at Young Sparrows is marked by top-tier
                        primary school education, equipping your child with skills for life.<br/><br/>
                        Our primary school program is compatible with any Cambridge program
                        (both Early Years and Primary Stage).<br/><br/>
                        The Cambridge Primary advantages:<br/>
                        👉 A robust program focusing on creativity, expression, and personal wellbeing<br/>
                        👉 Exams that value knowledge, reward critical thinking, and foster growth<br/>
                        👉 Foundations that open doors to the world’s leading schools and universities<br/>
                    </Typography>
                </Grid>
                <Grid item md={5} xs={12}>
                    <ResizableImage src={'/homePage/proudPart.png'}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PartOfCambridgeFrame;