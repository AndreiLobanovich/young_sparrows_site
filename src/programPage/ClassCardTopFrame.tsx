import React from "react";
import theme from "../elements/Theme";
import {Box, Typography} from "@mui/material";
import TextToppedImage from "../elements/TextToppedImage";


const ClassCardTopFrame: React.FC = () => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: '73px'
        }}>
            <Typography variant={'h3'} color={theme.palette.secondary.main} width={'80%'}>
                Classes that spark creativity<br/> and nurture proper<br/> development
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ width: '30%'}}>
                    <TextToppedImage imagePath={'/card51.jpg'}>
                        <Typography variant={'h3'} color='white'>
                            Ballet and dancing
                        </Typography>
                    </TextToppedImage>
                    <Typography variant={'h1'} marginTop='10px'>
                        One of our most popular classes, in which rhythmic movement blends with storytelling to
                        enhance your child’s motor skills.<br/>The class is created by the renowned Konstantin
                        Kostyukov and led by Tamara Ivanović, the principal dancer of the Ballet of the Serbian
                        National Theater.
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ width: '30%', display: 'flex', flexDirection: 'column'}}>
                    <TextToppedImage imagePath={'/card52.jpg'}>
                        <Typography variant={'h3'} color='white'>
                            Music
                        </Typography>
                    </TextToppedImage>
                    <Typography variant={'h1'} marginTop='10px'>
                        No better way to master a language than to learn it from native-speaking
                        teachers at a young age.
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ width: '30%'}}>
                    <TextToppedImage imagePath={'/card53.jpg'}>
                        <Typography variant={'h3'} color='white'>
                            Pottery work
                        </Typography>
                    </TextToppedImage>
                    <Typography variant={'h1'} marginTop='10px'>
                        From karate to pottery, ballet to swimming - or pajama parties -
                        kids love our unique activities.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ClassCardTopFrame;