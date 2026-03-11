from models import Dog, Cat, Parrot


def main():
    # Create objects from each class
    dog = Dog("Buddy", 5, "Golden Retriever")
    cat = Cat("Whiskers", 3, "orange")
    parrot = Parrot("Polly", 2, 50)

    # Store objects in a list
    animals = [dog, cat, parrot]

    # Iterate over the list and display info
    print("=== All Animals ===")
    for animal in animals:
        print(animal)

    # Demonstrate polymorphism — calling overridden speak() method
    print("\n=== Polymorphism: speak() ===")
    for animal in animals:
        print(animal.speak())

    # Call common method info()
    print("\n=== Animal Info ===")
    for animal in animals:
        print(animal.info())

    # Check if adult
    print("\n=== Adult Check ===")
    for animal in animals:
        status = "adult" if animal.is_adult() else "young"
        print(f"{animal.name} is {status}")

    # Call unique methods
    print("\n=== Unique Methods ===")
    print(dog.fetch("ball"))
    print(cat.purr())
    print(parrot.mimic("Hello, world!"))


if __name__ == "__main__":
    main()
