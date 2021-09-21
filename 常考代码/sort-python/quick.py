def quick_sort(alist, left, right) -> None:
    if left >= right:
        return
    low = left 
    high = right
    pivot = alist[left]
    while left < right:
        while left<right and alist[right] >= pivot:
            right-=1
        alist[left] = alist[right]
        while left<right and alist[left] < pivot:
            left+=1
        alist[right] = alist[left]
    alist[right] = pivot

    quick_sort(alist, low, left-1)
    quick_sort(alist, left+1, high)
    return alist




def qsort(array):
    if len(array) < 2:
        return array
    pivot = array[0]
    less = [i for i in array[1:] if i <= pivot]
    more = [i for i in array[1:] if i > pivot]
    return qsort(less) + [pivot] + qsort(more)