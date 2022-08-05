from src.classes.stack import Stack
from src.classes.stack_overflow import StackOverflow


class LimitStack(Stack):
    def __init__(self, limit: int):
        super().__init__()
        self.limit = limit

    def push(self, value) -> None:
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)
