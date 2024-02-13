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

<TabItem value="java-sol-1" label="Java">
<SolutionAuthor name="@kondekarshubham123"/>
    
```java
import java.util.*;

public class SortColors {

    public static void swapElements(int[] colors, int firstIdx, int secondIdx){
        int value = colors[firstIdx];
        colors[firstIdx] = colors[secondIdx];
        colors[secondIdx] = value;
        return;
    }

    public static int[] sortColors (int[] colors) {
        // Arrays.sort(colors);
        int left = 0;
        int right = colors.length - 1;

        int mid = 0;

        while(mid <= right){
            if (colors[mid] == 1){
                mid ++;
                continue;
            } else if(colors[mid] == 0){
                swapElements(colors, left, mid);
                left ++;
                mid ++;
            } else if (colors[mid] == 2){
                swapElements(colors, right, mid);
                right --;
            }
        }

        return colors;
    }
}
```
</TabItem>

</Tabs>
