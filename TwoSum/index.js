const twoSum = (nums, target) => {
  const map = new Map();
  for (var i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    if (map.has(val)) {
      return [map.get(val), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([3, 2, 4], 6));
