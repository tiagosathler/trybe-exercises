function populateStates() {
  const selectStateElement = document.querySelector('#state');
  const stateAbbr = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  const stateName = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantis"];
  for (i = 0; i < stateAbbr.length; i += 1) {
    let optionElement = document.createElement('option');
    optionElement.text = stateName[i];
    optionElement.value = stateAbbr[i];
    selectStateElement.appendChild(optionElement);
  }

}


function initiate() {
  populateStates();

}

window.onload = initiate ;