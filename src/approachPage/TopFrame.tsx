import NavBar from "../elements/NavBar";
import React from "react";
import {Box, Typography} from "@mui/material";
import theme from "../elements/Theme";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";


const TopFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = () => {
        history.push('/enroll')
    }
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            px: '73px',
            py: '73px',
            backgroundColor: theme.palette.primary.main,
            alignItems: 'center',
        }}>
            <Box sx={{width: '100%'}}>
                <NavBar textColor={'#000000'}/>
            </Box>
            <Box sx={{height: '30vh'}}/>
            <Box textAlign='center'>
                <Typography variant={'h1'} gutterBottom sx={{
                    color: theme.palette.text.disabled,
                    lineHeight: 1
                }}>
                    Learning, as it should be
                </Typography>
                <Typography variant={'h3'} color='black' sx={{fontWeight: 700}}>
                    Cultivating curiosity, creativity, and independent thinking in an inclusive<br/> environment
                    - we set cornerstones for lifelong growth.
                </Typography>
            </Box>
            <Box sx={{height: '10vh'}}/>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <OrangeHighlightButton onClick={() => handleClick()}>
                    <Typography variant='h3' color={theme.palette.text.secondary}>
                        RESERVE A SPOT
                    </Typography>
                </OrangeHighlightButton>
                <Typography variant='h5'>
                    Limited slots available
                </Typography>
            </Box>
        </Box>
    );
}

export default TopFrame;