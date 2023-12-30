class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        for i in range(len(nums)):
            if nums[i] + nums[i + 1] == target:
                return [i, i + 1]
        return 'Not found'


a = Solution()
print(a.twoSum(nums = [2,7,11,15], target = 9))
print(a.twoSum(nums = [3,2,4], target = 6))
print(a.twoSum(nums = [3,2,4], target = 6))