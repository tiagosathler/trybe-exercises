class G3000LoaderAdapter:
    # aqui o loader é uma instancia do gerenciator3000.ReportLoader original
    def __init__(self, loader: dict):
        self.loader = loader

    def load_data(self):

        # Em python, o zip() junta uma lista de chaves em uma lista de valores
        # e cria um dicionário! por exemplo:
        # zip(['nome', 'idade'], ['Juliana', 27])
        # {'nome': 'Juliana', 'idade': 27}

        return [
            dict(zip(self.loader["headers"], row))
            for row in self.loader["rows"]
        ]
