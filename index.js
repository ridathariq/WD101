let createInitialsFromName = (name) => {
  let words = name.split(' ');

  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  } else if (words.length === 2) {
    return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  } else {
    return words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase();
  }
};
module.exports = createInitialsFromName;
