# CodingBat Python Solutions

#  Warmup-1 

def sleep_in(weekday, vacation):
    return not weekday or vacation

def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile

def sum_double(a, b):
    if a == b:
        return 2 * (a + b)
    return a + b

def diff21(n):
    if n > 21:
        return 2 * abs(n - 21)
    return 21 - n

def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)

def makes10(a, b):
    return a == 10 or b == 10 or a + b == 10

def near_hundred(n):
    return abs(100 - n) <= 10 or abs(200 - n) <= 10

def pos_neg(a, b, negative):
    if negative:
        return a < 0 and b < 0
    return (a < 0) != (b < 0)

def not_string(str):
    if str.startswith("not"):
        return str
    return "not " + str

def missing_char(str, n):
    return str[:n] + str[n + 1:]

def front_back(str):
    if len(str) <= 1:
        return str
    return str[-1] + str[1:-1] + str[0]

def front3(str):
    front = str[:3]
    return front * 3


#  Warmup-2 

def string_times(str, n):
    return str * n

def front_times(str, n):
    return str[:3] * n

def string_bits(str):
    return str[::2]

def string_splosion(str):
    result = ""
    for i in range(len(str) + 1):
        result += str[:i]
    return result

def last2(str):
    if len(str) < 2:
        return 0
    last = str[-2:]
    count = 0
    for i in range(len(str) - 2):
        if str[i:i + 2] == last:
            count += 1
    return count

def array_count9(nums):
    return nums.count(9)

def array_front9(nums):
    return 9 in nums[:4]

def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i + 1] == 2 and nums[i + 2] == 3:
            return True
    return False

def string_match(a, b):
    shorter = min(len(a), len(b))
    count = 0
    for i in range(shorter - 1):
        if a[i:i + 2] == b[i:i + 2]:
            count += 1
    return count


#  String-1 

def hello_name(name):
    return "Hello " + name + "!"

def make_abba(a, b):
    return a + b + b + a

def make_tags(tag, word):
    return f"<{tag}>{word}</{tag}>"

def make_out_word(out, word):
    return out[:2] + word + out[2:]

def extra_end(str):
    return str[-2:] * 3

def first_two(str):
    return str[:2]

def first_half(str):
    return str[:len(str) // 2]

def without_end(str):
    return str[1:-1]

def combo_string(a, b):
    if len(a) < len(b):
        return a + b + a
    return b + a + b

def non_start(a, b):
    return a[1:] + b[1:]

def left2(str):
    return str[2:] + str[:2]


#  String-2 

def double_char(str):
    return "".join(c * 2 for c in str)

def count_hi(str):
    return str.count("hi")

def cat_dog(str):
    return str.count("cat") == str.count("dog")

def count_code(str):
    count = 0
    for i in range(len(str) - 3):
        if str[i:i + 2] == "co" and str[i + 3] == "e":
            count += 1
    return count

def end_other(a, b):
    a_lower = a.lower()
    b_lower = b.lower()
    return a_lower.endswith(b_lower) or b_lower.endswith(a_lower)

def xyz_there(str):
    for i in range(len(str) - 2):
        if str[i:i + 3] == "xyz" and (i == 0 or str[i - 1] != "."):
            return True
    return False


#  List-1 

def first_last6(nums):
    return nums[0] == 6 or nums[-1] == 6

def same_first_last(nums):
    return len(nums) >= 1 and nums[0] == nums[-1]

def make_pi():
    return [3, 1, 4]

def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]

def sum3(nums):
    return sum(nums)

def rotate_left3(nums):
    return [nums[1], nums[2], nums[0]]

def reverse3(nums):
    return nums[::-1]

def max_end3(nums):
    m = max(nums[0], nums[-1])
    return [m, m, m]

def sum2(nums):
    return sum(nums[:2])

def middle_way(a, b):
    return [a[1], b[1]]

def make_ends(nums):
    return [nums[0], nums[-1]]

def has23(nums):
    return 2 in nums or 3 in nums


#  List-2 

def count_evens(nums):
    return sum(1 for n in nums if n % 2 == 0)

def big_diff(nums):
    return max(nums) - min(nums)

def centered_average(nums):
    nums = sorted(nums)
    return sum(nums[1:-1]) // (len(nums) - 2)

def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
        else:
            total += nums[i]
            i += 1
    return total

def sum67(nums):
    total = 0
    in_block = False
    for n in nums:
        if n == 6:
            in_block = True
        elif in_block and n == 7:
            in_block = False
        elif not in_block:
            total += n
    return total

def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
    return False
