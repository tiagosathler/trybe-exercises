from jedi import Jedi


class JediAdapter:
    def __init__(self, jedi: Jedi):
        self._jedi = jedi

    def attack(self):
        return self._jedi.attackWithSaber()
