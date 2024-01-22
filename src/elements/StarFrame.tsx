import React from "react";
import theme from "./Theme";
import {Box, Typography, useMediaQuery} from "@mui/material";
import ResizableImage from "./ResizableImage";

const StarFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            padding: '5%',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
                <Box width={isMobile ? '40px' : '80px'}>
                    <ResizableImage src='/star.svg'/>
                </Box>
                <Box width={'2vw'}/>
                <Box width={isMobile ? '40px' : '80px'}>
                    <ResizableImage src='/star.svg'/>
                </Box>
                <Box width={'2vw'}/>
                <Box width={isMobile ? '40px' : '80px'}>
                    <ResizableImage src='/star.svg'/>
                </Box>
                <Box width={'2vw'}/>
                <Box width={isMobile ? '40px' : '80px'}>
                    <ResizableImage src='/star.svg'/>
                </Box>
                <Box width={'2vw'}/>
                <Box width={isMobile ? '40px' : '80px'}>
                    <ResizableImage src='/star.svg'/>
                </Box>
            </Box>
            <Typography variant={'h3'} sx={{fontWeight: 400}} textAlign='center'>
                Young Sparrows international primary school has
            </Typography>
            <Typography variant={'h3'} sx={{fontWeight: 800}} textAlign='center'>
                a 5-star rating on Google.
            </Typography>
        </Box>
    );
}

export default StarFrame;