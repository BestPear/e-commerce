import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import NavbarProfile from "../components/NavbarProfile";
import Cards from "../components/Card";
import DisplayCreated from "../components/displayCreatedItem";
import ButtonBlue from "../components/ButtonBlue";
import InputNumber from "../components/InputNumber";
import Footer from "../components/Footer";

const Image = styled.img`
    width: 10em;
`;

const CenterImage = styled.img`
    width: 20em;
`;

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 40dvw;
    overflow-x: hidden;
    overflow-y: auto;
    height: 70dvh;
`;
const Name = styled.span`
    font-weight: 600;
`;
const Center = styled.div`
    margin-inline: 2rem;
    margin-block: 2rem;
    width: 30dvw;
    margin-inline: 5rem 0;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-inline: 2rem;
    margin-block: 2rem;
    width: 30dvw;
    margin-inline: 0;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Laptops() {
    const [list, setList] = useState([]);
    const [user, setUser] = useState("");
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3636/items/laptops").then(({ data }) => {
            setList(data.list);
        });
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

    function display(list) {
        setItem(list);
    }

    const moveToCart = () => {
        console.log(item);
        const itemToMove = {
            userId: user._id,
            items: {
                itemId: item._id,
                name: item.name,
                quantity: quantity,
                price: item.price
            },
            bill: quantity * item.price
        };
    };

    const handleChange = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <div>
            <NavbarProfile user={user} />
            <h1>Laptops</h1>
            <Container>
                <ListContainer>
                    {list.map((list) => {
                        return (
                            <Cards onClick={() => display(list)} key={list._id}>
                                <Image
                                    src="https://laptopmarket.gr/images/thumbnails/500/350/detailed/2/111.jpeg"
                                    alt={list.name}
                                />
                                <Name>{list.name}</Name>
                                {list.price} €
                            </Cards>
                        );
                    })}
                </ListContainer>
                <Wrapper>
                    <Center>
                        <CenterImage
                            src="https://laptopmarket.gr/images/thumbnails/500/350/detailed/2/111.jpeg"
                            alt={item.name}
                        />
                    </Center>
                    <Right>
                        <DisplayCreated>
                            <p> {item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.category}</p>
                            <p> {item.price}</p>
                            <InputNumber 
                                quantity={quantity}
                                handleChange={handleChange}
                            />
                            <ButtonBlue
                                moveToCart={moveToCart}
                            >Purchase</ButtonBlue>
                        </DisplayCreated>
                    </Right>
                </Wrapper>
            </Container>
            <Footer />
        </div>
    );
}

export default Laptops;
