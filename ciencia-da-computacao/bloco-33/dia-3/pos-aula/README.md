Criar e iniciar o Ambiente Virtual
python3 -m venv .venv
source .venv/bin/activate

Instalar as dependências do projeto
pip install -r dev-requirements.txt

Executar os testes
python -m pytest

Desativar ambiente virtual
deactivate
