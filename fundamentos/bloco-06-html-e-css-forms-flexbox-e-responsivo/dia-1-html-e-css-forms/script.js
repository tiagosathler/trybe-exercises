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

function checkDateFormat (string) {
  let result = false;
  if ( string !== '' ) {
    const regex = /\d{4}|\d{1,2}/g;  
    const dateArray = string.match(regex);
    const year = parseInt(dateArray[2], 10);
    const month = parseInt(dateArray[1], 10);
    const day = parseInt(dateArray[0], 10);
    const today = new Date();
    const yearToday = today.getFullYear();
    if (year < yearToday-100 || year > yearToday) {
      window.alert("Ano fora do intervalo! Insira a data no formato 'dd/mm/aaaa'");
    } else if (month <= 0 || month > 12) {
      window.alert("Mês fora do intervalo! Insira a data no formato 'dd/mm/aaaa'");
    } else {
      const daysInMonths = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
      if ( (year % 400 === 0) || ( year % 100 !== 0 && year % 4 === 0) ) {
        daysInMonths[1] = 29;
      }
      if (!(day > 0 && day <= daysInMonths[month - 1])) {
        window.alert('O dia não confere ao mês!')        
      } else {
        const date = new Date(year, month - 1 , day);
        console.log('today = ' + today);
        console.log('date = ' + date)
        if (Number(date) > Number(today)) {
          window.alert('Você está no futuro... corrija a data!')
        } else {
          result = true;
        }        
      }
    }    
  }
  return result;
}

function getData(event) {
  event.preventDefault();
  const stringDateValue = document.querySelector('#date').value;
  if (checkDateFormat (stringDateValue)) {
    console.log(stringDateValue);
    previewData();
  } 
}


function initiate() {
  populateStates();
  document.querySelector('#submit').addEventListener('click', getData );
//  document.querySelector('#date').addEventListener('change', checkDateFormat );


}

window.onload = initiate ;