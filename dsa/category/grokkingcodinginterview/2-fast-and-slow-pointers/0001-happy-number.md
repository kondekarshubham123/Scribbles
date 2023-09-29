---
description: "Author: @kondekarshubham123"
tags: [Fast and slow pointers]
---

# 1 - Happy Number

## Problem Statement

## Approch 1: Fast and slow pointers approch

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python

def is_happy_number(n):
    split = lambda num: sum(list(map(lambda x: int(x) ** 2, list(str(num)))))

    one = n
    two = split(n)

    while two != 1 and one != two:
        one = split(one)
        two = split(split(two))

    return two == 1
```

</TabItem>
</Tabs>