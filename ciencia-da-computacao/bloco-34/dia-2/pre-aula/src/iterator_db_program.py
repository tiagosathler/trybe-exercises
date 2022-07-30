from iterator.db_simulator import DbSimulator
from iterator.database_iterator import DatabaseIterator

# Primeiro instanciamos o ITERÁVEL
record_paginator = DatabaseIterator(DbSimulator(), "select * from person")

# Em seguida podemos usar o for pra iterar
# Nesse momento o ITERADOR é criado implicitamente
for page in record_paginator:
    # faz algo com a pagina, que é uma lista de resultados
    for record in page:
        print(record["name"])
