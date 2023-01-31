import React from "react";

const CartItem = ({ item }) => {

    // console.log(item);
    return (
        <tr className="item-container">
            <td>{item.items.name}</td>
            <td>{item.items.price}€</td>
            <td>x</td>
            <td>{item.items.quantity}</td>
            <td>{item.bill}€</td>
        </tr>
    );
};

export default CartItem;
