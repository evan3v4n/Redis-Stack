def insertionSort(arr): 
    for i in range (1, len(arr)):
        print(arr, "\n")
        j = i-1
        while j >= 0 and arr[j+1] < arr[j]:
            print("in while loop: ",arr)
            tmp = arr[j+1]
            arr[j+1] = arr[j]
            arr[j] = tmp
            j -= 1
    return arr

print(insertionSort([x for x in range(10,0,-1)]))