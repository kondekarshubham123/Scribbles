---
description: "Author: @kondekarshubham123"
tags: [Fast and slow pointers]
---

# 2 - Linked List Cycle

## Problem Statement

## Approch 1: Fast and slow pointers approch

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
from linked_list import LinkedList

def detect_cycle(head):
   if head == None or head.next == None:
      return False
   
   slow_pointer = head
   fast_pointer = head.next

   while fast_pointer.next and fast_pointer.next.next and slow_pointer != fast_pointer:
      slow_pointer = slow_pointer.next
      fast_pointer = fast_pointer.next.next

   return slow_pointer == fast_pointer
```

</TabItem>
</Tabs>