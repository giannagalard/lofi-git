import SearchBar from "../components/SearchBar";
import "../styles/Home.css";
import { Box } from "@mui/system";
import lofi from "../sound/MoonlightDenetsuLofi.wav";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Home() {
  return (
    <>
      <Box
        component="div"
        sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
        className="welcome"
      >
        <div className="bg-image">
          <div className="upperContainer">
            <div className="textContainer">
              <h1 className="welcomeText">
                Welcome To <br /> Lofi Git
              </h1>{" "}
            </div>
            <div className="buttonContainer">
              {/* {" "} 
            <button className="loginButton">Login</button>{" "}
            <h3 className="orText">OR</h3> */}
              <div style={{ width: "35%" }}>
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="audioContainer">
            <AudioPlayer
              style={{ marginLeft: "100px", width: "60%" }}
              autoPlay={false}
              src={lofi}
            />
          </div>
        </div>
      </Box>

      <Box
        component="div"
        sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}
        className="welcome"
      >
        <div className="phone-image">
          <div className="mobileTextContainer">
            <h1 className="welcomeText">
              Welcome To <br /> Lofi Git
            </h1>{" "}
          </div>
          <div className="mobileButtonContainer">
            {/* {" "}
            <button className="loginButton">Login</button>{" "}
            <h3 className="orText">OR</h3> */}
            <SearchBar />
          </div>
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AudioPlayer
              style={{ width: "95%", marginTop: "30px" }}
              autoPlay={false}
              src={lofi}
            />
          </div>
        </div>
      </Box>
    </>
  );
}
