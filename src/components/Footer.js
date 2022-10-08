import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Footer = () => {
  return (
    <div>
      <Paper sx={{
        marginTop: 'calc(10% + 60px)',
        width: '100%',
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: 'gray',
      }} component="footer" square variant="outlined">
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my: 1
            }}>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}        >
            <Typography variant="caption" color="white">
              Copyright ©2022 Joseph Burns
            </Typography>
          </Box>
        </Container>
      </Paper>
    </div>
  )
}

export default Footer