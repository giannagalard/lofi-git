import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/github";
import { Grid, Typography, Avatar } from "@mui/material";
import GitHubCalendar from "react-github-calendar";

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
    <div>
      {valid === false ? (
        <h1>Invalid User</h1>
      ) : (
        <div>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Typography className="mainText" noWrap={false} variant="h3">
                {user.login}'s Lofi Stats
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}></Grid>
            <Grid item xs={12} md={2}>
              <Avatar
                sx={{ width: 150, height: 150 }}
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
              <Typography noWrap={false} variant="body1">
                {user.bio}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            {user.followers === null ? undefined : (
              <Grid item xs={12} md={3}>
              <Typography noWrap={false} variant="h5">
                {user.followers} Followers
              </Typography></Grid>
            )}
            {user.following === 0 ? undefined : (
              <Grid item xs={12} md={3}>
              <Typography noWrap={false} variant="h5">
                {user.following} Following
              </Typography></Grid>
            )}
            {user.following === 0 ? undefined : (
              <Grid item xs={12} md={3}>
              <Typography noWrap={false} variant="h5">
                {user.public_repos} Repos
                </Typography>
              </Grid>
            )}
            {user.location === null ? undefined : (
              <Grid item xs={12} md={3}>
              <Typography noWrap={false} variant="h5">
                {user.location}
              </Typography></Grid>
            )}
            {user.twitter_username === null ? undefined : (
              <Grid item xs={12} md={3}>
              <Typography noWrap={false} variant="h5">
                @{user.twitter_username}
              </Typography></Grid>
            )}
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <GitHubCalendar
                username="giannagalard"
                blockSize={15}
                blockMargin={5}
                theme={colourTheme}
                fontSize={16}
              />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}
