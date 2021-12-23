import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/github";
import { Grid, Avatar } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import "../styles/User.css";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import TwitterIcon from '@mui/icons-material/Twitter';
import Loading from "../components/Loading";
import UserNotFound from "../components/UserNotFound";

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
      <Box 
      className="mainContainer"
      >
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
                <Grid item xs={12} md={2} margin={"top"}>
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
                          <TwitterIcon />
                          @{user.twitter_username}
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
                {/* SHARE STATS */}
                <Grid container>
                  <Grid item xs={12} md={3} marginTop={"30px"}>
                    <h3 className="shareText">Share Stats !</h3>
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
