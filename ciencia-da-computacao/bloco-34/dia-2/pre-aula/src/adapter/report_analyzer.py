class ReportAnalyzer:
    def __init__(self, loader):
        self.loader = loader

    def average(self):
        # este é um dos métodos que espera uma lista de dicionários
        data = self.loader.load_data()
        print(data)
        # aqui ela soma o valor na chave final_price em cada item da lista
        total = sum([order['final_price'] for order in data])
        return total / len(data)
