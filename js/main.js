const hospitalkey = 'hospotal';
const partskey = 'parts';

function init() {
  const hospital = {
    0: '내과',
    1: '신경과',
    2: '안과',
    3: '이비인후과', 
    4: '외과',
    5: '정신과',
    6: '정형외과',
    7: '치과',
    8: '척추병원',
    9: '피부과'
  };
  const head = [
    {id: '어지러움', hospital: [1], checked: false},
    {id: '욱신(지끈)거림', hospital: [1], checked: false},
    {id: '강박증', hospital: [5], checked: false},
    {id: '건망증', hospital: [1], checked: false},
    {id: '두통', hospital: [1], checked: false},
    {id: '치매', hospital: [1], checked: false},
    {id: '안면마비', hospital: [1], checked: false},
    {id: '인지장애', hospital: [1], checked: false},
    {id: '언어장애', hospital: [1, 5], checked: false},
    {id: '안면 홍조', hospital: [9], checked: false},
    {id: '무기력함', hospital: [5], checked: false}
  ];
  const neck = [
    {id: '목 불쾌함', hospital: [8], checked: false},
    {id: '갑상선이 단단해짐', hospital: [0], checked: false},
    {id: '목의 이물감', hospital: [3], checked: false},
    {id: '목이 부음', hospital: [3], checked: false},
    {id: '삼키기 곤란', hospital: [3], checked: false},
    {id: '목소리 변화', hospital: [3], checked: false},
    {id: '목의 통증', hospital: [3], checked: false},
    {id: '목이 따가움', hospital: [3], checked: false},
    {id: '간지러움', hospital: [9], checked: false},
    {id: '알러지', hospital: [0, 9], checked: false},
    {id: '가래', hospital: [3], checked: false}
  ];
  const chest = [
    {id: '가래', hospital: [0, 3], checked: false},
    {id: '답답함', hospital: [0], checked: false},
    {id: '두근거림', hospital: [0], checked: false},
    {id: '기침', hospital: [0, 3], checked: false},
    {id: '객혈', hospital: [0], checked: false},
    {id: '호흡곤란', hospital: [0], checked: false},
    {id: '빈호흡', hospital: [0], checked: false}
  ];
  const belly = [
    {id: '구토', hospital: [0], checked: false},
    {id: '복부 불편감', hospital: [0], checked: false},
    {id: '속 쓰림', hospital: [0], checked: false},
    {id: '설사', hospital: [0], checked: false},
    {id: '아랫배 뭉침', hospital: [0], checked: false},
    {id: '울렁거림', hospital: [0], checked: false},
    {id: '메슥거림', hospital: [0], checked: false},
    {id: '콕콕 쑤심', hospital: [0], checked: false},
    {id: '혈변', hospital: [0], checked: false}
  ];
  const back = [
    {id: '허리 통증', hospital: [6], checked: false},
    {id: '등 저림', hospital: [6], checked: false},    
    {id: '굽은 등', hospital: [6], checked: false},
    {id: '골반 통증', hospital: [6], checked: false}
  ];
  const arm = [
    {id: '팔 저림', hospital: [1, 6], checked: false},    
    {id: '팔의 통증', hospital: [1, 6], checked: false},    
    {id: '손목 통증', hospital: [6], checked: false},    
    {id: '어깨 통증', hospital: [6], checked: false},    
    {id: '무감각', hospital: [1], checked: false},    
    {id: '욱신(지끈)거림', hospital: [1], checked: false},    
    {id: '신경성 통증', hospital: [1], checked: false}
  ];
  const leg = [
    {id: '저림', hospital: [6, 8], checked: false},    
    {id: '무릎 통증', hospital: [6], checked: false},    
    {id: '발목 통증', hospital: [6], checked: false},    
    {id: '부음', hospital: [0], checked: false}
  ];
  const foot = [
    {id: '못에 찔림', hospital: [0], checked: false},    
    {id: '내성 발톱', hospital: [6, 9], checked: false},    
    {id: '무좀', hospital: [9], checked: false},    
    {id: '티눈', hospital: [9], checked: false},      
    {id: '발가락 통증', hospital: [6], checked: false}
  ];
  const eye = [
    {id: '간지러움', hospital: [2], checked: false},    
    {id: '따가움', hospital: [2], checked: false},    
    {id: '눈부심', hospital: [2], checked: false},    
    {id: '시력 감소', hospital: [2], checked: false},    
    {id: '앞이 뿌염', hospital: [2], checked: false},    
    {id: '눈꺼풀 돌기에 뭐 남', hospital: [2, 9], checked: false},    
    {id: '떨림', hospital: [2], checked: false},
    {id: '안구 건조', hospital: [2], checked: false}
  ];
  const ear = [
    {id: '귀 속 통증', hospital: [3, 6], checked: false},    
    {id: '이명', hospital: [1, 3], checked: false},    
    {id: '이물감', hospital: [3], checked: false},    
    {id: '청력 저하', hospital: [3], checked: false},    
    {id: '환청', hospital: [5], checked: false}
  ];
  const nose = [
    {id: '코막힘', hospital: [3], checked: false},    
    {id: '콧물', hospital: [3], checked: false},    
    {id: '코골이', hospital: [1, 3, 7], checked: false},    
    {id: '재채기', hospital: [3], checked: false},    
    {id: '건조한 코', hospital: [3], checked: false}
  ];
  const mouth = [
    {id: '치통', hospital: [7], checked: false},    
    {id: '이 시림', hospital: [7], checked: false},    
    {id: '잇몸 염증', hospital: [7], checked: false},    
    {id: '치아 흔들림', hospital: [7], checked: false},    
    {id: '갈증', hospital: [0], checked: false},    
    {id: '입냄새 심함', hospital: [0], checked: false},    
    {id: '미각 상실', hospital: [3], checked: false}
  ];
  const headPart = [
    {id: '머리', array: head, checked: false},
    {id: '눈', array: eye, checked: false},
    {id: '귀', array: ear, checked: false},
    {id: '코', array: nose, checked: false},
    {id: '입', array: mouth, checked: false}
  ]
  const upperPart = [
    {id: '목', array: neck, checked: false},
    {id: '가슴', array: chest, checked: false},
    {id: '배', array: belly, checked: false},
    {id: '등', array: back, checked: false},
    {id: '팔', array: arm, checked: false}
  ];
  const lowerPart = [
    {id: '다리', array: leg, checked: false},
    {id: '발', array: foot, checked: false}
  ];
  const parts = [
    {id: '머리', detail: headPart, checked: false},
    {id: '상체', detail: upperPart, checked: false},
    {id: '하체', detail: lowerPart, checked: false}
  ];
  
  localStorage.setItem(hospitalkey, JSON.stringify(hospital));
  localStorage.setItem(partskey,JSON.stringify(parts));
}

