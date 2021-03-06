#
# @lc app=leetcode.cn id=283 lang=python3
#
# [283] 移动零
#

# @lc code=start
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[n] = nums[i]
                n = n + 1

        while n < len(nums):
            nums[n] = 0
            n = n + 1


# @lc code=end
