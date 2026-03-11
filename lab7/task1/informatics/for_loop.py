# Informatics.msk.ru — For Loop (Problems A–M)

# Problem A: Print numbers from 1 to N
n = int(input())
for i in range(1, n + 1):
    print(i)

# Problem B: Print numbers from N down to 1
n = int(input())
for i in range(n, 0, -1):
    print(i)

# Problem C: Sum of numbers from 1 to N
n = int(input())
print(sum(range(1, n + 1)))

# Problem D: Sum of even numbers from 1 to N
n = int(input())
print(sum(i for i in range(1, n + 1) if i % 2 == 0))

# Problem E: Factorial of N
n = int(input())
result = 1
for i in range(1, n + 1):
    result *= i
print(result)

# Problem F: Count digits in a number
n = input()
print(len(n))

# Problem G: Sum of digits
n = input()
print(sum(int(d) for d in n))

# Problem H: Reverse a number
n = input()
print(n[::-1])

# Problem I: Power of a number (a^b)
a = int(input())
b = int(input())
print(a ** b)

# Problem J: Print multiplication table for N
n = int(input())
for i in range(1, 11):
    print(f"{n} * {i} = {n * i}")

# Problem K: Count occurrences of a digit in a number
n = input()
d = input()
print(n.count(d))

# Problem L: Check if a number is a palindrome
n = input()
print("YES" if n == n[::-1] else "NO")

# Problem M: Find all divisors of N
n = int(input())
for i in range(1, n + 1):
    if n % i == 0:
        print(i, end=" ")
print()
