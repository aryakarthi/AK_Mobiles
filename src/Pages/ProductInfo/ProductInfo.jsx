import React from "react";

import mobImg from "../../assets/images/mobile-img.jpg";

import {
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  IconButton,
  Stack,
} from "@mui/material";

const ProductInfo = () => {
  return (
    <>
      <Typography variant="h4" align="center" padding={"20px 0"}>
        ProductInfo
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box component="img" src={mobImg} alt={"caption"} sx={{ height: "auto", width: "100%" }}></Box>

          </Grid>
          <Grid item xs={6}>
            <Stack padding={"20px"} spacing={3}>
              <Typography variant="h4">Name</Typography>
              <Typography variant="h5">1000</Typography>
              <Typography variant="body1">Sample</Typography>
              <Typography variant="body1">Sample</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductInfo;
