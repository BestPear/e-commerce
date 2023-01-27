import React, {useState, useEffect} from "react";
import axios from "axios";
import NavbarProfile from "../components/NavbarProfile";

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
    <NavbarProfile user={user}/>
    );
};

export default Cart;
