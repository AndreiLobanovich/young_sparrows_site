import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";

const SkillFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const lines = [
        '✅ Receive well-rounded education',
        '✅ Nurture emotional and social abilities',
        '✅ Develop creativity and expression',
        '✅ Discover unique talents',
        '✅ Become multilingual',
        '✅ Ignite a passion for learning',
    ]
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            px: isMobile ? '20px' : '73px'
        }}>
            <Typography variant='h3' mx='auto' gutterBottom>
                Our programs are designed to help your child:
            </Typography>
            {isMobile ?
                <Box>
                    {lines.map(line => (
                        <Typography variant='h3' mb={2}>{line}</Typography>
                    ))}
                </Box>
                :
                <Box display='flex' alignItems='center' width='100%'>
                    <Grid
                        container
                        spacing={2}
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        {lines.map(line => (
                            <Grid item xs={4}>
                                <Typography variant='h5'>{line}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            }
        </Box>

    )
}

export default SkillFrame;