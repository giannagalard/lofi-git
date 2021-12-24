import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/github";
import { Grid, Avatar } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import "../styles/User.css";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import TwitterIcon from "@mui/icons-material/Twitter";
import Loading from "../components/Loading";
import UserNotFound from "../components/UserNotFound";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

export default function User() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    level4: "#A66681",
    level3: "#B16E87",
    level2: "#DA8598",
    level1: "#DA9EA6",
    level0: "#D3B4C4",
  };

  const { username } = useParams();
  const [valid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    fetchData(
      username as string,
      setUser as Function,
      setValid as Function,
      setLoading as Function
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="bg-blur"></div>
      <Box className="mainContainer">
        <div className="container">
          {isLoading === true ? (
            <Loading />
          ) : valid === true ? (
            <div>
              <Grid container>
                {/* USERNAME */}

                <Grid item xs={12} md={2}>
                  <h3 className="usernameText">{user.login}'s</h3>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} md={2}>
                  {/* SUB HEADER */}
                  <h3 className="lofiText">Lofi Stats</h3>
                </Grid>
                <Grid item xs={12} md={12}></Grid>
                <Grid style={{ marginTop: "20px" }}></Grid>
                {/* AVATAR */}
                <Grid
                  item
                  xs={12}
                  md={2}
                  margin={"top"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      margin: "auto",
                      marginTop: "15px",
                      border: "5px solid #604450",
                    }}
                    src={user.avatar_url}
                  ></Avatar>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <GitHubIcon
                      style={{
                        marginTop: "15px",
                        fontSize: "35px",
                        color: "#604450",
                      }}
                    />
                  </a>
                </Grid>
                <Grid
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  item
                  xs={12}
                  md={4}
                >
                  {/* BIO */}
                  <Grid className="bioText">
                    <Box
                      sx={{
                        display: { xs: "block", md: "none" },
                        marginTop: "30px",
                      }}
                    ></Box>
                    <p className="bioText">{user.bio}</p>
                    {user.location === null ? undefined : (
                      <Grid className="location" item xs={12}>
                        <h6 className="upperText">
                          <LocationOnIcon />
                          {user.location}
                        </h6>
                        {user.company !== null ? (
                          <h6 className="upperText">
                            <BusinessIcon />
                            {user.company}
                          </h6>
                        ) : undefined}
                      </Grid>
                    )}
                    {user.twitter_username === null ? undefined : (
                      <Grid className="twitter" item xs={12} md={7}>
                        <p className="upperText">
                          <TwitterIcon />@{user.twitter_username}
                        </p>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>

              {/* USER STATS */}
              <Box
                className="userStats"
                style={{ marginTop: "60px" }}
                margin={"15px"}
              >
                <Grid className="statsContainer" container>
                  <Grid className="card" item xs={12} md={3}>
                    <p className="statsText">{user.followers} Followers</p>
                  </Grid>
                  <Grid className="card" item xs={12} md={3}>
                    <p className="statsText">{user.following} Following</p>
                  </Grid>
                  <Grid className="card" item xs={12} md={3}>
                    <p className="statsText">{user.public_repos} Repos</p>
                  </Grid>
                </Grid>
              </Box>

              {/* GITHUB ACTIVITY */}
              <Grid sx={{ marginTop: "80px" }} container>
                <Grid className="activitySquares" item xs={12}>
                  <GitHubCalendar
                    username={user.login}
                    blockSize={15}
                    blockMargin={5}
                    theme={colourTheme}
                    fontSize={16}
                  />
                </Grid>

                {/* BACK BUTTON */}
                <Grid
                  className="backButtonContainer"
                  item
                  xs={12}
                  md={12}
                  marginTop={"30px"}
                >
                  <Link className="backButton" to="/home">
                    Back
                  </Link>
                  {/* SHARE STATS */}
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={4} marginTop={"30px"}>
                    <h3 className="shareText">Share Your Stats !</h3>
                  </Grid>
                  {/* share to twitter */}
                  <Grid item xs={12} md={3} marginTop={"40px"}>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20my%20fun%20GitHub%20stats%20!%20https://lofi-git.vercel.app/user/${user.login}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/office/40/000000/twitter.png"
                        alt="twitter"
                      />
                    </a>
                    {/* share to linkedin */}
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=https://lofi-git.vercel.app/user/${user.login}&title=Check%20out%20my%20fun%20GitHub%20stats%20!&summary=&source=`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/office/40/000000/linkedin.png"
                        alt="linkedin"
                      />
                    </a>
                    {/* share to facebook */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://lofi-git.vercel.app/user/${user.login}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/office/40/000000/facebook.png"
                        alt="facebook"
                      />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ) : (
            <UserNotFound />
          )}
        </div>
      </Box>
    </>
  );
}
