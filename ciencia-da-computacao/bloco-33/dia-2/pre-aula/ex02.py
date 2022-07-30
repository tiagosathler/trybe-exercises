recebido = input("Digite os números separados por espaço: ")

lista = recebido.split()

numeros = []

for elemento in lista:
    if elemento.isdigit():
        numeros.append(int(elemento))
    else:
        print(f"Erro ao somar valores: '{elemento}' é um valor inválido")

print(sum(numeros))
