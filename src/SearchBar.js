import React, { useState } from "react";
import "./SearchBar.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

function SearchBar() {
  const [input, setInput] = useState("");
  const heandleSubmit = (e) => {
    e.preventDefault();
    console.log("You have clicked😄 ", input);
    window.location = `https://www.google.com/search?q=${input}`;
    setInput("");
  };
  return (
    <div className="searchBar">
      <img
        className="searchBar__logo"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt=""
      />
      <div className="searchBar__inputBox">
        <MicIcon className="searchBar__mic" />
        <form action="">
          <input
            placeholder="Search..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={heandleSubmit}></button>
        </form>
        <SearchIcon className="searchBar__search" />
      </div>
      <div className="searchBar__buttons">
        <Button className="searchBar__button" onClick={heandleSubmit}>
          Google Search
        </Button>
        <Button className="searchBar__button">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}

export default SearchBar;
