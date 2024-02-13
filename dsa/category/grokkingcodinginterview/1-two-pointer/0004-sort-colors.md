---
description: "Author: @kondekarshubham123"
tags: [Two Pointer]
---

# 4 - Sort Colors

## Problem Statement

## Approach 1: Using two pointer approch

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
def sort_colors(colors):
    left = mid = 0
    right = len(colors) - 1

    while mid <= right:
        if colors[mid] == 0:
            colors[mid], colors[left] = colors[left], colors[mid]
            left += 1
            mid += 1

        elif colors[mid] == 1:
            mid += 1
        
        else:
            colors[mid], colors[right] = colors[right], colors[mid]
            right -=1


    return colors
```
</TabItem>
</Tabs>
