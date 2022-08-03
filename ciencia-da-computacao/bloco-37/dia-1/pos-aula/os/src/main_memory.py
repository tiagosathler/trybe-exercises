class MainMemory:
    def __init__(self):
        self.clean()
        self.loaded_memory = []

    def load(self, value) -> None:
        self.loaded_memory.append(value)

    def get(self, index) -> int:
        return int(self.loaded_memory[index], base=10)

    def clean(self) -> None:
        self.loaded_memory = []
