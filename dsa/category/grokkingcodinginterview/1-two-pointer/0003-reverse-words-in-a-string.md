---
description: "Author: @kondekarshubham123"
tags: [Two Pointer]
---

# 3 - Reverse Words in a String

## Problem Statement

Given a `sentence`, reverse the order of its `words` without affecting the order of letters within a given word.


**Example 1:**

```
Input: sentence = "We love Python"
Output: "Python love We"
```

**Example 2:**

```
Input: sentence = "Hey"
Output: "Hey"
```

## Constraints:
- The length of the sentence should be equal to or more than one character or word.
- Sentence contains English uppercase and lowercase letters, digits, and spaces.
- 1 ≤ `sentence.length` ≤ 10<sup>4</sup>
- The order of the letters within a word is not to be reversed.

> Note: The input string may contain leading or trailing spaces or multiple spaces between words. The returned string, however, should only have a single space separating each word. Do not include any extra spaces.


## Approach 1: Using Inbuild Method

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
def reverse_words(s):
    return s.split()[::-1]

```
</TabItem>
</Tabs>