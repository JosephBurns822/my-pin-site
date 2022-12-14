import Header from '../components/Header'
import Footer from '../components/Footer'
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Store } from '@mui/icons-material';

const HomePage = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const theme = createTheme();

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Ctrl-Alt-Pin
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                A collection of pins that are ever-growing. You can set up a trade or purchase
                request in the store!
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/Store">Store</Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to="/faq">FAQ</Button>
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="https://cdn.shopify.com/s/files/1/0602/7083/7955/products/S215b636a2b304ae28d5c9378eeec01a2F_780x620.jpg?v=1655316558"
                      alt="leafeon"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Leafeon
                      </Typography>
                      <Typography>
                        Leafeon Pin Placeholder for own showcase pins
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Purchase</Button>
                      <Button size="small">Trade</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}



export default HomePage