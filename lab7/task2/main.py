from models import Dog, Cat, Parrot


def main():
    dog = Dog("Buddy", 5, "Golden Retriever")
    cat = Cat("Whiskers", 3, "orange")
    parrot = Parrot("Polly", 2, 50)

    animals = [dog, cat, parrot]

    print("=== All Animals ===")
    for animal in animals:
        print(animal)

    print("\n=== Polymorphism: speak() ===")
    for animal in animals:
        print(animal.speak())

    print("\n=== Animal Info ===")
    for animal in animals:
        print(animal.info())

    print("\n=== Adult Check ===")
    for animal in animals:
        status = "adult" if animal.is_adult() else "young"
        print(f"{animal.name} is {status}")

    print("\n=== Unique Methods ===")
    print(dog.fetch("ball"))
    print(cat.purr())
    print(parrot.mimic("Hello, world!"))


if __name__ == "__main__":
    main()
