from src.classes.linked_list import LinkedList
from src.classes.node import Node


class Stack:
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self) -> bool:
        return not len(self.__data)

    def push(self, value: int) -> None:
        self.__data.insert_last(value)

    def pop(self) -> Node:
        return self.__data.remove_last()

    def peek(self) -> Node:
        return self.__data.get_element_at(len(self.__data) - 1)
