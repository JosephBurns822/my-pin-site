import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PinCard from './PinCard';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PinGrid = () => {
  const [gridFlow, setGridFlow] = React.useState(null)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className="theGrid" container spacing={2}>
        <Grid item xs={3}>
          <Item><PinCard /></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><PinCard /></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><PinCard /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PinGrid
