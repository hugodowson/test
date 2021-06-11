import { request } from "@octokit/request";

export const fetchRepos = async (name) => {
  try {
    let response = await request("GET /users/{username}/repos", {
      headers: {},
      username: name,
      type: "all",
    });
    return response;
  } catch (err) {
    alert("User not found")
  }
};
