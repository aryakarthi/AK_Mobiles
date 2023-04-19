import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../../Components/Context/Context";
import "./MyCart.scss";

import {
  Stack,
  Typography,
  TextField,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const MyCart = () => {
  const { state, dispatch } = useContext(stateContext);
  const CartItems = state.cart;
  console.log(CartItems);

  

  const totalAmount = CartItems.reduce((total, item) => {
    return total + item.prodPrice * item.qty;
  }, 0);
  console.log(totalAmount);

  return (
    <>
      <Stack>
        <Typography variant="h4" align="center" padding={"20px 0"}>
          My Cart
        </Typography>
        <Container maxWidth="lg">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Price&nbsp;(Rs)</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total&nbsp;(Rs)</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {CartItems.map((item) => (
                  <TableRow
                    key={item.prodID}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={item.prodImg}
                        alt={item.prodName}
                        className="prod-img"
                      />
                    </TableCell>
                    <TableCell align="right">{item.prodName}</TableCell>
                    <TableCell align="right">{item.prodPrice}</TableCell>
                    <TableCell align="right">
                      <ButtonGroup variant="contained">
                        <Button
                          onClick={() => {
                            if (item.qty > 1) {
                              dispatch({ type: "DECREASE", payload: item });
                            } else {
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: item,
                              });
                            }
                          }}
                        >
                          -
                        </Button>

                        <TextField value={item.qty} disabled></TextField>
                        <Button
                          onClick={() => {
                            dispatch({ type: "INCREASE", payload: item });
                          }}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                    <TableCell align="right">{"Total"}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          })
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Stack>
    </>
  );
};

export default MyCart;
