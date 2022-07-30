from src.combo.combo import Combo
from src.combo.itens import (
    ItemFritas,
    ItemHamburger,
    ItemRefrigerante,
    ItemSorvete,
)


class ComboTudo(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemSorvete())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())


class ComboFeliz(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())


class ComboGelado(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemSorvete())
