from platform import platform, system, release, architecture, machine


def get_platform() -> None:
    print(
        f"Sumário: {platform()}\n"
        f"Plataforma: {system()}\n"
        f"Máquina: {machine()}\n"
        f"Versão: {release()}\n"
        f"Arquitetura: {architecture()[0]}\n"
    )


if __name__ == "__main__":
    get_platform()
