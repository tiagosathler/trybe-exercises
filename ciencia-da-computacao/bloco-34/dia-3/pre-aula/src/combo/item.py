from abc import ABC, abstractmethod


class Item(ABC):
    @abstractmethod
    def __repr__(self):
        pass
