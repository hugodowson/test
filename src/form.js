import { fetchUser, fetchDetails } from "./fetch";
import { orderSet, favLang, setDetails, listTopRepos } from "./ordering";
import { DOM_NODES } from "./constants";

const form = document.getElementById("big-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

const submit = () => {
  DOM_NODES.repoList.innerHTML = "";

  fetchUser(DOM_NODES.nameInput.value).then((response) => {
    let uniqueList;
    uniqueList = orderSet(response.data);
    favLang(uniqueList);
    listTopRepos(response.data, DOM_NODES.repoList);
  });

  fetchDetails(DOM_NODES.nameInput.value).then((response) => {
    setDetails(
      response.data,
      DOM_NODES.avatar,
      DOM_NODES.followerCount,
      DOM_NODES.repoCount
    );
  });
};
