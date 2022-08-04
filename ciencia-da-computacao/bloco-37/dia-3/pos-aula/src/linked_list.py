from src.node import Node


class LinkedList:
    def __init__(self) -> None:
        self.head_node = None
        self.__length = 0

    def __str__(self) -> str:
        return f"LinkedList(len={self.__length}, nodes={self.head_node})"

    def __len__(self) -> int:
        return self.__length

    def insert_first(self, value: int) -> None:
        first_node = Node(value)
        first_node.next = self.head_node
        self.head_node = first_node
        self.__length += 1

    def insert_last(self, value: int) -> None:
        if self.is_empty():
            return self.insert_first(value)

        last_node = Node(value)
        current_node = self.head_node

        while current_node.next:
            current_node = current_node.next

        current_node.next = last_node
        self.__length += 1

    def insert_at(self, value: int, position: int) -> None:
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        current_node = self.head_node

        while position > 1:
            current_node = current_node.next
            position -= 1

        next_node = Node(value)
        next_node.next = current_node.next
        current_node.next = next_node
        self.__length += 1

    def remove_first(self) -> Node:
        node_to_be_removed = self.head_node

        if node_to_be_removed:
            self.head_node = self.head_node.next
            node_to_be_removed.next = None
            self.__length -= 1

        return node_to_be_removed

    def remove_last(self) -> Node:
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.head_node

        while previous_to_be_removed.next.next:
            previous_to_be_removed = previous_to_be_removed.next

        node_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return node_to_be_removed

    def remove_at(self, position: int) -> Node:
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.head_node

        while position > 1:
            previous_to_be_removed = previous_to_be_removed.next
            position -= 1

        node_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = node_to_be_removed.next
        node_to_be_removed.next = None
        self.__length -= 1

        return node_to_be_removed

    def get_element_at(self, position: int) -> int:
        node_returned = None
        node_to_be_returned = self.head_node

        if self.head_node:
            while position > 0 and node_to_be_returned.next:
                node_to_be_returned = node_to_be_returned.next
                position -= 1

            if position == 0:
                node_returned = node_to_be_returned

        return node_returned

    def is_empty(self) -> bool:
        return not self.__length
