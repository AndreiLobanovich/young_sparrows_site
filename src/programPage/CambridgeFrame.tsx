import React from "react";
import {Box, Typography} from "@mui/material";
import theme from "../elements/Theme";
import ResizableImage from "../elements/ResizableImage";

const CambridgeFrame: React.FC = () => {
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            padding: '73px'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '45%'
                }}>
                    <Typography variant={'h2'} sx={{fontWeight: 700}}>
                        Continental Europe’s only
                        kindergarten and nursery with
                        Cambridge International School
                        Early Years certification.
                    </Typography>
                    <Typography variant={'navButtonText'} sx={{ fontWeight: 400}}>
                        Educational program accredited and certified by
                        the Ministry of Education of the Republic of Serbia.
                    </Typography>
                </Box>
                <Box sx={{width: '30%'}}>
                    <ResizableImage src={'/cambridge.png'} />
                    <ResizableImage src={'/minProsvete.png'} />
                </Box>
            </Box>
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%'
                }}>
                    <Typography
                        variant={'h3'}
                        sx={{
                            color: theme.palette.secondary.main,
                            lineHeight: '1.2'
                        }}>
                        Our programs are designed to help your child:
                    </Typography>

                </Box>
            </Box>
        </Box>
    )
}

export default CambridgeFrame;