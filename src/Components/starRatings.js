
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSize({ rating, setRating }) {
  return (
    <Stack spacing={1}>
      <Rating
        name="size-medium"
        value={rating}
        max={10}
        onChange={(event, newValue) => {
          if (newValue !== null) {
            setRating(newValue);
          }
        }}
      />
    </Stack>
  );
}
