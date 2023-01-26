import styled from 'styled-components';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Container = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
background-color: black;
width: 100%;
height: 10vh;
padding: 0 2rem;
color: white;
`

const Logo = styled.div`
font-size: 1.5em;
`

const List = styled.ul `
display: flex;
flex: 2;
list-style: none;
padding-inline: 0 3rem;
`
const ListItem = styled.li `
padding-inline: 1rem;
font-size: 1.3em;
cursor: pointer;
&:hover {
 color: orange;
}
`

function Navbar () {
  const navigate = useNavigate();

  return ( <Container>
    <Logo>Electronics Shop</Logo>
    <div>
      <List>
        <ListItem onClick={()=> {navigate("/auth/register")}}>Register</ListItem>
        <ListItem onClick={()=> {navigate("/auth/login")}}>Login</ListItem>
        <ListItem> <HiOutlineShoppingCart/> </ListItem>
      </List>
    </div>
    
  </Container> );
}

export default Navbar ;