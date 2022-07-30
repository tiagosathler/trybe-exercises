from src.baralho.baralho_iterable import Baralho
from src.baralho.estrategias import EstrategiaRegular, EstrategiaReversa

baralho_regular = Baralho(EstrategiaRegular)
baralho_reverso = Baralho(EstrategiaReversa)

for carta in baralho_regular:
    print(carta)

print("-" * 50)

for carta in baralho_reverso:
    print(carta)

print("-" * 50)

print(baralho_regular)

print("-" * 50)

print(baralho_reverso)
