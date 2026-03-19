def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True


num = int(input())
print("YES" if is_prime(num) else "NO")


def power(base, exp):
    result = 1
    for _ in range(exp):
        result *= base
    return result


a = int(input())
b = int(input())
print(power(a, b))


def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


x = int(input())
y = int(input())
print(gcd(x, y))
