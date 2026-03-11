# Informatics.msk.ru — Arrays/Lists (Problems A–G)

# Problem A: Read N numbers into a list, print them
n = int(input())
nums = list(map(int, input().split()))
print(*nums)

# Problem B: Find the maximum element in a list
n = int(input())
nums = list(map(int, input().split()))
print(max(nums))

# Problem C: Find the index of the maximum element
n = int(input())
nums = list(map(int, input().split()))
print(nums.index(max(nums)))

# Problem D: Reverse the list
n = int(input())
nums = list(map(int, input().split()))
print(*nums[::-1])

# Problem E: Count elements greater than their neighbors
n = int(input())
nums = list(map(int, input().split()))
count = 0
for i in range(1, n - 1):
    if nums[i] > nums[i - 1] and nums[i] > nums[i + 1]:
        count += 1
print(count)

# Problem F: Shift elements to the right by 1
n = int(input())
nums = list(map(int, input().split()))
shifted = [nums[-1]] + nums[:-1]
print(*shifted)

# Problem G: Sort the list
n = int(input())
nums = list(map(int, input().split()))
nums.sort()
print(*nums)
