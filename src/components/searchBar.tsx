import "../styles/SearchBar.css";


export default function searchBar() {
  return (
    <div className = "searchContainer">
        <i className = "fa fa-search searchIcon"></i>
        <input className = "searchBar" type = "search" placeholder = "Search for a user"/>
        <input type = "submit" value = "Search" className = "searchButton"/>
    </div>
  );
}
