def sort_animals(animals, order):
    animals.sort(key=str.lower, reverse= order)
    return animals

animals = ["dog", "cat", "elephant", "zebra", "bee", "fish", "dolphin"]
print(sort_animals(animals, True))