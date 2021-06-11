export const orderSet = (arr, favLangNode) => {
  const counts = {};
  //If statement accounts for users with no repos
  if (arr.length > 0) {
    //collect object of languages with number of times used
    for (let i = 0; i < arr.length; i++) {
      const lang = arr[i].language;
      counts[lang] = counts[lang] ? counts[lang] + 1 : 1;
    }
    // Reduce for most used language and then set as innerHTML
    const fav = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
    favLangNode.innerHTML = fav;
  } else {
    favLangNode.innerHTML = "No Repositories Found";
  }
};
