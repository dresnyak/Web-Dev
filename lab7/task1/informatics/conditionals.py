# Informatics.msk.ru — Conditional Statements (Problems A–E)

# Problem A: Check if a number is positive, negative, or zero
n = int(input())
if n > 0:
    print("Positive")
elif n < 0:
    print("Negative")
else:
    print("Zero")

# Problem B: Find the maximum of two numbers
a = int(input())
b = int(input())
print(max(a, b))

# Problem C: Find the maximum of three numbers
a = int(input())
b = int(input())
c = int(input())
print(max(a, b, c))

# Problem D: Check if a year is a leap year
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("YES")
else:
    print("NO")

# Problem E: Sort three numbers in ascending order
a = int(input())
b = int(input())
c = int(input())
nums = sorted([a, b, c])
print(*nums)
