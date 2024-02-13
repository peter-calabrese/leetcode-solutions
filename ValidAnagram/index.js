var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  const noDupes = new Set(t.split(''));
  const sMap = new Map();
  const tMap = new Map();

  noDupes.forEach((char) => {
    sMap.set(char, s.split('').filter((e) => e === char).length);
    tMap.set(char, t.split('').filter((e) => e === char).length);
  });

  for (let [key, value] of sMap) {
    if (tMap.get(key) != value) return false;
  }
  return true;
};
