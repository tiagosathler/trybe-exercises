class Stack:
    def __init__(self):
        self._data = list()

    def size(self) -> int:
        return len(self._data)

    def is_empty(self) -> bool:
        return not bool(self.size())

    def push(self, value: int | float | str) -> None:
        self._data.append(value)

    def pop(self) -> None | int | float | str:
        if self.is_empty():
            return None

        # -1 se refere ao último objeto da pilha.
        # Ou seja, o valor do topo da pilha
        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self) -> None | int | float | str:
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    def min_value(self) -> None | int | float | str:
        if self.is_empty():
            return None

        min_value = self._data[0]
        for elem in self._data:
            if elem < min_value:
                min_value = elem
        return min_value

    def clear(self) -> None:
        self._data.clear()

    def __str__(self) -> str:
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"