$(document).ready(function(){
  $.myparallax({
    photowrap: ".photowrap",
    speed: .75 // This has to be a number from 0 to 1.
  });

  // 로딩과 동시에 localStorage에 Data 초기화
  init();

  const $headPart = document.querySelector('.head-box');
  const $upperPart = document.querySelector('.upper-box');
  const $lowerPart = document.querySelector('.lower-box');
  const $parts = document.querySelector('.parts');

  // 머리, 상체, 하체 선택되면 localStorage에 반영
  function checkSelectedPart(part) {
    const parts = JSON.parse(localStorage.getItem(partskey));
    let checkedPart;
    parts.forEach(element => {
      if (element.id === part) {
        element.checked = true;
        checkedPart = element;
      } else {
        element.checked = false;
      }
    });
    localStorage.setItem(partskey,JSON.stringify(parts));
    console.log(parts);
    showParts(checkedPart);
  }

  function showParts(part) {
    const detailParts = part.detail;
    let inner = '';
    detailParts.forEach(element => {
      inner += `<button class="part">${element.id}</button>`;
    });
    $parts.innerHTML = inner;
  }

  $headPart.addEventListener('click', function() {
    checkSelectedPart('머리');
  });

  $upperPart.addEventListener('click', function() {
    checkSelectedPart('상체');
  });

  $lowerPart.addEventListener('click', function() {
    checkSelectedPart('하체');
  });

  $parts.addEventListener('click', function(e) {
    console.dir(e.target);
    const partName = e.target.innerText;
    const parts = JSON.parse(localStorage.getItem(partskey));

  })
  
});