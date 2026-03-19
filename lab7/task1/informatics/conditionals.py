n = int(input())
if n > 0:
    print("Positive")
elif n < 0:
    print("Negative")
else:
    print("Zero")

a = int(input())
b = int(input())
print(max(a, b))

a = int(input())
b = int(input())
c = int(input())
print(max(a, b, c))

year = int(input())
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("YES")
else:
    print("NO")

a = int(input())
b = int(input())
c = int(input())
nums = sorted([a, b, c])
print(*nums)
