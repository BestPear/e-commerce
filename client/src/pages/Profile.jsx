import axios from "axios";
import { useState, useEffect } from "react";
import NavbarProfile from "../components/NavbarProfile";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Footer from "../components/Footer";


function Profile() {

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
    <div>
      <NavbarProfile>{user.username}</NavbarProfile>
      <Hero />
      <Categories />  
      <Footer />
    </div>
  );
}

export default Profile;
