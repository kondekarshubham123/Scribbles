---
description: "Author: @kondekarshubham123"
tags: [Two Pointer]
---

# 6 - Valid Palindrome II

## Problem Statement

Write a function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it.


**Constraints:**

- 1 <= `string.length` <= 10 <sup>5</sup>
- The string only consists of English letters


**Example 1:**

```
Input: s = "madame"
Output: True
```

**Example 2:**

```
Input: s = "dead"
Output: True
```

**Example 3:**

```
Input: s = "RACEACAT"
Output: False
```


## Approach 1: Two Pointer Approch

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
def is_palindrome(s):
    left = 0
    right = len(s) - 1

    def check_palinrome_except_one(l, r):
        
        while l <= r:
            if s[l] != s[r]:
                return False
            l += 1
            r -= 1
        return True

    while left <= right:
        if s[left] != s[right]:
            return (
                check_palinrome_except_one(left + 1, right)
                or 
                check_palinrome_except_one(left, right - 1)
            )
        left += 1
        right -= 1
    return True

```
</TabItem>
</Tabs>