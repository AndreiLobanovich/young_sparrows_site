import React from "react";
import theme from "../elements/Theme";
import {Box, Typography} from "@mui/material";
import ResizableImage from "../elements/ResizableImage";


const LangProgramFrame: React.FC = () => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            px: '73px'
        }}>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '40%'}}>
                <Typography variant={'h3'}>
                    Full-day<br/>language<br/>programs:
                </Typography>
                <Typography variant={'h2'}>
                    English<br/>Russian
                </Typography>
                <Box sx={{minHeight: '5vh'}}/>
                <Typography variant={'h3'}>
                    Weekly<br/>language<br/>lessons:
                </Typography>
                <Typography variant={'h2'}>
                    English<br/>German<br/>Serbian
                </Typography>
            </Box>
            <Box sx={{flexGrow: 1}}/>
            <Box
                sx={{
                    width: '40%',
                    borderRadius: '55px',
                    overflow: 'hidden',
                }}
            >
                <ResizableImage src={'/languageProgram.jpg'} />
            </Box>
        </Box>
    )
}

export default LangProgramFrame;