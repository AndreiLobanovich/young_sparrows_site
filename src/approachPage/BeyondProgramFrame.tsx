import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import ResizableImage from "../elements/ResizableImage";


const BeyondProgramFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '30px',
            px: isMobile ? '20px' : '73px',
            flexDirection: 'column',
        }}>
            <Typography mx='auto' variant='h2'>
                Beyond just a great educational program
            </Typography>
            <Grid container spacing={12} sx={{display: 'flex', flexDirection: 'row'}}>
                <Grid item sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} xs={7}>
                    <Typography variant='h2'>
                        👪
                    </Typography>
                    <Typography variant={'h3'} fontWeight={800}>
                        An extension of your family
                    </Typography>
                    <Typography variant={'h3'} fontWeight={400}>
                        More than just providing exceptional primary education, we spare no effort in ensuring your
                        child is growing in a secure and embracing environment.<br/><br/>

                        Since our main goal is to help your child develop foundations for future success, we welcome
                        active participation from parents - as much as their schedules allow.<br/><br/>

                        ✅ Our teachers provide individualized attention, catering to each child's needs<br/>
                        ✅ Parent Evenings that keep you involved in your child's educational journey<br/>
                        ✅ Closed compounds with surveillance and strictly regulated access<br/>
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <ResizableImage src={'/approachPage/extension.png'}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BeyondProgramFrame;