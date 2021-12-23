import "../styles/SearchBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const clickyBlicky = (e: any) => {
    if (e.key === "Enter") {
      navigate(`/user/${search}`);
    }
  };
  return (
    <div className="searchContainer">
      <i className="fa fa-search searchIcon"></i>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar"
        type="search"
        placeholder="Search for a user"
        onKeyPress={(e) => clickyBlicky(e)}
      />
      <Link to={{ pathname: `/user/${search}` }} className="searchButton ">
        {" "}
        Submit{" "}
      </Link>
    </div>
  );
}
