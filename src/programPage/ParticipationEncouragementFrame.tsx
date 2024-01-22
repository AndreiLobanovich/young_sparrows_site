import React from "react";
import theme from "../elements/Theme";
import {Box, Typography} from "@mui/material";
import ResizableImage from "../elements/ResizableImage";


const ParticipationEncouragementFrame: React.FC = () => {
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: '73px',
            py: '73px'
        }}>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '70%', marginLeft: 'auto'}}>
                <Box height={'50%'} overflow={'hidden'}>
                    <ResizableImage src={'/participationEncoragement.png'} />
                </Box>
                <Box sx={{minHeight: '2vh'}}/>
                <Typography variant={'h2'}>
                    Apart from being able to participate in our book and eco clubs or join our field trips, we
                    encourage you to express any special requirement your child might benefit from.
                </Typography>
                <Box sx={{minHeight: '3vh'}}/>
                <Typography variant={'h2'}>
                    We also invite you to get in touch as often as you’d like, whether to discuss the progress
                    reports or chat with one of our dedicated staff members.
                </Typography>
            </Box>
        </Box>
    )
}

export default ParticipationEncouragementFrame;