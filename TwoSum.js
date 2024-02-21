const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    if (map.has(val)) {
      return [map.get(val), i];
    }
    map.set(nums[i], i);
  }
};

export default twoSum;
