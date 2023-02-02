import React from "react";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar viewSearch={true} />
      <div className="home__content">
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
