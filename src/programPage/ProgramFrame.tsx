import React from "react";
import {Box, Button, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import {program} from './program';
import SubjectCard from "../elements/SubjectCard";

const ProgramFrame: React.FC = () => {
    const [year, setYear] = React.useState<string>('year1')
    const [animate, setAnimate] = React.useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const textColor = theme.palette.text
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
    return (
        <Box
            display='flex'
            flexDirection='column'
            px={isMobile ? '20px' : '73px'}
        >
            <Typography variant='h2' mx='auto' textAlign='center'>
                A well-balanced education for<br/> unparalleled student engagement
            </Typography>
            <Typography variant='h3' fontWeight={400}>
                Our selection of mandatory and optional subjects, and student clubs delivers robust
                educational foundations for children ages 5 to 11.
            </Typography>
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-evenly'
                my='5vh'
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
                    onClick={handleClick}
                    sx={{
                        borderRadius: '53px',
                        backgroundColor: year === 'year2' ? textColor.disabled : textColor.secondary,
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        '&:hover': {backgroundColor: year === 'year2' ? textColor.disabled : textColor.secondary},
                    }}
                >
                    <Typography
                        variant='h3'
                        color={year === 'year2' ? textColor.secondary : textColor.disabled}
                        sx={{transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'}}
                    >
                        Year 2
                    </Typography>
                </Button>
            </Box>
            <Grid
                overflow='hidden'
                container
                border={'3px solid ' + textColor.disabled}
            >
                {program[year].map((subject) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            md={4}
                            sx={{
                                opacity: animate ? 0 : 1,
                                transition: 'opacity 0.3s ease-in-out'
                            }}
                        >
                            <Box
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center'
                                p='1vh'
                                px={"0px"}
                            >
                                <SubjectCard
                                    subjectName={subject.name}
                                    description={subject.description}
                                    imagePaths={subject.imageUrls}
                                />
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
            {year === 'year2' &&
                <Grid
                    container
                    mt='20px'
                    border={'3px solid ' + textColor.disabled}
                    overflow='hidden'
                >
                    {program['clubs'].map((subject) => {
                        return (
                            <Grid item xs={12} md={4}>
                                <Box
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='center'
                                    alignItems='center'
                                    p='1vh'
                                >
                                    <SubjectCard
                                        subjectName={subject.name}
                                        description={subject.description}
                                        imagePaths={subject.imageUrls}
                                    />
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>}
            <Typography variant='h3' mt='10vh'>
                Parents, welcome! 👋
            </Typography>
            <Typography variant='h3' fontWeight={400}>
                <br/>
                In addition to participating in our book and eco clubs, we invite parents to get involved as much as
                their schedules allow.<br/><br/>
                We encourage you to discuss the progress reports with one of our dedicated teachers, share your thoughts
                and ideas, and express any special requirement your child might benefit from.
            </Typography>
        </Box>
    )
}

export default ProgramFrame;