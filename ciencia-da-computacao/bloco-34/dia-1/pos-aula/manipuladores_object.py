from src.manipuladores import Log, LogEmTela, LogEmArquivo

my_log = Log({LogEmTela, LogEmArquivo})

my_log.info("Exemplo de 'info'")
my_log.alerta("Exemplo de 'alerta'")
my_log.alerta("Exemplo de 'alerta'")
my_log.erro("Exemplo de 'erro'")
my_log.debug("Exemplo de 'debug'")
