import { request } from "@octokit/request";

const repoRequest = (name) => {
  let response = request("GET /users/{username}/repos", {
    headers: {},
    username: name,
    type: "all",
  });
  return response;
};

const userRequest = (name) => {
  let response = request("GET /users/{username}", {
    headers: {},
    username: name,
    type: "all",
  });
  return response;
};

export const fetchUser = async (name) => {
  try {
    let [repoResponse, userResponse] = await Promise.all([
      repoRequest(name),
      userRequest(name),
    ]);
    return { repoResponse, userResponse };
  } catch (err) {
    alert("User not found");
  }
};
