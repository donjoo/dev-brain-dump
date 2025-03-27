class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]  # Chaining method

    def hash_function(self, key):
        return sum(ord(char) for char in key) % self.size

    def insert(self, key, value):
        index = self.hash_function(key)
        self.table[index].append((key, value))

    def get(self, key):
        index = self.hash_function(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None  # Key not found

    def delete(self, key):
        index = self.hash_function(key)
        self.table[index] = [(k, v) for k, v in self.table[index] if k != key]

# Example usage:
ht = HashTable()
ht.insert("name", "Alice")
ht.insert("age", 25)

print(ht.get("name"))  # Output: Alice
print(ht.get("age"))   # Output: 25

ht.delete("name")
print(ht.get("name"))  # Output: None
