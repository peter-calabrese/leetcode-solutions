const containsDuplicate = (nums) => {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      return true;
    }
    map.set(num);
  }
  return false;
};

export default containsDuplicate;
