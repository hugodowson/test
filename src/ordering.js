export const orderSet = (arr, favLangNode) => {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    const lang = arr[i].language;
    counts[lang] = counts[lang] ? counts[lang] + 1 : 1;
  }
  const fav = Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );
  favLangNode.innerHTML = fav;
};

export const listTopRepos = (arr, repoList) => {
  arr.sort((a, b) => parseFloat(b.forks) - parseFloat(a.forks));
  const arrSlice = arr.slice(0, 4);

  arrSlice.map((element) => {
    let node = document.createElement("li");
    let link = document.createElement("a");
    [link.href, link.innerHTML] = [element.html_url, element.name];
    node.className = "list-group-item";
    node.appendChild(link);
    repoList.appendChild(node);
  });
};

export const setDetails = (data, avatarElement, followerCount, repoCount) => {
  avatarElement.src = data.avatar_url;
  followerCount.innerHTML = data.followers;
  repoCount.innerHTML = data.public_repos;
};
