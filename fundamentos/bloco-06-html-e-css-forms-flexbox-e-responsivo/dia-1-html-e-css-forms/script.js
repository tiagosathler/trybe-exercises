function populateStates() {
  const selectStateElement = document.querySelector("#state");
  const stateAbbr = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  const stateName = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás",  "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantis"];
  for (i = 0; i < stateAbbr.length; i += 1) {
    const optionElement = document.createElement("option");
    optionElement.text = stateName[i];
    optionElement.value = stateAbbr[i];
    selectStateElement.appendChild(optionElement);
  }
}

function checkDateFormat(string) {
  if (string !== "") {
    const regex = /\d{4}|\d{1,2}/g;
    const dateArray = string.match(regex);
    const year = parseInt(dateArray[2], 10);
    const month = parseInt(dateArray[1], 10);
    const day = parseInt(dateArray[0], 10);
    const today = new Date();
    const yearToday = today.getFullYear();
    if (year < yearToday - 100 || year > yearToday) {
      window.alert("Ano fora do intervalo! Insira a data no formato 'dd/mm/aaaa'");
    } else if (month <= 0 || month > 12) {
      window.alert("Mês fora do intervalo! Insira a data no formato 'dd/mm/aaaa'");
    } else {
      const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        daysInMonths[1] = 29;
      }
      if (!(day > 0 && day <= daysInMonths[month - 1])) {
        window.alert("O dia não confere ao mês!");
      } else {
        const date = new Date(year, month - 1, day);
        if (Number(date) > Number(today)) {
          window.alert("Você está um pouco no futuro... corrija a data!");
        } else {
          return true;
        }
      }
    }
  }
  return false;
}

function initiate() {
  populateStates();
  const form = document.querySelector("#personal-record");
  let consolidate = document.querySelector("#consolidate");

  form.addEventListener("reset", function (event) {
    event.preventDefault();
    consolidate.innerText = "";
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const stringDateValue = document.querySelector("#date").value;
    if (checkDateFormat(stringDateValue)) {
      const data = new FormData(form);
      let output = "";
      for (let entry of data) {
        output = output + entry[0] + "=" + entry[1] + "\r";
      }
      consolidate.innerText = output;
    } else {
      consolidate.innerText = "Data incorreta, favor verificar!";
    }
  });
}

window.onload = initiate;
