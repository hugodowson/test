import { request } from "@octokit/request";

//Two functions below. First requests repo data, second requests user data
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

//Async-await function below. This wraps the two functions above in a promise.all function
//Ensures that both responses are generated before progressing
//Try / catch makes sure exisiting username is entered
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
