import styled from "styled-components";

const Container = styled.div`
position:absolute;
left:0;
bottom:0;
right:0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 8vh;
  font-size: 1.1rem;
  background-color: black;
  color: white;
  text-align: left;
  padding: 0 2rem;
`;

function Footer() {
  return (
    <Container>
      <p>
        This is an e-commerce shop for SHA's Greenfield Project from Anita and
        Asif
      </p>
    </Container>
  );
}

export default Footer;
