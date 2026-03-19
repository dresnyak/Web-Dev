print("Hello, World!")

n = int(input())
if n % 2 != 0:
    print("Weird")
elif 2 <= n <= 5:
    print("Not Weird")
elif 6 <= n <= 20:
    print("Weird")
else:
    print("Not Weird")

a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)

a = int(input())
b = int(input())
print(a // b)
print(a / b)

n = int(input())
for i in range(n):
    print(i * i)

def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0

n = int(input())
print(*range(1, n + 1), sep="")

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

n = int(input())
arr = list(map(int, input().split()))
print(sorted(set(arr))[-2])

records = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    records.append([name, score])
second_lowest = sorted(set(s for _, s in records))[1]
for name in sorted(n for n, s in records if s == second_lowest):
    print(name)
