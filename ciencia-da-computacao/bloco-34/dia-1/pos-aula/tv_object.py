from src.tv import Tv
X = 100

tv = Tv(14)
print(tv)

print("-" * X)
tv.ligar_desligar()
print(tv)

print("-" * X)
tv.modificar_canal(14)
print(tv)

print("-" * X)
n = 15
while n > 0:
    tv.aumentar_volume()
    n -= 1

print(tv)

print("-" * X)
n = 30
while n > 0:
    tv.diminuir_volume()
    n -= 1

print(tv)

print("-" * X)
tv.ligar_desligar()
print(tv)

print("-" * X)
try:
    tv.modificar_canal(17)
except Exception as err:
    print(f"Deu ruim, tv desligada: <{err}>")
else:
    print(tv)

print("-" * X)
tv.ligar_desligar()
try:
    tv.modificar_canal(100)
except Exception as err:
    print(f"Deu ruim ao mudar o canal: <{err}>")
else:
    print(tv)

print("-" * X)
try:
    tv.modificar_canal(0)
except Exception as err:
    print(f"Deu ruim ao mudar o canal: <{err}>")
else:
    print(tv)

print("-" * X)
n = 100
while n > 0:
    tv.aumentar_volume()
    n -= 1

print(tv)

print("-" * X)
n = 100
while n > 0:
    tv.diminuir_volume()
    n -= 1

print(tv)
