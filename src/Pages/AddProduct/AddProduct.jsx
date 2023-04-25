import { React, useContext, useState } from "react";
import { stateContext } from "../../Components/Context/Context";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";

import mobImg from "../../assets/images/mobile-img.jpg";

const AddProduct = () => {
  const { state, dispatch } = useContext(stateContext);
  console.log(state);

  const [prodname, setProdname] = useState(
    state.products.length > 0 ? state?.products[0].prodname : ""
  );
  const [description, setDescription] = useState(
    state.products.length > 0 ? state?.products[0].description : ""
  );
  const [price, setPrice] = useState(
    state.products.length > 0 ? state?.products[0].price : ""
  );
  const [qty, setQty] = useState(
    state.products.length > 0 ? state?.products[0].qty : ""
  );

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("allProducts")) || []
  );

  const handleInputChange = (e) => {
    if (e.target.name === "prodname") {
      setProdname(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    } else if (e.target.name === "qty") {
      setQty(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const setID = Date.now().toString();
    let addProdData = {
      prodID: setID,
      prodName: prodname,
      prodDesc: description,
      prodPrice: price,
      prodQty: qty,
      prodImg: mobImg,
    };

    setData([...data, addProdData]);

    localStorage.setItem("allProducts", JSON.stringify([...data, addProdData]));

    console.log(addProdData);
    dispatch({ type: "ADD_PRODUCT", payload: addProdData });

    setProdname("");
    setDescription("");
    setPrice("");
    setQty("");
  };

  return (
    <>
      <Typography variant="h4" align="center" padding={"30px 0"}>
        AddProduct
      </Typography>
      <Container maxWidth="lg">
        <Grid container justifyContent={"center"}>
          <Grid item xs={4}>
            <form onSubmit={handleSubmit}>
              <Box className="">
                <Stack spacing={3}>
                  <TextField
                    variant="filled"
                    name="prodname"
                    label="Product Name"
                    value={prodname}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="filled"
                    name="description"
                    label="Description"
                    value={description}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="filled"
                    name="price"
                    label="Price"
                    value={price}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="filled"
                    name="qty"
                    label="Quantity"
                    value={qty}
                    onChange={handleInputChange}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    onSubmit={handleSubmit}
                  >
                    Submit
                  </Button>
                </Stack>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddProduct;
