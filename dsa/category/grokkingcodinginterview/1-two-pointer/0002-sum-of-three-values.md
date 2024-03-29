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


<TabItem value="java-sol-1" label="Java">
<SolutionAuthor name="@kondekarshubham123"/>

```java
import java.util.*;


public class SumOfThree{
   public static boolean findSumOfThree(int[] nums, int target) {
      Arrays.sort(nums);
      
      int numsSize = nums.length;

      for(int ptr1 = 0; ptr1 < numsSize - 2 ; ptr1 ++){
         int ptr2 = ptr1 + 1;
         int ptr3 = numsSize - 1;

         int newTarget = target - nums[ptr1];

         while(ptr2 < ptr3){
            int new_sum = nums[ptr2] + nums[ptr3];

            if(newTarget == new_sum){
               return true;
            } else if (new_sum > newTarget){
               ptr3 -= 1;
            } else {
               ptr2 += 1;
            }
         }
      }
      return false;
   }
}
```
</TabItem>

</Tabs>