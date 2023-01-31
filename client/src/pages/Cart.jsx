import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarProfile from "../components/NavbarProfile";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import "./Cart.css";

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
            {currentUserList.length === 0 ? (
                <h1>Your cart is empty</h1>
            ) : (
                <table className="cart-container">
                    <tbody>
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
                        <tr>
                            <td colSpan={4}>Total</td>
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
            <Footer />
        </>
    );
};

export default Cart;
