import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarProfile from "../components/NavbarProfile";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import "./Cart.css";
import styled from "styled-components";

const CartPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-image: url("https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Cart = () => {
  const [user, setUser] = useState("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .post("http://localhost:3636/auth/verify", {
          token: localStorage.getItem("token"),
        })
        .then(({ data }) => {
          setUser(data);
        });
    }
  }, []);

  const currentUserList = list.filter((item) => item.userId === user._id);

  return (
    <>
      <NavbarProfile user={user} />
      <CartPage>
        {currentUserList.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <table className="cart-container">
            <tbody>
              <td>Product Name</td>
              <td>Unit Price</td>
              <td></td>
              <td>Quantity</td>
              <td>Total Price</td>
              <td></td>
              {currentUserList.map((item, index) => {
                return (
                  <CartItem
                    list={list}
                    setList={setList}
                    item={item}
                    key={index}
                  />
                );
              })}
              <tr className="total-amount">
                <td colSpan={4}>Total Amount</td>
                <td colSpan={2}>
                  {currentUserList.reduce((acc, current) => {
                    return acc + current.bill;
                  }, 0)}
                  €
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </CartPage>
      <Footer />
    </>
  );
};

export default Cart;
