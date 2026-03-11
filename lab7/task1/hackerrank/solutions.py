# HackerRank Python — 10 Problems

# 1. Say "Hello, World!" With Python
print("Hello, World!")

# 2. Python If-Else
n = int(input())
if n % 2 != 0:
    print("Weird")
elif 2 <= n <= 5:
    print("Not Weird")
elif 6 <= n <= 20:
    print("Weird")
else:
    print("Not Weird")

# 3. Arithmetic Operators
a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)

# 4. Python: Division
a = int(input())
b = int(input())
print(a // b)
print(a / b)

# 5. Loops
n = int(input())
for i in range(n):
    print(i * i)

# 6. Write a function (is_leap)
def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0

# 7. Print Function
n = int(input())
print(*range(1, n + 1), sep="")

# 8. List Comprehensions
x = int(input())
y = int(input())
z = int(input())
n = int(input())
result = [
    [i, j, k]
    for i in range(x + 1)
    for j in range(y + 1)
    for k in range(z + 1)
    if i + j + k != n
]
print(result)

# 9. Find the Runner-Up Score
n = int(input())
arr = list(map(int, input().split()))
print(sorted(set(arr))[-2])

# 10. Nested Lists
records = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    records.append([name, score])
second_lowest = sorted(set(s for _, s in records))[1]
for name in sorted(n for n, s in records if s == second_lowest):
    print(name)
