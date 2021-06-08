import { request } from "@octokit/request";

export const fetchUser = async (name) => {
  try {
    let response = await request("GET /users/{username}/repos", {
      headers: {
        authorization: "token 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",
      },
      username: name,
      type: "all",
    });
    return response;
  } catch (err) {
    alert("User not found");
  }
};

export const fetchDetails = async (name) => {
  let response = await request("GET /users/{username}", {
    headers: {
      authorization: "token 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",
    },
    username: name,
    type: "all",
  });
  return response;
};
