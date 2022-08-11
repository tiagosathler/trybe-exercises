class Employee:
    def __init__(self, id: int, name: str):
        self.id = id
        self.name = name


class HashMap:
    def __init__(self):
        self.__buckets = [None for i in range(10)]

    def hash_function(self, id: int) -> int:
        return id % 10

    def insert(self, employee: Employee) -> None:
        index = self.hash_function(employee.id)
        self.__buckets[index] = employee

    def get_name(self, id: int) -> str:
        index = self.hash_function(id)
        return self.__buckets[index].name

    def has(self, id: int) -> bool:
        index = self.hash_function(id)
        return bool(self.__buckets[index])

    def update(self, id: int, name: str) -> None:
        if self.has(id):
            index = self.hash_function(id)
            self.__buckets[index].name = name


if __name__ == "__main__":

    employees = [
        (14, "Zezinho"),
        (23, "Fulano"),
        (10, "Mariazinha"),
        (9, "Ciclano"),
    ]
    registry = HashMap()

    for id, name in employees:
        employee = Employee(id, name)
        registry.insert(employee)

    for (id, _) in employees:
        print(f"id: {id}, name: {registry.get_name(id)}")

    print(registry.has(15))
    print(registry.has(9))

    registry.update(14, "Manuelzinho")
    print(registry.get_name(14))
