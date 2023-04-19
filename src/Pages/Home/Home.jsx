import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

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

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { stateContext } from "../../Components/Context/Context";

const Home = () => {
  const { state, dispatch } = useContext(stateContext);
  const ProductData = state.products;
  console.log("home state", state);

  const styles = {
    card: {
      maxWidth: "250",
    },
    media: {
      height: "100%",
      width: "100%",
      margin: "auto",
    },
  };

  return (
    <>
      <Stack className="home-container">
        <Typography variant="h4" align="center" padding={"20px 0"}>
          Home
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {ProductData.map((item) => (
              <Grid item xs={3} key={item.prodID}>
                <Box key={item.prodID}>
                  <Card style={styles.card}>
                    <CardMedia
                      style={styles.media}
                      className="prod-card-img"
                      component="img"
                      height="200"
                      image={item.prodImg}
                      alt={item.prodName}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="body1" component="div">
                        {item.prodName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.prodPrice}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Stack direction="row" spacing={1}>
                        <IconButton
                          onClick={() =>
                            dispatch({ type: "ADD_TO_FAV", payload: item })
                          }
                          color="primary"
                          aria-label="add to fav"
                        >
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton
                          onClick={() =>
                            dispatch({ type: "ADD_TO_CART", payload: item })
                          }
                          color="primary"
                          aria-label="add to shopping cart"
                        >
                          <AddShoppingCartIcon />
                        </IconButton>
                      </Stack>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default Home;
