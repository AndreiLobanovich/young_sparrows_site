import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import ResizableImage from "../elements/ResizableImage";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";


const WorldClassFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = (path: string) => {
        history.push(`/${path}`)
    }
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            px: isMobile ? '20px' : '73px',
            flexDirection: 'column',
        }}>
            <Typography variant={'h2'} mx='auto' textAlign='center'>
                A world-class international primary school
            </Typography>
            <Typography variant={'h2'} fontWeight={400} mx='auto' gutterBottom>
                in the heart of Belgrade
            </Typography>
            <Grid container spacing={12}>
                <Grid item xs={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Typography variant={'h3'} width={'80%'} fontWeight={400}>
                        By blending the latest educational thinking with heartfelt dedication, we create an
                        inclusive learning environment where children discover and reach their potential.<br/><br/>

                        ✅ Small classes with up to 14 students, ensuring your child gets more attention<br/>

                        ✅ Ten mandatory and two optional subjects for strong academic foundations<br/>

                        ✅ Robotics, pottery work, and choir student clubs for maximum engagement<br/>

                        ✅ Book and eco clubs for parents, allowing you to get involved - as much as you’d like<br/>

                        ✅ Nutritious, home-cooked meals, prepared daily by our resident chef
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <ResizableImage src={'/homePage/worldClass.png'}/>
                </Grid>
            </Grid>
            <Box marginX='auto' my='5vh'>
                <OrangeHighlightButton onClick={() => handleClick('approach')}>
                    <Typography variant={'h3'}>
                        APPROACH
                    </Typography>
                </OrangeHighlightButton>
            </Box>
        </Box>
    );
}

export default WorldClassFrame;