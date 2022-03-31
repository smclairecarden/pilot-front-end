import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const labels = {
  1: 'Beginner',
  2: 'Novice',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Pro',
};

export default function HoverRating() {
  const [value, setValue] = React.useState();
  const [hover, setHover] = React.useState(2);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
    <Rating
      name="hover-feedback"
      value={value}
      precision={1}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      onChangeActive={(event, newHover) => {
        setHover(newHover);
      }}
      emptyIcon={<StarOutlineIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}