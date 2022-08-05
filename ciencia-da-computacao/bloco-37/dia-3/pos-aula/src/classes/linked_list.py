from src.classes.node import Node


class LinkedList:
    def __init__(self) -> None:
        self.head_node = None
        self.__length = 0

    def __str__(self) -> str:
        """
        Complexidade: O(1)
        """
        return f"LinkedList(len={self.__length}, nodes={self.head_node})"

    def __len__(self) -> int:
        """
        Complexidade: O(1)
        """
        return self.__length

    def insert_first(self, value: int) -> None:
        """
        Complexidade: O(1)
        """
        first_node = Node(value)
        first_node.next = self.head_node
        self.head_node = first_node
        self.__length += 1

    def insert_last(self, value: int) -> None:
        """
        Complexidade: O(1) ??
        """
        if self.is_empty():
            return self.insert_first(value)

        last_node = Node(value)
        current_node, _ = self.__get_node_at(len(self) - 1)

        current_node.next = last_node
        self.__length += 1

    def __get_node_at(self, position) -> tuple[Node, int]:
        """
        Complexidade: O(n)
        """
        node_to_be_returned = self.head_node

        if node_to_be_returned:
            while position > 0 and node_to_be_returned.next:
                node_to_be_returned = node_to_be_returned.next
                position -= 1

        return node_to_be_returned, position

    def insert_at(self, value: int, position: int) -> None:
        """
        Complexidade: O(n)
        """
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        current_node, _ = self.__get_node_at(position - 1)

        next_node = Node(value)
        next_node.next = current_node.next
        current_node.next = next_node
        self.__length += 1

    def remove_first(self) -> Node:
        """
        Complexidade: O(1)
        """
        node_to_be_removed = self.head_node

        if node_to_be_removed:
            self.head_node = self.head_node.next
            node_to_be_removed.next = None
            self.__length -= 1

        return node_to_be_removed

    def remove_last(self) -> Node:
        """
        Complexidade: O(1) ??
        """
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed, _ = self.__get_node_at(len(self) - 2)
        node_to_be_removed = previous_to_be_removed.next

        previous_to_be_removed.next = None
        self.__length -= 1
        return node_to_be_removed

    def remove_at(self, position: int) -> Node:
        """
        Complexidade: O(n)
        """
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed, _ = self.__get_node_at(position - 1)
        node_to_be_removed = previous_to_be_removed.next

        previous_to_be_removed.next = node_to_be_removed.next
        node_to_be_removed.next = None
        self.__length -= 1

        return node_to_be_removed

    def get_element_at(self, position: int) -> int:
        """
        Complexidade: O(n)
        """
        node_returned = None
        node_to_be_returned, p = self.__get_node_at(position)

        if p == 0:
            node_returned = node_to_be_returned

        return node_returned

    def is_empty(self) -> bool:
        """
        Complexidade: O(1)
        """
        return not self.__length

    def clear(self) -> None:
        """
        Complexidade: O(n)
        """
        while not self.is_empty():
            self.remove_first()

    def index_of(self, value):
        """
        Complexidade: O(n)
        """
        index = 0
        current_node = self.head_node

        while current_node:
            if current_node.value == value:
                return index
            current_node = current_node.next
            index += 1

        return -1

    def delete_duplicates(self) -> None:
        """
        Complexidade: O(n²)
        """
        list_of_nodes = []

        for index in range(self.__length):
            node, _ = self.__get_node_at(index)
            list_of_nodes.append((node.value, index))

        values = [value for (value, _) in list_of_nodes]

        trim = 0

        for (value, index) in list_of_nodes:
            if values.count(value) > 1:
                values.pop(index - trim)
                self.remove_at(index - trim)
                trim += 1
