import React from "react";
import theme from "./Theme";
import {Box, Typography, useMediaQuery} from "@mui/material";
import OrangeHighlightButton from "./OrangeHighlightButton";
import {useHistory} from "react-router-dom";

const EnrollFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = (path: string) => {
        history.push(`/${path}`)
    }
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '30px',
            px: isMobile ? '20px' : '73px',
            flexDirection: 'column',
        }}>
            <Box sx={{flexGrow: 3}}/>
            <Typography variant={'h2'} mx='auto'>
                Secure a spot at discounted pricing
            </Typography>
            <Box sx={{minHeight: '2vh'}}/>
            <Typography variant={'h3'}>
                Reserve your child's place in our September 2024 Year 1 and Year 2 classes before May and enjoy a
                5% Early Bird discount on the yearly tuition. Don't miss out - spots are filling up quickly!
            </Typography>
            <Box sx={{minHeight: '5vh'}}/>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
                <OrangeHighlightButton onClick={() => handleClick('enroll')}>
                    <Typography variant='h3'>
                        RESERVE A SPOT
                    </Typography>
                </OrangeHighlightButton>
                <Typography variant='h5' fontWeight={800}>
                    It only takes about 2 minutes!
                </Typography>
            </Box>
        </Box>
    )
}

export default EnrollFrame;