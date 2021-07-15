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

function previewData() {
  const nameValue = document.querySelector('#name').value;
  const emailValue = document.querySelector('#email').value;
  const cpfValue = document.querySelector('#cpf').value;
  const stateValue = document.querySelector('#state').value;
  const curriculumValue = document.querySelector('#curriculum').value;
  const positionValue = document.querySelector('#position').value;
  const dateValue = document.querySelector('#date').value;
  const formData = {name: nameValue,
                    email:emailValue,
                    cpf:cpfValue,
                    state: stateValue,
                    curriculum: curriculumValue,
                    position: positionValue,
                    date: dateValue,
                    }
  const divElement = document.querySelector('#consolidate');
  


}

function checkDateFormat (element) {
  const regex = /\d{4}|\d{1,2}/g;
  const stringValue = element.target.value;
  const dateArray = stringValue.match(regex);
  const year = parseInt(dateArray[2], 10);
  const month = parseInt(dateArray[1]);
  const day = parseInt(dateArray[0]);

  if (year < 1000 || year > 3000 || month == 0 || month > 12) {
    return false;
  }

  var daysInMonths = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  
  if (year % 400 === 0 || ( year % 100 !== 0 && year % 4 === 0) ) {
    daysInMonths[1] = 29;
  }

  if (day > 0 && day <= daysInMonths[month - 1]) {
    return true;
  } else {
    return false;
  }


  const date = new Date(year, month, day);

  console.log(date);

}

function getData(event) {
  event.preventDefault();
  previewData();
}


function initiate() {
  populateStates();
  document.querySelector('#submit').addEventListener('click', getData );
  document.querySelector('#date').addEventListener('change', checkDateFormat );


}

window.onload = initiate ;