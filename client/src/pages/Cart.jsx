import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";

const Cart = () => {
    const [user, setUser] = useState("");

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
            <Footer />
        </>
    );
};

export default Cart;
