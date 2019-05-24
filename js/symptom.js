const hospitalkey = 'hospotal';

const selectedPart = JSON.parse(localStorage.getItem('selectedPart'));
console.log(selectedPart);
const $symptoms = document.querySelector('.symptoms');
const $submit = document.querySelector('.search');

function init() {
  const symptoms = selectedPart.array;
  let inner = '';
  symptoms.forEach(element => {
    inner += `<button class="symp grid-item">${element.id}</button>`;
  });
  $symptoms.innerHTML = inner;
}

init();

function checkSelectedSymptom(symptom) {
  console.log(symptom);
  selectedPart.array.forEach(element => {
    if (element.id === symptom) element.checked = true;
  });
}

// 증상 클릭시 checked = true
$symptoms.addEventListener('click', function(e) {
  if (e.target.classList.contains('symp')) {
    checkSelectedSymptom(e.target.innerText);
    e.target.classList.toggle('clicked');
  }
});

function indexOfMax(arr) {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  return maxIndex;
}

// 병원 찾기 버튼
$submit.addEventListener('click', function() {
  let hospitalCollection = [];
  let countHospital = Array(10);
  for (let i = 0; i < 10; i++) countHospital[i] = 0;
  selectedPart.array.forEach(element => {
    if (element.checked) {
      hospitalCollection = [...hospitalCollection, ...element.hospital];
    }
  });
  hospitalCollection.forEach(element => {
    countHospital.splice(element, 1, countHospital[element] + 1);
  });

  const hospitalCodes = JSON.parse(localStorage.getItem(hospitalkey));
  const hospital = hospitalCodes[indexOfMax(countHospital)];

  const query = '?';

  location.href = 'reservation.html' + query + 'keyword=' + hospital;
});
