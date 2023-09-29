---
description: "Author: @kondekarshubham123"
tags: [Fast and slow pointers]
---

# 4 - Circular array loop

## Problem Statement

## Approch 1: Fast and slow pointers approch

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
def get_next_position(nums, index , if_forward):
    direction = nums[index] >= 0
    if (direction != if_forward):
        return -1
    
    next_index = (index + nums[index]) % len(nums)
    if(next_index < 0):
        next_index = next_index + len(nums)

    if(index == next_index):
        return -1
    
    return next_index


def circular_array_loop(nums):  
    l = len(nums)

    if l == 0:
        return False

    for i in range(l):
        slow = fast = i
        if_forward = nums[i] > 0

        while True:

            slow = get_next_position(nums, slow , if_forward)

            if(slow == -1):
                break
            
            fast = get_next_position(nums, fast , if_forward)
            
            if(fast == -1):
                break
            
            fast = get_next_position(nums, fast , if_forward)

            if(fast == -1):
                break
            
            if (slow == fast):
                return True

    return False
   
```

</TabItem>
</Tabs>