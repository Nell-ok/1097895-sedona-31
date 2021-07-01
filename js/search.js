const formSearch = document.querySelector('.search-form');
const buttonSearch = document.querySelector('.button-search');
const dateIn = formSearch.querySelector('[name=date-in]');
const dateOut = formSearch.querySelector('[name=date-out]');
const controlBig = formSearch.querySelector('[name=control-big]');
const controlLittle = formSearch.querySelector('[name=control-little]');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem('control-big');
  storage = localStorage.getItem('control-little');
} catch (err) {
  isStorageSupport = false;
}

formSearch.classList.add('form-hidden');

buttonSearch.addEventListener('click', function () {
  formSearch.classList.toggle('form-show');
  if(formSearch.classList.contains('form-show')) {
    dateIn.focus();
  }
});
formSearch.addEventListener('submit', function (evt) {
  if (!dateIn.value || !dateOut.value || !controlBig.value || !controlLittle.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('control-big', controlBig.value);
      localStorage.setItem('control-little', controlLittle.value);
    }
  }
});



