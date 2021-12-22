const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN_KEY });
export const fetchData = async (user: string, setUser: Function) => {
  try{
    const response = await octokit.request(`GET /users/${user}`, {
        username: 'username'
      })
      console.log(response.data)
      setUser(response.data)
      return true
    } catch(e) {
      return false
    }
}