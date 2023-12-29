---
description: "Author: @kondekarshubham123"
tags: [Two Pointer]
---

# 1 - Valid Palindrome (Easy)


## Problem Statement

Write a function that takes a string s as input and checks whether it’s a palindrome or not.

> Note: A phrase, word or sequence is a palindrome that reads the same backwards as forwards.

**Example 1:**

```
Input: s = "ABCBA"
Output: True
Explanation: "ABCBA" is a palindrome.
```

**Example 2:**

```
Input: s = "ABCCA"
Output: False
Explanation: "ABCCA" is not a palindrome.
```

**Constraints:**

-   1 <= `s.length` <= 2 * 10 <sup>5</sup>
-   The string won’t have any spaces and will only consist of ASCII characters.


## Two Pointer Approch

The two-pointer approach works by comparing the characters at both ends of the string, starting from the first and last characters. If the characters are different, the string is not a palindrome and the function returns False. If the characters are the same, the pointers are moved towards each other, one step at a time, until they meet in the middle of the string.

If all the characters are the same and the pointers haven't returned False, then the string is a palindrome and the function returns True.

This approach is efficient, because it only needs to check half of the characters in the string, rather than checking each character individually.

<Tabs>

<TabItem value="py-sol-1" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
def is_palindrome(s):
    
    left, right = 0, len(s) - 1

    while left <= right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1

    return True
```
</TabItem>

<TabItem value="java-sol-1" label="Java">
<SolutionAuthor name="@kondekarshubham123"/>

```java
import java.util.*;

public class Main{
    public static boolean isPalindrome(String s) {
       
       int ptr1 = 0;
       int ptr2 = s.length() - 1;

        while (ptr1 < ptr2){
            if(s.charAt(ptr1) == s.charAt(ptr2)){
                ptr1 += 1;
                ptr2 -= 1;
            } else{
                return false;
            }
        }
        return true;
    }
}
```
</TabItem>

</Tabs>


## Other approches

<Tabs>


<TabItem value="py-sol-2" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
def is_palindrome(s):
    return s==s[::-1]
```
</TabItem>


<TabItem value="java-sol-2" label="Java">
<SolutionAuthor name="@kondekarshubham123"/>

```java
import java.util.*;

public class Main{
    public static boolean isPalindrome(String s) {
        return new StringBuilder(s).reverse().toString().equals(s);
    }
}
```
</TabItem>
</Tabs>