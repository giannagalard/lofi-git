import SearchBar from "../components/SearchBar";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="bg-image">
      <div className="welcome">
        <div className="textContainer">
          <h1 className="welcomeText">
            Welcome To <br /> Lofi Git
          </h1>{" "}
        </div>
        <div className="buttonContainer">
          {" "}
          <button className="loginButton">Login</button>{" "}
          <h3 className="orText">OR</h3>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
