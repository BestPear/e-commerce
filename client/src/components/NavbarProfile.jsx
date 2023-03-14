import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    width: 100%;
    height: 10vh;
    padding: 0 2rem;
    color: white;
`;

const Logo = styled.div`
    font-size: 1.5em;
    cursor: pointer;
`;

const List = styled.ul`
    display: flex;
    flex: 2;
    list-style: none;
    padding-inline: 0 3rem;
`;
const ListItem = styled.li`
    padding-inline: 1rem;
    font-size: 1.3em;
    cursor: pointer;
    &:hover {
        color: orange;
    }
`;
const ButtonAdmin = styled.button`
    width: 5rem;
    margin-block: 0;
    margin-inline: 1rem;
    font-size: 1.2rem;
    background-color: #dc7300;
    border-radius: 5px;
    transition: 0s background-color;

    cursor: pointer;
    &:hover {
        background-color: #e05404;
        transition-delay: 0.1s;
    }
    &:active {
        background-color: #7f1917;
    }
`;

function NavbarProfile(props) {
    const navigate = useNavigate();

    return (
        <Container>
            <Logo
                onClick={() => {
                    navigate("/profile");
                }}
            >
                Electronics Shop
            </Logo>
            <div>
                {/*  */}

                {props.user.role !== "admin" ? (
                    <List>
                        <ListItem>Welcome {props.user.username}</ListItem>
                        <ListItem>
                            {" "}
                            <HiOutlineShoppingCart
                                onClick={() => {
                                    navigate("/profile/cart");
                                }}
                            />
                        </ListItem>
                        <ListItem
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/");
                            }}
                        >
                            Log Out
                        </ListItem>
                    </List>
                ) : (
                    <List>
                        <ListItem>Welcome {props.user.username}</ListItem>
                        <ListItem>
                            {" "}
                            <HiOutlineShoppingCart
                                onClick={() => {
                                    navigate("/profile/cart");
                                }}
                            />{" "}
                        </ListItem>
                        <ListItem
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/");
                            }}
                        >
                            Log Out
                        </ListItem>
                        <ButtonAdmin
                            onClick={() => {
                                navigate("/profile/admin");
                            }}
                        >
                            ADMIN
                        </ButtonAdmin>
                    </List>
                )}

                {/*  */}
            </div>
        </Container>
    );
}

export default NavbarProfile;
