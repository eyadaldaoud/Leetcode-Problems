/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums : number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
       for (let j = 0; j < i; j++) {
           if (nums[i] + nums[j] == target) {
               return [j, i]
           }
       }
    }
    return [];
};

console.log(twoSum([3,2,3,5,6], 11));
