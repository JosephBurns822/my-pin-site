import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PinCard = () => {
  const [pinData, setPinData] = React.useState(null)

  // React.useEffect(() => {
  //   setPinData(() => pinData.map(data))
  // })

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn.shopify.com/s/files/1/0602/7083/7955/products/S215b636a2b304ae28d5c9378eeec01a2F_780x620.jpg?v=1655316558"
          alt="leafeon pin"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Leafeon
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Leafeon Pin Placeholder for own showcase pins
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>);
}

export default PinCard