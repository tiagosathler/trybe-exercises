alunos_reprovados = []

with open("notas_alunos.txt", mode="r") as arquivo_notas_alunos:
    notas_alunos = arquivo_notas_alunos.read().split("\n")
    for linha in notas_alunos:
        nota_aluno = linha.split()
        if int(nota_aluno[1]) < 6:
            alunos_reprovados.append(nota_aluno[0])

with open("alunos_reprovados.text", mode="w") as arquivo_alunos_reprovados:
    for aluno in alunos_reprovados:
        arquivo_alunos_reprovados.write(f"{aluno}\n")
