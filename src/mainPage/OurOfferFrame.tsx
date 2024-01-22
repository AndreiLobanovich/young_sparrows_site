import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";


const OurOfferFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = (path: string) => {
        history.push(`/${path}`)
    }
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '80px',
            paddingLeft: isMobile ? '20px' : '73px',
            paddingRight: isMobile ? '20px' : '73px',
            paddingBottom: '73px',
            flexDirection: 'column',
        }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant={'h3'} width={'80%'}>
                        7:1 pupil-teacher ratio, ensuring your child gets the needed dedication
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant={'h2'} width={'80%'}>
                        We enforce strict safety and security measures. We believe each parent should enjoy
                        peace of mind after leaving their child at our facilities, or to our
                        experienced mini-bus driver.
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                     <Typography variant={'h3'} width={'80%'}>
                        Nutritious, home-cooked meals, prepared daily by our resident chef
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant={'h3'} width={'80%'}>
                        Book and eco clubs for parents, allowing you to get involved - if you want
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ flexGrow: 1 }} />
                <OrangeHighlightButton onClick={() => handleClick('approach')}>
                    APPROACH
                </OrangeHighlightButton>
            </Box>
        </Box>
    )
}

export default OurOfferFrame;