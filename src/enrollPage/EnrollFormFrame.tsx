import React, {useState} from 'react';
import {
    Box,
    TextField,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel, Typography, useMediaQuery, Grid
} from '@mui/material';
import theme from "../elements/Theme";
import emailjs from '@emailjs/browser';
import OrangeHighlightButton from "../elements/OrangeHighlightButton";


const EnrollFormFrame: React.FC = () => {

    const [formValues, setFormValues] = useState({
        childName: '',
        childGender: '',
        childBirthday: '',
        parentName: '',
        phone: '',
        email: '',
        comments: '',
        educationLevel: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    };
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.init('0VR9T4-49oj__IUhF')
        emailjs.sendForm(
            'service_xq5kl2c',
            'template_l1gjrmc',
            event.currentTarget,
            '0VR9T4-49oj__IUhF')
            .then(() => {
                setIsSubmitted(true)
            })
    };
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const lines = [
        '✅ A world-leading primary school academic program',
        '✅ A multicultural, language-immersive environment',
        '✅ A comprehensive curriculum for holistic development'
    ]
    return (
        <Box
            padding={isMobile ? '10px' : '73px'}
            sx={{
                display: 'flex',
                flexDirection: 'column',

                backgroundColor: theme.palette.primary.main,
                alignItems: 'center',

            }}>
            <Grid xs={12} spacing={5} container flexDirection='row' display='flex' my='5vh'>
                {lines.map((line, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Typography variant={'h3'}>
                                {line}
                            </Typography>
                        </Grid>
                    )
                )}
            </Grid>
            <Typography variant={'h3'} sx={{color: theme.palette.text.disabled}} textAlign='center' gutterBottom>
                Fill out and submit the form below. We’ll get back to you within two business days.
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: 4,
                    border: `5px solid ${theme.palette.secondary.main}`,
                    width: {sm: '80%', xs: '100%'},
                    '& .MuiTextField-root': {
                        margin: '8px 0',
                        '&.Mui-focused': {
                            color: 'black', // or any color you want for the focused state
                        },
                    },
                    '& .MuiButton-root': {marginTop: '16px'},
                    '& .MuiFormControlLabel-root': {display: 'block', margin: '8px 0'},
                    '& .MuiRadio-root': {
                        color: theme.palette.secondary.main,
                        '&.Mui-checked': {
                            color: theme.palette.secondary.main,
                        },
                        '&.Mui-focused': {
                            color: 'black', // or any color you want for the focused state
                        },
                    },
                    '& .MuiTypography-root': {
                        color: theme.palette.text.primary,
                    },
                    '& .MuiInputBase-input': {
                        color: theme.palette.text.primary,
                    },
                    '& .MuiFormLabel-root': {
                        color: theme.palette.text.primary,
                        '&.Mui-focused': {
                            color: theme.palette.text.primary,
                        },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.secondary.main,
                    },
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.secondary.main,
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.secondary.main,
                    },
                }}
            >
                <TextField
                    fullWidth
                    name="childName"
                    label="Your child's full name"
                    variant="outlined"
                    value={formValues.childName}
                    onChange={handleInputChange}
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Your child's gender</FormLabel>
                    <RadioGroup row name="childGender" onChange={handleRadioChange}>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    </RadioGroup>
                </FormControl>
                <TextField
                    fullWidth
                    name="childBirthday"
                    label="Your child's birthday"
                    variant="outlined"
                    value={formValues.childBirthday}
                    onChange={handleInputChange}
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Education Level</FormLabel>
                    <RadioGroup name="educationLevel" onChange={handleRadioChange}>
                        <FormControlLabel
                            value="Year 1*(5-6-year-olds)"
                            control={<Radio/>}
                            label="Year 1*(5-6-year-olds)"
                        />
                        <FormControlLabel
                            value="Year 2*(6-7-year-olds)"
                            control={<Radio/>}
                            label="Year 2*(6-7-year-olds)"
                        />
                    </RadioGroup>
                </FormControl>
                <TextField
                    fullWidth
                    name="parentName"
                    label="Your full name"
                    variant="outlined"
                    value={formValues.parentName}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    name="phone"
                    label="Your phone"
                    variant="outlined"
                    value={formValues.phone}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    name="email"
                    label="Your email"
                    variant="outlined"
                    value={formValues.email}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="comments"
                    label="Special requirements or comments"
                    variant="outlined"
                    value={formValues.comments}
                    onChange={handleInputChange}
                />
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    {!isSubmitted ? (
                        <OrangeHighlightButton type="submit">
                            <Typography variant='h3' color={'white'}>
                                SUBMIT
                            </Typography>
                        </OrangeHighlightButton>
                    ) : (<Typography variant={'h3'}>Thank you for your submission!</Typography>)}
                </Box>
            </Box>
        </Box>
    )
}

export default EnrollFormFrame;