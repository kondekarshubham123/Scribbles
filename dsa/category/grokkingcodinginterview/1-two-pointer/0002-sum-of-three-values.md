---
description: "Author: @kondekarshubham123"
tags: [Two Pointer]
---

# 2 - Sum of Three Values

## Problem Statement

Given an array of integers, `nums`, and an integer value, `target`, determine if there are any three integers in `nums` whose sum equals the `target`. Return **TRUE** if three such integers are found in the array. Otherwise, return **FALSE**.

**Example 1:**

```
Input: nums = [1,-1,0], target = -1
Output: false
```

**Example 2:**

```
Input: nums = [3,7,1,2,8,4,5], target = 10
Output: True
```

**Constraints:**

-   3 <= `nums.length` <= 1000
-   -10<sup>3</sup> <= `nums[i]`  <= 10<sup>3</sup> 
-   -10<sup>3</sup> <= `target`  <= 10<sup>3</sup> 


## Approach 1: Two Pointer Approch

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
def find_sum_of_three(nums, target):
    nums.sort()
    for i in range(len(nums) - 2):
        new_target = target - nums[i]
        left = i + 1
        right = len(nums) - 1

        while left < right:
            new_sum = nums[left] + nums[right]
            if new_sum == new_target:
                return True
            
            if new_sum > new_target:
                right -= 1
            else:
                left += 1

    return False

```
</TabItem>
</Tabs>