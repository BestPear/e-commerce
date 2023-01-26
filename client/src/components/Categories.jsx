import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 30vh;
  width: 100%;
  margin-block: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
`;
const Laptop = styled.div`
  flex: 1;
  background-image: url("https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
`;
const Mobile = styled.div`
  flex: 1;
  background-image: url("https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
`;
const Accessories = styled.div`
  flex: 1;
  background-image: url("https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
`;
const Span = styled.span`
  display: inline-block;
  margin: 0.5em 0;
  padding: 0 0.5em;
  background-color: rgba(255, 255, 255, 0.5);
  // background-color: rgba(0,0,0,0.5);
  // color: white;
  border-radius: 2px;
`;

function Categories() {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Mobile onClick={() => navigate("/profile/category/mobile")}>
        <Span> Mobile </Span>
      </Mobile>
      <Laptop onClick={() => navigate("/profile/category/laptops")}>
        <Span>Laptop </Span>
      </Laptop>
      <Accessories  onClick={() => navigate("/profile/category/accessories")}>
        <Span>Accessories</Span>
      </Accessories>
    </Container>
  );
}

export default Categories;
