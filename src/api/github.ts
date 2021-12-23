const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN_KEY });
export const fetchData = async (user: string, setUser: Function, setValid: Function) => {
  try {
    const response = await octokit
      .request(`GET /users/${user}`, {
        username: "username",
      })
      setUser(response.data)
      setValid(true)
    }
    catch(e) {
      setValid(false)
    }
};
