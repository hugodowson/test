export const orderSet = (arr) => {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    const lang = arr[i].language;
    counts[lang] = counts[lang] ? counts[lang] + 1 : 1;
  }
  return counts;
};

export const favLang = (obj) => {
  const fav = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  document.getElementById("fav-lang").innerHTML = fav;
};

export const setDetails = (data, avatarElement, followerCount, repoCount) => {
  avatarElement.src = data.avatar_url;
  followerCount.innerHTML = data.followers;
  repoCount.innerHTML = data.public_repos;
};

export const listTopRepos = (arr, repoList) => {
  arr.sort((a, b) => parseFloat(b.forks) - parseFloat(a.forks));
  const arrSlice = arr.slice(0, 4);

  arrSlice.map((element) => {
    let node = document.createElement("li");
    let link = document.createElement("a");
    [link.href, link.innerHTML] = [element.url, element.name];
    node.appendChild(link);
    repoList.appendChild(node);
  });
};
