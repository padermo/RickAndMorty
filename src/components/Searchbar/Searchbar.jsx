import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharacterByName } from "../../redux/actions";

function Searchbar() {
  const [captureInput, setCaptureInput] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setCaptureInput(e.target.value);
  };

  const handleOnClick = () => {
    dispatch(getCharacterByName(captureInput));
    setCaptureInput("");
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        type="search"
        value={captureInput}
        placeholder="Character..."
        onChange={handleOnChange}
      />
      <button onClick={handleOnClick} className="searchbar__btn">
        <span class="material-symbols-outlined">search</span>
      </button>
    </div>
  );
}

export default Searchbar;
