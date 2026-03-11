class Animal:
    """Base class representing an animal."""

    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return f"{self.name} makes a sound"

    def info(self):
        return f"{self.name} is a {self.age}-year-old {self.species}"

    def is_adult(self):
        return self.age >= 3

    def __str__(self):
        return f"{self.species} named {self.name}, age {self.age}"


class Dog(Animal):
    """Dog class inheriting from Animal."""

    def __init__(self, name, age, breed):
        super().__init__(name, age, species="Dog")
        self.breed = breed

    def speak(self):
        return f"{self.name} says: Woof! Woof!"

    def fetch(self, item):
        return f"{self.name} fetches the {item}"

    def __str__(self):
        return f"Dog named {self.name}, breed {self.breed}, age {self.age}"


class Cat(Animal):
    """Cat class inheriting from Animal."""

    def __init__(self, name, age, color):
        super().__init__(name, age, species="Cat")
        self.color = color

    def speak(self):
        return f"{self.name} says: Meow!"

    def purr(self):
        return f"{self.name} is purring..."

    def __str__(self):
        return f"Cat named {self.name}, color {self.color}, age {self.age}"


class Parrot(Animal):
    """Parrot class inheriting from Animal."""

    def __init__(self, name, age, vocabulary_size):
        super().__init__(name, age, species="Parrot")
        self.vocabulary_size = vocabulary_size

    def speak(self):
        return f"{self.name} says: Polly wants a cracker!"

    def mimic(self, phrase):
        return f"{self.name} repeats: '{phrase}'"

    def __str__(self):
        return (
            f"Parrot named {self.name}, age {self.age}, "
            f"knows {self.vocabulary_size} words"
        )
