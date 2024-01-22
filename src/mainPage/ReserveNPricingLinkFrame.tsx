import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";
import ResizableImage from "../elements/ResizableImage";


const ReserveNPricingLinkFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = (path: string) => {
        history.push(`/${path}`)
    }
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                paddingLeft: isMobile ? '20px' : '73px',
                paddingRight: isMobile ? '20px' : '73px',
                flexDirection: 'column',
            }}
            my='5vh'
        >
            <Typography variant='h2' mx='auto' my='5vh'>
                A pathway to future success
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Typography variant={'h3'} width={'80%'} fontWeight={400}>
                        “At Young Sparrows, we collaborate with families to nurture each child's growth. Our goal is to
                        guide them into becoming confident, responsible, reflective, innovative, and engaged young
                        individuals."<br/><br/>

                        Our Cambridge International School programs lay exceptional foundations for future education.
                        They are tailored to discover your child’s unique talents, teaching resilience through
                        challenges and framing setbacks as vital steps towards growth and success.”<br/><br/>

                        Anna Poletaeva,<br/>
                        Director of Young Sparrows international primary school
                    </Typography>
                </Grid>
                <Grid item xs={4} order={isMobile ? -1 : 1}>
                    <ResizableImage src={'/homePage/director.jpeg'}/>
                </Grid>
            </Grid>

            <Box mt='5vh' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Box>
                    <OrangeHighlightButton onClick={() => handleClick('our-program')}>
                        <Typography variant='h3' color={theme.palette.text.secondary}>
                            PROGRAM
                        </Typography>
                    </OrangeHighlightButton>
                </Box>
                <Box>
                    <OrangeHighlightButton onClick={() => handleClick('pricing')}>
                        <Typography variant='h3' color={theme.palette.text.secondary}>
                            PRICING
                        </Typography>
                    </OrangeHighlightButton>
                </Box>
            </Box>
        </Box>
    )
}


export default ReserveNPricingLinkFrame;