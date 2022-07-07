from src.strategy.banco import Banco

from src.strategy.bancos_strategies import (
    ItauStrategy,
    SantanderStrategy,
    BradescoStrategy,
)


Banco(ItauStrategy).debitar(120, 123)
Banco(SantanderStrategy).debitar(110, 456)
Banco(BradescoStrategy).debitar(120, 789)
