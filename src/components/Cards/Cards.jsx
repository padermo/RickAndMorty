import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters, nextPage, prevPage } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "./Card";

function Cards() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.characters);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCharacters(page));
  }, [dispatch, page]);

  const handleNextPage = () => {
    if (page === 42) return;
    if (page < 42) {
      dispatch(nextPage(page + 1));
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    if (page <= 42) {
      dispatch(prevPage(page - 1));
      setPage(page - 1);
    }
  };

  return (
    <div className="cards">
      <div className="cards__paginado">
        <button onClick={handlePrevPage} className="cards__btn">
          <span class="material-symbols-outlined">keyboard_arrow_left</span>
        </button>
        {page}
        <button onClick={handleNextPage} className="cards__btn">
          <span class="material-symbols-outlined">keyboard_arrow_right</span>
        </button>
      </div>
      <div className="cards__elements">
        {state.length &&
          state.map((e) => (
            <Link to={`/detail/${e.id}`} key={e.id} className="cards__link">
              <Card id={e.id} name={e.name} image={e.image} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Cards;
