/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
 const mySqrt = function(x) {
  let left = 1
  let right = x
  let mid
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2)
    if (mid * mid === x) {
      return mid
    }
    if (mid * mid > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return right
}
// @lc code=end

