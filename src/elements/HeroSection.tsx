import React, {ReactNode} from 'react';
import {Box, Typography} from '@mui/material';
import {useHistory} from 'react-router-dom';
import NavBar from '../elements/NavBar';
import BackgroundImage from '../elements/BackgroundImage';
import OrangeHighlightButton from '../elements/OrangeHighlightButton';
import theme from '../elements/Theme';

interface HeroSectionProps {
    mainTitle: ReactNode;
    secondaryTitle: ReactNode;
    buttonText?: string;
    underButtonText?: string;
    buttonOnClickPath?: string;
    backgroundImageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = (
    {
        mainTitle,
        secondaryTitle,
        buttonText,
        buttonOnClickPath,
        backgroundImageUrl,
        underButtonText
    }
) => {
    let history = useHistory();
    const handleClick = (path?: string) => {
        if (path) {
            history.push(`/${path}`);
        }
    };
    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <BackgroundImage imageUrl={backgroundImageUrl}>
                <NavBar/>
                <Box
                    sx={{
                        mx: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 'fit-content',
                        height: '100vh'
                    }}
                >
                    <Typography variant={'h1'} gutterBottom sx={{
                        color: theme.palette.text.disabled,
                        lineHeight: 1.05
                    }}>
                        {mainTitle}
                    </Typography>
                    <Typography variant={'h3'} color={'white'} sx={{fontWeight: 700}}>
                        {secondaryTitle}
                    </Typography>
                    {buttonText && buttonOnClickPath && (
                        <Box sx={{height: '10vh'}}/>
                    )}
                    {buttonText && buttonOnClickPath && (
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <OrangeHighlightButton onClick={() => handleClick(buttonOnClickPath)}>
                                <Typography variant='h3' color={theme.palette.text.secondary}>
                                    {buttonText}
                                </Typography>
                            </OrangeHighlightButton>
                            <Typography variant='h5' color={theme.palette.text.secondary}>
                                {underButtonText}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </BackgroundImage>
        </Box>
    );
}

export default HeroSection;
