# Informatics.msk.ru — While Loop (Problems A–E)

# Problem A: Read numbers until 0, print their count
count = 0
while True:
    n = int(input())
    if n == 0:
        break
    count += 1
print(count)

# Problem B: Read numbers until 0, print their sum
total = 0
while True:
    n = int(input())
    if n == 0:
        break
    total += n
print(total)

# Problem C: Read numbers until 0, find the maximum
maximum = None
while True:
    n = int(input())
    if n == 0:
        break
    if maximum is None or n > maximum:
        maximum = n
print(maximum)

# Problem D: Fibonacci sequence up to N
n = int(input())
a, b = 0, 1
while a <= n:
    print(a, end=" ")
    a, b = b, a + b
print()

# Problem E: GCD of two numbers (Euclidean algorithm)
a = int(input())
b = int(input())
while b:
    a, b = b, a % b
print(a)
