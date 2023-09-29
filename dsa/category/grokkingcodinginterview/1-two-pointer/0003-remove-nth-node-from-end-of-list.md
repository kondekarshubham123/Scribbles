---
description: "Author: @kondekarshubham123"
tags: [Two Pointer]
---

# 3 - Remove nth Node From End of List

## Problem Statement

Given a singly linked list, remove the nth node from the end of the list and return its head.

**Example 1:**
```
Input: n = 3
23  ->  28  ->  10  ->  5   -> 67   ->  39  ->  70  -> Null

Output:
23  ->  28  ->  10  ->  5   ->  39  ->  70  -> Null
```

## Constraints:

- The number of nodes in the list is k.
- 1 ≤ k ≤ 10^4 
- −10^3 ≤ Node.value ≤10^3
- 1 ≤ n ≤ Number of nodes in the list

## Linked List Starter Code

<Tabs>
<TabItem value="py" label="LinkedListNode">
<SolutionAuthor name="@kondekarshubham123"/>

```python
# Template for linked list node class

class LinkedListNode:
    # __init__ will be used to make a LinkedListNode type object.
    def __init__(self, data, next=None):
        self.data = data
        self.next = next
```
</TabItem>

<TabItem value="py" label="LinkedList">
<SolutionAuthor name="@kondekarshubham123"/>

```python
from linked_list_node import LinkedListNode

# Template for the linked list
class LinkedList:
    # __init__ will be used to make a LinkedList type object.
    def __init__(self):
        self.head = None

    # insert_node_at_head method will insert a LinkedListNode at head
    # of a linked list.
    def insert_node_at_head(self, node):
        if self.head:
            node.next = self.head
            self.head = node
        else:
            self.head = node

    # create_linked_list method will create the linked list using the
    # given integer array with the help of InsertAthead method.
    def create_linked_list(self, lst):
        for x in reversed(lst):
            new_node = LinkedListNode(x)
            self.insert_node_at_head(new_node)
    
    # __str__(self) method will display the elements of linked list.
    def __str__(self):
        result = ""
        temp = self.head
        while temp:
            result += str(temp.data)
            temp = temp.next
            if temp:
                result += ", "
        result += ""
        return result
```
</TabItem>
</Tabs>


## Approch 1: Using Two Pointer approch

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```python
from linked_list import LinkedList
from linked_list_node import LinkedListNode

def remove_nth_last_node(head, n):
    dummy = LinkedList()
    dummy.next = head
    first = dummy
    second = dummy

    for _ in range(n+1):
        first = first.next

    while first is not None:
        first = first.next
        second = second.next

    second.next = second.next.next

    return dummy.next
```
</TabItem>
</Tabs>