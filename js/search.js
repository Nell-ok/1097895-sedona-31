const formSearch = document.querySelector('.search-form');
const buttonSearch = document.querySelector('.button-search');
const DateIn = formSearch.querySelector('[name=date-in]');
const DateOut = formSearch.querySelector('[name=date-out]');
const ControlBig = formSearch.querySelector('[name=control-big]');
const ControlLittle = formSearch.querySelector('[name=control-little]');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem('control-big');
  storage = localStorage.getItem('control-little');
} catch (err) {
  isStorageSupport = false;
}

formSearch.classList.add('form-hidden');

buttonSearch.onclick = function () {
  formSearch.classList.toggle('form-show');
  DateIn.focus();
};
formSearch.addEventListener('submit', function (evt) {
  if (!DateIn.value || !DateOut.value || !ControlBig.value || !ControlLittle.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('control-big', ControlBig.value);
      localStorage.setItem('control-little', ControlLittle.value);
    }
  }
});



