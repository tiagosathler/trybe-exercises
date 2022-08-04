class Node:
    def __init__(self, node) -> None:
        self.node = node  # 🎲 Dado a ser armazenado
        self.next = None  # 👉 Forma de apontar para outro nó

    def __str__(self) -> str:
        return f"Node(value={self.node}, next={self.next})"
