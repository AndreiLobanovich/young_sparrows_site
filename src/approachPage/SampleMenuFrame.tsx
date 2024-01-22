import React from "react";
import theme from "../elements/Theme";
import {Box, Typography} from "@mui/material";
import TextToppedImage from "../elements/TextToppedImage";


const SampleMenuFrame: React.FC = () => {
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '23px',
            paddingLeft: '73px',
            paddingRight: '73px',
            flexDirection: 'column',
        }}>
            <Typography variant={'h5'} marginLeft={'auto'} width={'40%'}>
                We also teach your child about the importance of substituting snacks and candy with fruits and vegetables.
            </Typography>
            <Typography variant={'h3'} color={theme.palette.secondary.main} marginBottom={'10px'}>
                View our sample menus:
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <TextToppedImage imagePath={'/sampleMenu1.jpg'} children={''} opacity={0}/>
                <Box sx={{width: '2vw'}}/>
                <TextToppedImage imagePath={'/sampleMenu2.jpg'} children={''} opacity={0}/>
                <Box sx={{width: '2vw'}}/>
                <TextToppedImage imagePath={'/sampleMenu3.jpg'} children={''} opacity={0}/>
                <Box sx={{width: '2vw'}}/>
                <TextToppedImage imagePath={'/sampleMenu4.jpg'} children={''} opacity={0}/>
            </Box>
        </Box>
    )
}

export default SampleMenuFrame;