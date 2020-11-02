// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
//
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
//
// Example 1:
//
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation:
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.

// Example 2:
//
// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false]
// Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.

// Example 3:
//
// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]
//
//
// Constraints:
//
// 2 <= candies.length <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50

// Brute force:
//space: O(n)
// time: O(n^2) - double for loop
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    for (let i = 0;i< candies.length;i++){
        for (let j = 0; j< candies.length;j++){
            if (i == j){
                continue;
            }
            if (candies[i]+extraCandies < candies[j]){
                result[i] = false;
                break;
            }
            result[i] = true;
        }
    }
    return result;
};

// space: O(n) <-- result array
// time: O(n) <-- O(2n) due to going through array to find max then going through array again to check if value plus candies is equal or greater than the max value
// but since big O ignores constants, it slims to O(n)
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies2 = function(candies, extraCandies) {
    let result = [];
    let max = candies[0]
    for (let i = 1; i< candies.length; i++){
        if (candies[i] > max){
            max = candies[i]
        }
    }
    for (let i = 0; i < candies.length; i++){
        if ((candies[i] + extraCandies) >= max){
            result[i] = true
        } else {
            result[i] = false
        }
    }
    return result;
};
