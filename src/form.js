import { fetchUser } from "./fetch";
import { orderSet, setDetails, listTopRepos } from "./ordering";
import { DOM_NODES } from "./constants";

const form = document.getElementById("form-submit");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

const submit = () => {
  DOM_NODES.repoList.innerHTML = "";
  fetchUser(DOM_NODES.nameInput.value)
    .then(({ repoResponse, userResponse }) => {
      orderSet(repoResponse.data, DOM_NODES.favLang);
      listTopRepos(repoResponse.data, DOM_NODES.repoList);
      setDetails(
        userResponse.data,
        DOM_NODES.avatar,
        DOM_NODES.followerCount,
        DOM_NODES.repoCount
      );
    })
    .then(() => {
      DOM_NODES.formOutput.hidden ? (DOM_NODES.formOutput.hidden = false) : "";
    });
};
