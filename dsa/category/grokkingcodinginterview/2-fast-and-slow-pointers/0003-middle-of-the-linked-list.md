---
description: "Author: @kondekarshubham123"
tags: [Fast and slow pointers]
---

# 3 - Middle of the linked list

## Problem Statement

## Approch 1: Fast and slow pointers approch

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
from linked_list import LinkedList

def get_middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

   
```

</TabItem>
</Tabs>