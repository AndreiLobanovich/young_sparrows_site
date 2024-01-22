import React from "react";
import theme from "../elements/Theme";
import {Box, Typography} from "@mui/material";
import ResizableImage from "../elements/ResizableImage";

const FoodFrame: React.FC = () => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '23px',
            paddingLeft: '73px',
            paddingRight: '73px',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <ResizableImage src={'canteen.png'}/>
            <Box sx={{height: '1vh'}}/>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography variant={'h5'} width={'30%'} fontWeight={700}>
                    A resident chef prepares healthy and delicious meals every day<br/> Approved by a nutrition expert
                </Typography>
                <Box sx={{flexGrow: 1}}/>
                <Typography variant={'h5'} width={'30%'} fontWeight={700}>
                    The freshest ingredients, half of which are homegrown in a nearby village
                </Typography>
                <Box sx={{flexGrow: 1}}/>
                <Typography variant={'h5'} width={'30%'} fontWeight={700}>
                    Menus based on fish, chicken, veal, vegetables, and fruit
                </Typography>

            </Box>
        </Box>
    )
}

export default FoodFrame;