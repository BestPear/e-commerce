import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";

const Cart = () => {
    const [user, setUser] = useState("");
    const [list, setList] = useState(JSON.parse(localStorage.getItem("shoppingList")) || []);

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
    return (
        <>
            <NavbarProfile user={user} />
            {list.length === 0 ? <h1>Your cart is empty</h1> : 
            (list.map((e, i) => {
                return (
                    <li key={i}>
                        {e.items.name} -- * {e.items.quantity} =={e.items.price}
                    </li>
                );
            }))
            }
            <Footer />
        </>
    );
};

export default Cart;
