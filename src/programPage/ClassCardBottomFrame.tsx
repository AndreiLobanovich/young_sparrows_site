import React from "react";
import theme from "../elements/Theme";
import {Box, Typography} from "@mui/material";
import TextToppedImage from "../elements/TextToppedImage";


const ClassCardBottomFrame: React.FC = () => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: '73px',
            py: '73px'
        }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ width: '30%'}}>
                    <TextToppedImage imagePath={'/card61.jpg'}>
                        <Typography variant={'h3'} color='white'>
                            Karate
                        </Typography>
                    </TextToppedImage>
                    <Typography variant={'h1'} marginTop='10px'>
                        Besides being the most fun of our lessons, karate improves your child’s strength,
                        coordination, precision, balance, and flexibility.<br/>Designed by the Gendarmerie karate
                        club and often led by the members of the national karate team, the age-appropriate class
                        promotes a healthy view of competitiveness.
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ width: '30%', display: 'flex', flexDirection: 'column'}}>
                    <TextToppedImage imagePath={'/card62.jpg'}>
                        <Typography variant={'h3'} color='white'>
                            Swimming (Optional)
                        </Typography>
                    </TextToppedImage>
                    <Typography variant={'h1'} marginTop='10px'>
                        An activity that develops all crucial muscle groups - while building endurance and strength.
                        Held by professional tutors who keep a watchful eye on what is going on in and around the
                        pool at all times.
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ width: '30%'}}>
                    <TextToppedImage imagePath={'/card63.jpg'}>
                        <Typography variant={'h3'} color='white'>
                            Yoga (Optional)
                        </Typography>
                    </TextToppedImage>
                    <Typography variant={'h1'} marginTop='10px'>
                        An increasingly popular class aims to help your child become more focused and flexible,
                        in addition to learning about the proper breathing techniques.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ClassCardBottomFrame;