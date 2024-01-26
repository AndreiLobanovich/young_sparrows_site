import {Grid, Typography} from "@mui/material";
import TextToppedImage from "../elements/TextToppedImage";
import React from "react";

export interface Card {
    imagePath: string;
    text: string;
    description: string;
}

export const renderCards = (cards: Card[]) => {
    return cards.map(card => (
        <Grid item key={card.imagePath} xs={12} sm={6} md={4}>
            <TextToppedImage imagePath={card.imagePath}>
                {card.text}
            </TextToppedImage>
            <Typography variant={'h5'} marginTop='10px' overflow='hidden'>
                {card.description}
            </Typography>
        </Grid>
    ));
};

