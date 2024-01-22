import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";

const SkillFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            px: isMobile ? '20px' : '73px'
        }}>
            <Typography variant='h3' mx='auto'>
                Our programs are designed to help your child:
            </Typography>
            <Grid
                container
                spacing={2}
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid item xs={4}>
                    <Typography variant="h5" mb={5}>✅ Receive well-rounded education</Typography>
                    <Typography variant="h5" mb={5}>✅ Develop creativity and expression</Typography>
                    <Typography variant="h5" mb={2}>✅ Become multilingual</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5" mb={5}>✅ Nurture emotional and social abilities</Typography>
                    <Typography variant="h5" mb={5}>✅ Discover unique talents</Typography>
                    <Typography variant="h5" mb={5}>✅ Ignite a passion for learning</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SkillFrame;