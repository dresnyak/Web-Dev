n = int(input())
for i in range(1, n + 1):
    print(i)

n = int(input())
for i in range(n, 0, -1):
    print(i)

n = int(input())
print(sum(range(1, n + 1)))

n = int(input())
print(sum(i for i in range(1, n + 1) if i % 2 == 0))

n = int(input())
result = 1
for i in range(1, n + 1):
    result *= i
print(result)

n = input()
print(len(n))

n = input()
print(sum(int(d) for d in n))

n = input()
print(n[::-1])

a = int(input())
b = int(input())
print(a ** b)

n = int(input())
for i in range(1, 11):
    print(f"{n} * {i} = {n * i}")

n = input()
d = input()
print(n.count(d))

n = input()
print("YES" if n == n[::-1] else "NO")

n = int(input())
for i in range(1, n + 1):
    if n % i == 0:
        print(i, end=" ")
print()
