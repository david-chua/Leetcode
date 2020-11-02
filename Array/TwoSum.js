// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.

// Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]
//
//
// Constraints:
//
// 2 <= nums.length <= 105
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Brute force: double for loops


var twoSum = function(nums, target) {
    let hash = {};
    hash[nums[0]] = [nums[0], 0];
    for ( let i = 1; i< nums.length; i ++){
        missingVal = target - nums[i];
        if (hash[missingVal]){
            return [hash[missingVal][1], i];
        } else{
            hash[nums[i]] = [nums[i], i]
        }
    }
}

var twoSumMethod2 = function(nums, target){
  let hash = {};
  for (let i = 0; i < nums.length; i++){
    if (hash[nums[i]] >= 0){
      return [hash[nums[i]], i]
    }
    hash[target-nums[i]] = i
  }
}
