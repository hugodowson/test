import { fetchRepos } from "./fetch";
import { orderSet } from "./logic";
import { DOM_NODES } from "./constants";

//Add submit eventlistener to submit button
DOM_NODES.formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

const submit = () => {
  fetchRepos(DOM_NODES.nameInput.value)
    .then((response) => {
      orderSet(response.data, DOM_NODES.favLang);
    })
    .then(() => {
      DOM_NODES.formOutput.hidden ? (DOM_NODES.formOutput.hidden = false) : "";
    });
};
