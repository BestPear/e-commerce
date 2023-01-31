import React, { useState } from "react";

const CartItem = ({ item, list, setList }) => {
    const [quantity, setQuantity] = useState(item.items.quantity);

    const handleClick = (e) => {
        const newList = list.filter(item => item.items.itemId !== e.target.id);
        localStorage.setItem("shoppingList", JSON.stringify(newList));
        setList(newList);
    };
    return (
        <tr className="item-container">
            <td>{item.items.name}</td>
            <td>{item.items.price}€</td>
            <td>x</td>
            <td>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </td>
            <td>{item.bill}€</td>
            <td>
                <button id={item.items.itemId} onClick={handleClick}>
                    x
                </button>
            </td>
        </tr>
    );
};

export default CartItem;
