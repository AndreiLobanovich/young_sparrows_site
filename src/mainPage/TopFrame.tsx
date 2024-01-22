import NavBar from "../elements/NavBar";
import BackgroundImage from "../elements/BackgroundImage";
import React from "react";
import {Box, Typography} from "@mui/material";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";
import theme from "../elements/Theme";


const TopFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = (path: string) => {
        history.push(`/${path}`)
    }
    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <BackgroundImage imageUrl='/homeBG.JPG'>
                <NavBar/>
                <Box sx={{height: '25vh'}}/>
                <Box sx={{mx: 'auto', textAlign: 'center', alignItems: 'center', width: 'fit-content', height:'100vh'}}>
                    <Typography variant={'h1'} sx={{
                        color: theme.palette.text.disabled,
                        lineHeight: 1.05
                    }}>
                        Give your child a <br/>head start in life
                    </Typography>
                    <Typography variant={'h3'} color={'white'} sx={{fontWeight: 700}}>
                        ✅ A world-leading primary school academic program <br/>
                        ✅ A multicultural, language-immersive environment <br/>
                        ✅ A comprehensive curriculum for holistic development
                    </Typography>
                    <Box sx={{height: '10vh'}}/>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <OrangeHighlightButton onClick={() => handleClick('enroll')}>
                            <Typography variant='h3' color={theme.palette.text.secondary}>
                                RESERVE A SPOT
                            </Typography>
                        </OrangeHighlightButton>
                        <Typography variant='h5' color={theme.palette.text.secondary}>
                            Limited slots available
                        </Typography>
                    </Box>
                </Box>
            </BackgroundImage>

        </Box>

    );
}

export default TopFrame;