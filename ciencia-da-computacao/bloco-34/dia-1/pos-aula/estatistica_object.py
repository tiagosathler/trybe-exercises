from src.estatistica import Estatistica

my_list = Estatistica([0, 1, 2, 3, 4, 5, 6])
print(f"média: {my_list.media()}")
print(f"mediana: {my_list.mediana()}")
print(f"moda: {my_list.moda()}")


my_list = Estatistica([5, 7, 12, -3, 5, 4, 45, 600])
print(f"média: {my_list.media()}")
print(f"mediana: {my_list.mediana()}")
print(f"moda: {my_list.moda()}")

try:
    my_list = Estatistica([5, 7, 12, -3, "a", 4, 45, 600])
except ValueError as err:
    print(f"Deu ruim: {err}")

try:
    my_list = Estatistica([])
except ValueError as err:
    print(f"Deu ruim: {err}")
