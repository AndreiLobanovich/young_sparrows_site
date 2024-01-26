import React, {useState} from "react";
import {Box, Button, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import {pricing} from "./pricing";

const PricingFrame: React.FC = () => {
    let [year, setYear] = useState('year1')
    const [animate, setAnimate] = useState(false);
    const textColor = theme.palette.text;
    const handleClick = () => {
        setAnimate(true);
        const timer = setTimeout(() => {
            setAnimate(false);
            if (year === 'year1') {
                setYear('year2')
            } else {
                setYear('year1')
            }
        }, 300)
        return () => clearTimeout(timer);
    }
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            padding: isMobile ? '20px' : '73px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Typography variant='h3' mx='auto' textAlign='center' gutterBottom>
                Our Cambridge Primary English-speaking package
            </Typography>
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-evenly'
            >
                <Button
                    sx={{
                        borderRadius: '53px',
                        backgroundColor: year === 'year1' ? textColor.disabled : textColor.secondary,
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        '&:hover': {backgroundColor: year === 'year1' ? textColor.disabled : textColor.secondary},
                    }}
                    onClick={handleClick}
                >
                    <Typography
                        variant='h3'
                        color={year === 'year1' ? textColor.secondary : textColor.disabled}
                        sx={{transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'}}
                    >
                        Year I
                    </Typography>
                </Button>
                <Button
                    sx={{
                        borderRadius: '53px',
                        backgroundColor: year === 'year2' ? textColor.disabled : textColor.secondary,
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        '&:hover': {backgroundColor: year === 'year2' ? textColor.disabled : textColor.secondary}
                    }}
                    onClick={handleClick}
                >
                    <Typography
                        variant='h3'
                        color={year === 'year2' ? textColor.secondary : textColor.disabled}
                        sx={{transition: 'color 0.3s ease-in-out'}}
                    >
                        Year 2
                    </Typography>
                </Button>
            </Box>
            <Typography variant='h3' mx='auto'>
                {year === 'year1' ? 'Year 1* (5-to-6-year-olds)' : 'Year 2* (6-to-7-year-olds)'}
            </Typography>
            <Typography variant='h5' mx='auto' textAlign='center' gutterBottom>
                {year === 'year1' ?
                    '*equivalent to Cambridge Early Years 3 and Cambridge Primary Stage 1' :
                    '*equivalent to Cambridge Primary Stage 2'}
            </Typography>
            <Box display='flex' justifyContent='center'>
                <Grid
                    container
                    spacing={2}
                    justifyContent='center'
                    sm={8}
                    xs={12}
                    sx={{opacity: animate ? 0 : 1, transition: 'opacity 0.3s ease-in-out'}}
                >
                    {Object.values(pricing[year]).map((price, index) => (
                        <Grid item xs={12} md={6} key={index} alignItems='center' justifyContent='center'>
                            <Typography variant="h3">{price.title}</Typography>
                            {price.text.map((line, lineIndex) => (
                                <Typography variant='h5' fontWeight={400}>{line}</Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box mx='auto' display='flex' flexDirection='row' mt='5vh'>
                <Typography variant='h3' fontWeight={400}>
                    Yearly tuition value:
                </Typography>
                <Typography variant='h3' color={textColor.disabled}>
                    &nbsp;{year === 'year1' ? '7.500' : '8.700'} EUR
                </Typography>
            </Box>
            <Typography variant='h5' mx='auto' fontWeight={400} textAlign='center' mb='5vh'>
                👉 No hidden or application fees<br/>
                👉 A 5% discount for yearly advance payments<br/>
                👉 A 5% discount for siblings<br/>
                👉 Tuition can be paid by a legal entity
            </Typography>
            <Typography variant='h3' mx='auto' gutterBottom>
                Optional fees (per month):
            </Typography>
            <Box display='flex' justifyContent='center' width='100%'>
                <Grid container spacing={{md: 12, xs: 2}} justifyContent='center' sm={8} xs={12}>
                    {Object.values(pricing[year === 'year1' ? 'optional1' : 'optional2']).map((price, index) => (
                        <Grid item xs={12} md={4} key={index} alignItems='center' justifyContent='center'>
                            <Typography variant="h5">{price.title}</Typography>
                            {price.text.map((line, lineIndex) => (
                                <Typography variant='h5' fontWeight={400}>{line}</Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>

    )
}

export default PricingFrame;
