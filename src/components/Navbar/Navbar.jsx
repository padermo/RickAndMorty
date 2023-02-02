import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCharacters } from "../../redux/actions";
import rick from "../../assets/rick.png";

function Navbar({ viewSearch }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleHome = () => {
    dispatch(getAllCharacters(1));
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navbar__content">
        <figure className="navbar__picture">
          <img src={rick} alt="" className="navbar__img"/>
        </figure>

        <button className="navbar__menu" onClick={handleHome}>Home</button>

        <div className="navbar__searchbar">{viewSearch === true ? <Searchbar /> : ""}</div>
      </div>
    </div>
  );
}

export default Navbar;
