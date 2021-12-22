import SearchBar from "../components/SearchBar";
import "../styles/Home.css";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <>
      <Box
        component="div"
        sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
        className="welcome"
      >
        <div className="bg-image">
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
      </Box>

      <Box
        component="div"
        sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none" } }}
        className="welcome"
      >
        <div className="phone-image">
          <div className="mobileTextContainer">
            <h1 className="welcomeText">
              Welcome To <br /> Lofi Git
            </h1>{" "}
          </div>
          <div className="mobileButtonContainer">
            {" "}
            <button className="loginButton">Login</button>{" "}
            <h3 className="orText">OR</h3>
            <SearchBar />
          </div>
        </div>
      </Box>
    </>
  );
}
