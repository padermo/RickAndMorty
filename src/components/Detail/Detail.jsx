import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById } from "../../redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Detail() {
  const { id } = useParams();

  const state = useSelector((state) => state.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, [dispatch]);

  return (
    <div className="detail">
      <Navbar />
      <div className="detail__content">
        <figure className="detail__picture">
          <img src={state.image} alt={`Image de ${state.name}`} className="detail__img" />
        </figure>

        <div className="detail__texts">
          <h2 className="detail__name">{state.name}</h2>
          <ul className="detail__list">
            <li>Status: <span>{state.status}</span></li>
            <li>Species: <span>{state.species}</span></li>
            <li>Gender: <span>{state.gender}</span></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
