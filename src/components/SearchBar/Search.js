import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./search.css";
function Search({ border, placeholder }) {
  return (
    <div
      style={{
        border: `${border ? "1px solid #ddd" : "none"}`,
        borderRadius: `${border ? "0px" : "5px"}`,
        marginTop: `${border ? "0px" : "20px"}`,
      }}
      className="search"
    >
      <SearchIcon fontSize="small" />
      <input
        style={{ padding: `${border ? "5px" : "15px"}` }}
        type="text"
        placeholder={placeholder}
      />
      <button
        style={{
          padding: `${border ? "5px" : "15px"}`,
          borderRadius: `${border ? "0px" : " 0px 5px 5px 0px"}`,
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
