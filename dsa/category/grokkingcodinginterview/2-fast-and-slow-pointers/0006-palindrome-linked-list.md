---
description: "Author: @kondekarshubham123"
tags: [Fast and slow pointers]
---

# 6 - Palindrome linked list

## Problem Statement

## Approch 1: Fast and slow pointers approch

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
from linked_list import LinkedList
from linked_list_reverse import reverse_linked_list


def get_middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

def palindrome(head):

    if head == None:
        return True

    middle = get_middle_node(head)
    last = reverse_linked_list(middle)
    curr = head

    while last != None:

        if(last.data != curr.data):
            return False
        
        last = last.next
        curr = curr.next

    return True
   
```

</TabItem>
</Tabs>