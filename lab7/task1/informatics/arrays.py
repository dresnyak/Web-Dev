n = int(input())
nums = list(map(int, input().split()))
print(*nums)

n = int(input())
nums = list(map(int, input().split()))
print(max(nums))

n = int(input())
nums = list(map(int, input().split()))
print(nums.index(max(nums)))

n = int(input())
nums = list(map(int, input().split()))
print(*nums[::-1])

n = int(input())
nums = list(map(int, input().split()))
count = 0
for i in range(1, n - 1):
    if nums[i] > nums[i - 1] and nums[i] > nums[i + 1]:
        count += 1
print(count)

n = int(input())
nums = list(map(int, input().split()))
shifted = [nums[-1]] + nums[:-1]
print(*shifted)

n = int(input())
nums = list(map(int, input().split()))
nums.sort()
print(*nums)
