import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/github";
import { Grid, Typography, Avatar } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import "../styles/User.css";
import { createTheme, Box, fontStyle } from "@mui/system";
import { ThemeProvider } from "@emotion/react";

export default function User() {
  const fontTheme = createTheme({
    typography: {
      fontFamily: "CherryBomb",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'CherryBomb';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: url(../fonts/CherryBomb.ttf);
          }
        `,
      },
    },
  });

  const statsTheme = createTheme({
    typography: {
      fontFamily: "Patrick Hand",
      fontStyle: "cursive",
    },
  });

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
                <ThemeProvider theme={fontTheme}>
                  <Grid item xs={12} md={12} >
                    <Typography
                      className="usernameText"
                      noWrap={false}
                      variant="h3"
                    >
                      {user.login}'s
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    {/* SUB HEADER */}
                    <Typography
                      className="lofiText"
                      noWrap={false}
                      variant="h3"
                    >
                      Lofi Stats
                    </Typography>
                  </Grid>
                </ThemeProvider>
                <Grid item xs={12} md={12}></Grid>

                {/* AVATAR */}
                <Grid item xs={12} md={2} margin={"top"}>
                  <Avatar
                    sx={{ width: 150, height: 150, margin: "auto" }}
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
                    <ThemeProvider theme={fontTheme}>
                      <Typography noWrap={false} variant="body1">
                        {user.bio}
                      </Typography>
                    </ThemeProvider>
                  </Grid>
                </Grid>
              </Grid>

              {/* USER STATS */}
              <Box className="userStats" margin={"15px"}>
              <ThemeProvider theme={statsTheme}> 
                <Grid className="statsContainer" container>
                  {user.followers === null ? undefined : (
                    <Grid className="card" item xs={12} md={3}>
                      <Typography className="statsText" noWrap={false} variant="h5">
                        {user.followers} Followers
                      </Typography>
                    </Grid>
                  )}
                  {user.following === 0 ? undefined : (
                    <Grid className="card" item xs={12} md={3}>
                      <Typography className="statsText" noWrap={false} variant="h5">
                        {user.following} Following
                      </Typography>
                    </Grid>
                  )}
                  {user.following === 0 ? undefined : (
                    <Grid className="card" item xs={12} md={3}>
                      <Typography className="statsText" noWrap={false} variant="h5">
                        {user.public_repos} Repos
                      </Typography>
                    </Grid>
                  )}
                  {user.location === null ? undefined : (
                    <Grid className="card" item xs={12} md={3}>
                      <Typography className="statsText" noWrap={false} variant="h5">
                        {user.location}
                      </Typography>
                    </Grid>
                  )}
                  {user.twitter_username === null ? undefined : (
                    <Grid className="card" item xs={12} md={3}>
                      <Typography className="statsText" noWrap={false} variant="h5">
                        @{user.twitter_username}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </ThemeProvider>
              </Box>

              {/* GITHUB ACTIVITY */}
              <Grid container className="activitySquares" >
                <Grid item xs={12} m={12}>
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
