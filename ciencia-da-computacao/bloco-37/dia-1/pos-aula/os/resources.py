from subprocess import check_output

# Processador
cpu_information = check_output("lscpu").decode("UTF-8").split("\n")
for information in cpu_information:
    print(information)


desired_cpu_information = {
    "nome do modelo": "Modelo",
    "cpu(s)": "Cores",
    "cpu mhz": "Velocidade (MHz)",
    "cache de L1d": "Cache L1d",
    "cache de L1i": "Cache L1i",
    "cache de L2": "Cache L2",
    "cache de L3": "Cache L3",
}

print("SUMÁRIO:\n")

for key, value in desired_cpu_information.items():
    for information in cpu_information:
        if information.lower().startswith(key.lower()):
            information = information.split("  ")  # 2 blank spaces
            information = information[-1].strip()
            print(f"{value}: {information}")

# Memória
memory_information = [
    information
    for information in check_output("free")
    .decode("UTF-8")
    .split("\n")[1]
    .split(" ")
    if information != ""
]
total_memory = int(memory_information[1]) / 1000
used_memory = int(memory_information[2]) / 1000
print(
    f"Memória total: {total_memory:.0f}MB\n"
    f"Memória utilizada: {used_memory:.0f}MB"
)
