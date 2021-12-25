const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN_KEY });
export const fetchData = async (
  user: string,
  setUser: Function,
  setValid: Function,
  setLoading: Function,
  setLanguages: Function
) => {
  try {
    const response = await octokit.request(`GET /users/${user}`, {
      username: "username",
    });
    const repos = await octokit.request(`GET /users/${user}/repos`);
    let index: number = 0;
    let langSet = new Set();
    // if (repos.data.length > 6) {
    //   while (count < 6) {
    //     if (repos.data[index].language === null) {
    //       index++;
    //       continue;
    //     } else {
    //       langSet.add(repos.data[index].language);
    //       index++;
    //     }
    //     if (langSet.size === count + 1) {
    //       count++;
    //     }
    //   }
    // } else {
    //   while (count < repos.data.length) {
    //     if (repos.data[index].language === null) {
    //       index++;
    //       continue;
    //     } else {
    //       langSet.add(repos.data[index].language);
    //       index++;
    //     }
    //     if (langSet.size === count + 1) {
    //       count++;
    //     }
    //   }
    // }
    while (index < repos.data.length) {
      if (
        repos.data[index].language === null ||
        repos.data[index].language === "Assembly"
      ) {
        index++;
      } else {
        langSet.add(repos.data[index].language);
        index++;
      }
    }
    setLanguages(langSet);
    setUser(response.data);
    setValid(true);
    setTimeout(() => setLoading(false), 1069);
  } catch (e) {
    setValid(false);
    setTimeout(() => setLoading(false), 420);
  }
};
