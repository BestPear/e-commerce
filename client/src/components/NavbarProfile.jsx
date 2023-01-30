import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ButtonOrange from "../components/ButtonOrange";

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

  margin-block: 0.5rem 0;
  font-size: 1.3em;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;

function NavbarProfile(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  async function logOutUser() {
    await axios.get("http://localhost:3636/auth/logout");
    setUser(null);
    navigate("/auth/login");
  }

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
        <List>
          <ListItem>Welcome {props.user.username} </ListItem>
          
          <ListItem>
            {" "}
            <HiOutlineShoppingCart
              onClick={() => {
                navigate("/profile/cart");
              }}
            />{" "}
          </ListItem>
          <ListItem>
          <ButtonOrange
          onClick={() => {
            logOutUser();
          }}
        >
          Log Out
        </ButtonOrange>
        </ListItem>
        </List>

      </div>
    </Container>
  );
}

export default NavbarProfile;
