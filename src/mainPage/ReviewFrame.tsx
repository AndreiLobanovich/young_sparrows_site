import React from "react";
import {Box, Typography} from "@mui/material";
import theme from "../elements/Theme";


const ReviewFrame: React.FC = () => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '30px',
            paddingLeft: '73px',
            paddingRight: '73px',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', marginBottom: '10px'}}>
                <Typography variant={'h3'} color={theme.palette.primary.main}>
                    Why parents like us
                </Typography>
                <Box sx={{flexGrow: 1}}/>
                <Typography variant={'h3'} color={theme.palette.primary.main}>
                    and children love us
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '49%'
                }}
                     borderRadius={'55px'}
                     p={2}
                     border={5}
                     borderColor="orange"
                >
                    <Typography variant={'h5'} fontWeight={700}>
                        “Hand-selected, dedicated teachers”
                    </Typography>
                    <Typography variant={'h5'}>
                        Our youngest sparrows absorb languages and basic life skills through a myriad of playful
                        and engaging activities. In small groups where one teacher takes care of up to four pupils,
                        your child can grow in a safe and comforting environment.
                    </Typography>
                    <Typography variant={'h5'} fontWeight={700}>
                        Magdalena Bakovitz, <br/>
                        Nikolas (6 y.o), Nina(4 y.o.)
                    </Typography>
                </Box>
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '49%'
                }}
                     borderRadius={'55px'}
                     p={2}
                     border={5}
                     borderColor="orange"
                >
                    <Typography variant={'h5'} fontWeight={700}>
                        “Our little one loves going there”
                    </Typography>
                    <Typography variant={'h5'}>
                        “Little Sparrows not only offers a family-like environment but also keeps professionalism
                        at a very high level while promoting the independence of the children. The long
                        working hours allow both parents lots of flexibility. The huge variety of activities
                        during kindergarten time allows us to spend extra quality time with our child. Another
                        huge plus is that we can choose between Russian and English classes, with the possibility
                        of additional German or Chinese classes. Most of the staff are native speakers, something
                        that you can’t easily find. They are very attentive and responsive, our little one loves
                        going there and we love it too!”
                    </Typography>
                    <Typography variant={'h5'} fontWeight={700}>
                        Galini Papadopoulou, mom of <br/>
                        Nefeli (4 years old) and Leonie (1 year old)
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ReviewFrame;