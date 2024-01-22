import React from "react";
import theme from "../elements/Theme";
import {Box, Typography} from "@mui/material";
interface SubjectCardProps {
    subjectName: string,
    imagePaths: string[],
    description: string,
}

const SubjectCard: React.FC<SubjectCardProps> = (
    {
        subjectName,
        imagePaths,
        description
    }
) => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: '73px'
        }}>
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='flex-start'
            >
                {imagePaths.map((imagePath) => {
                        return (
                            <img  width='100px' src={imagePath} alt={imagePath}/>
                        )
                    }
                )}
            </Box>
            <Typography variant={'h5'}>
                {subjectName}
            </Typography>
            <Typography variant={'h5'} fontWeight={400}>
                {description}
            </Typography>
        </Box>
    )
}

export default SubjectCard;