import "../styles/SearchBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <div className = "searchContainer">
        <i className = "fa fa-search searchIcon"></i>
        <input onChange = {(e) => setSearch(e.target.value)}className = "searchBar" type = "search" placeholder = "Search for a user"/>
        <Link to = {{pathname:`/user/${search}`}} className = "searchButton "> Submit </Link>
    </div>
  );
}
