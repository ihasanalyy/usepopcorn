import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSize({ rating, setRating }) {
    return (
        <Stack spacing={1}>
            <Rating
                name="size-medium"
                defaultValue={0} max={10}
                onChange={(event, newValue) => (setRating(newValue))} />
        </Stack>
    );
}
