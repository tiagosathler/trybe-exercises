# from gerenciator3000 import ReportLoader
from src.adapter.loader_adapter import G3000LoaderAdapter
from src.adapter.report_analyzer import ReportAnalyzer

# o loader da ferramenta é carregado do jeito que a ferramenta recomenda
g3000_loader = {
    "headers": ["id", "date", "final_price"],
    "rows": [[1337, "2020-11-20", 2350.5], [1338, "2020-11-21", 4800.5]],
}
# o adaptador recebe o loader da ferramenta
loader = G3000LoaderAdapter(g3000_loader)
# o analyzer do nosso sistema recebe o adaptador como qualquer outro loader
analyzer = ReportAnalyzer(loader)

print(analyzer.average())  # Agora funcionará
