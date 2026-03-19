count = 0
while True:
    n = int(input())
    if n == 0:
        break
    count += 1
print(count)

total = 0
while True:
    n = int(input())
    if n == 0:
        break
    total += n
print(total)

maximum = None
while True:
    n = int(input())
    if n == 0:
        break
    if maximum is None or n > maximum:
        maximum = n
print(maximum)

n = int(input())
a, b = 0, 1
while a <= n:
    print(a, end=" ")
    a, b = b, a + b
print()

a = int(input())
b = int(input())
while b:
    a, b = b, a % b
print(a)
