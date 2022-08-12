class Conjunto:
    def __init__(self, tamanho: int):
        self.size = tamanho
        self.set = [False for _ in range(tamanho + 1)]
        self.last_element = 0

    def add(self, item: int):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self) -> str:
        response = "{"

        for i, i_is_in_set in enumerate(self.set):
            if i_is_in_set:
                response += str(i)
                if i < self.last_element:
                    response += ", "

        response += "}"
        return response

    def is_in(self, item: int):
        return self.set[item]

    def union(self, other_set):
        new_set = Conjunto(self.size)

        for i in range(self.size + 1):
            if self.set[i] or other_set.set[i]:
                new_set.add(i)

        return new_set

    def intersection(self, other_set):
        new_set = Conjunto(self.size)

        for i in range(self.size + 1):
            if self.set[i] and other_set.set[i]:
                new_set.add(i)

        return new_set

    def difference(self, other_set):
        new_set = Conjunto(self.size)

        for i in range(self.size + 1):
            if self.set[i] and not other_set.set[i]:
                new_set.add(i)

        return new_set

    def issubset(self, other_set):
        for i in range(self.size + 1):
            if self.set[i] and not other_set.set[i]:
                return False

        return True

    def issuperset(self, other_set):
        for i in range(self.size + 1):
            if other_set.set[i] and not self.set[i]:
                return False

        return True
