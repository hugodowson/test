export const orderSet = (arr, favLangNode) => {
  const counts = {};
  //If statement accounts for users with no repos
  if (arr.length > 0) {
    //collect object of languages with number of times used
    for (let i = 0; i < arr.length; i++) {
      const lang = arr[i].language;
      counts[lang] = counts[lang] ? counts[lang] + 1 : 1;
    }
    //Sort object by times used and then set as innerHTML
    const fav = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
    favLangNode.innerHTML = fav;
  } else {
    favLangNode.innerHTML = "No Repositories Found";
  }
};

export const listTopRepos = (arr, repoList) => {
  //Sort repo array by forks. Then slice out top 4 most forked repos
  arr.sort((a, b) => parseFloat(b.forks) - parseFloat(a.forks));
  const arrSlice = arr.slice(0, 4);
  //Use .map to create list element with anchor element as child
  //append each list element to repo list ordered list parent element
  arrSlice.map((element) => {
    let node = document.createElement("li");
    let link = document.createElement("a");
    [link.href, link.innerHTML] = [element.html_url, element.name];
    node.className = "list-group-item";
    node.appendChild(link);
    repoList.appendChild(node);
  });
};

//set details from data object using constant nodes
export const setDetails = (data, avatarElement, followerCount, repoCount) => {
  avatarElement.src = data.avatar_url;
  followerCount.innerHTML = data.followers;
  repoCount.innerHTML = data.public_repos;
};
