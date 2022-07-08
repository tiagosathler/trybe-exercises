from src.imposto.orcamento import Orcamento
from src.imposto.impostos import (
    ISS,
    ICMS,
    PIS,
    COFINS,
)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(ISS)}")
print(f"ICMS: {orcamento.calcular_imposto(ICMS)}")
print(f"PIS: {orcamento.calcular_imposto(PIS)}")
print(f"COFINS: {orcamento.calcular_imposto(COFINS)}")
