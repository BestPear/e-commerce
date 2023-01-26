import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonOrange from "../components/ButtonOrange";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80");
  color: white;
`;

const Title = styled.h1`
  margin: 0;
  padding-block: 1rem 0;
  padding-inline: 1rem;
  text-align: left;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0.4rem 0;
`;

const Input = styled.input`
  width: 15rem;
  height: 20px;
  margin-block: 0.4rem;
  font-size: 1.1rem;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login() {
    axios
      .post("http://localhost:3636/auth/login", {
        username,
        password,
      })
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem("token", data.token);

          navigate("/profile");
        } else {
          alert(data.message);
        }
      });
  }

  return (
    <Container>
      <Navbar>
        <Title>Login</Title>
        <ButtonOrange
          onClick={() => {
            login();
          }}
        >
          Login
        </ButtonOrange>
      </Navbar>
      <Wrapper>
        <Label>
          Username:
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Label>
        <Label>
          Password:
          <Input type="password" 
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Label>
      </Wrapper>
    </Container>
  );
}

export default Login;
