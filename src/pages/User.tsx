import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/github";
import { Grid, Typography, Avatar } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import "../styles/User.css";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from '@mui/icons-material/Business';

export default function User() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    level4: "#8400b8",
    level3: "#b22ff4",
    level2: "#b265f6",
    level1: "#c084f5",
    level0: "#ecd9fc",
  };

  const { username } = useParams();
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    fetchData(username as string, setUser as Function, setValid as Function);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="bg-blur"></div>
      <div className="mainContainer">
        <div className="container">
          {valid === false ? (
            <h1>Invalid User</h1>
          ) : (
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
                    <p className="bioText">
                      {user.bio}
                    </p>
                    {user.location === null ? undefined : (
                      <Grid className="location" item xs={12}>
                        <h6 className="upperText"
                        >
                          <LocationOnIcon/>
                          {user.location}
                        </h6>
                        {user.company !== null ? (
                          <h6
                            className="upperText"
                          >
                            <BusinessIcon/>
                            {user.company}
                          </h6>
                        ) : undefined}
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
                    <Typography
                      className="statsText"
                      noWrap={false}
                      variant="h5"
                    >
                      {user.followers} Followers
                    </Typography>
                  </Grid>
                  <Grid className="card" item xs={12} md={3}>
                    <Typography
                      className="statsText"
                      noWrap={false}
                      variant="h5"
                    >
                      {user.following} Following
                    </Typography>
                  </Grid>
                  <Grid className="card" item xs={12} md={3}>
                    <Typography
                      className="statsText"
                      noWrap={false}
                      variant="h5"
                    >
                      {user.public_repos} Repos
                    </Typography>
                  </Grid>

                  {user.twitter_username === null ? undefined : (
                    <Grid className="card" item xs={12} md={3}>
                      <Typography
                        className="statsText"
                        noWrap={false}
                        variant="h5"
                      >
                        @{user.twitter_username}
                      </Typography>
                    </Grid>
                  )}
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
                <Grid container></Grid>
              </Grid>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
