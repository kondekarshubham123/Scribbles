
# Notes

## How to set up two pointers in an array


<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@educative.io"/>

```python
def two_pointers(array):
    left = 0
    right = len(array) - 1
    while left <= right:
        left = left + 1
        right = right -1 
    
```
</TabItem>
</Tabs>
