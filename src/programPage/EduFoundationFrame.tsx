import React from "react";
import theme from "../elements/Theme";
import {Box, Typography} from "@mui/material";


const EduFoundationFrame: React.FC = () => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: '73px',

        }}>
            <Typography variant={'h3'}>
                An all-around educational<br/> foundation
            </Typography>
            <Box sx={{minHeight: '5vh'}}/>
            <Typography variant={'h2'}>
                Other than playing outside or engaging in<br/>
                stimulating conversations, your child learns basic<br/>
                literacy, writing, and math in accordance with the<br/>
                world-leading Cambridge Early Years program.
            </Typography>
            <Box sx={{minHeight: '5vh'}}/>
            <Typography variant={'h2'}>
                At our kindergarten, children also learn how to<br/>
                behave in traffic, staying aware of the<br/>
                surroundings. It’s just a fragment of how our<br/>
                educational programs build the foundations of<br/>
                your child’s future success - through play.
            </Typography>
            <Box sx={{flexGrow: 1}}/>
            <Typography variant={'h3'} color={theme.palette.secondary.main} textAlign={'right'}>
                Parents, welcome!
            </Typography>
        </Box>
    )
}

export default EduFoundationFrame;