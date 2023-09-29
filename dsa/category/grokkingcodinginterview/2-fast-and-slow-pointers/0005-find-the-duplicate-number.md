---
description: "Author: @kondekarshubham123"
tags: [Fast and slow pointers]
---

# 5 - Find the duplicate number

## Problem Statement

## Approch 1: Fast and slow pointers approch

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
def find_duplicate(nums):

    slow, fast = 0, 0

    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    
    slow2 = 0
    while slow != slow2:
        slow = nums[slow]
        slow2 = nums[slow2]

    return slow

   
```

</TabItem>
</Tabs>