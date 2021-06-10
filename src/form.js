import { fetchUser } from "./fetch";
import { orderSet, setDetails, listTopRepos } from "./logic";
import { DOM_NODES } from "./constants";

//Add submit eventlistener to submit button
DOM_NODES.formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

const submit = () => {
  //Set repolist to blank to prevent list being appended multiple times
  DOM_NODES.repoList.innerHTML = "";
  //Fetch userdata using input username value
  //Destructure out two responses and then apply logic functions to update DOM
  //Finally set form element hidden to false once promise has resolved
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
