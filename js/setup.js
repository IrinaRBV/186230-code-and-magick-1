'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupSubmit = setup.querySelector('.setup-submit');

setup.setAttribute('role', 'dialog');

setupClose.setAttribute('role', 'button');
setupClose.setAttribute('tabindex', '2');

setupOpenIcon.setAttribute('role', 'button');
setupOpenIcon.setAttribute('tabindex', '1');

setupSubmit.setAttribute('tabindex', '3');

/* Когда иконка пользователя в фокусе,
то диалог настройки должен открываться по нажатию кнопки ENTER*/
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

/* принимает на вход событие и возвращает true в том случае,
если у этого события есть параметр keyCode и этот парамент равен ENTER_KEY_CODE*/
var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

// если keyCode равняется клавише Enter, то вызываем функцию setupCloseButton
var setupKeydownHandler = function () {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    setupCloseButton();
  }
};

// открытие по кнопке
var showSetupElement = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};

// закрытие по кнопке
var hideSetupElement = function () {
  setupCloseButton();
  document.removeEventListener('keydown', setupKeydownHandler);
};


	// Функция открытия формы
var setupOpenButton = function () {
  showSetupElement();
  setup.classList.remove('invisible');
};

var setupOpenKey = function (event) {
  // если произошло событие активации, то показать загрузку елемента
  if (isActivateEvent(event)) {
    showSetupElement();
  }
};

// Функция закрытия формы
var setupCloseButton = function () {
  setup.classList.add('invisible');
};

var setupCloseKey = function (event) {
  // если произошло событие активации, то скрыть загрузку елемента
  if (isActivateEvent(event)) {
    hideSetupElement();
  }
};

	// Открытие формы
setupOpen.addEventListener('click', setupOpenButton);
setupOpen.addEventListener('keydown', setupOpenKey);
	// Закрытие формы
setupClose.addEventListener('click', setupCloseButton);
setupClose.addEventListener('keydown', setupCloseKey);


var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
	// Массив цветов мантии
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
	// Функция изменения мантии
var setupWizardCoat = function () {
  var colorNumber = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorNumber];
};
	// Изменение мантии
wizardCoat.addEventListener('click', setupWizardCoat);


var wizardEyes = wizard.querySelector('#wizard-eyes');
	// Массив цвета глаз
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
	// Функция изменения глаз
var setupWizardEyes = function () {
  var colorNumber = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardEyesColors[colorNumber];
};
	// Изменение цвета глаз
wizardEyes.addEventListener('click', setupWizardEyes);


var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupFireball = setupFireballWrap.querySelector('.setup-fireball');
	// Массив цвета фаербола
var FireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
	// Функция изменения фаербола
var setupFireballColors = function () {
  var colorNumber = Math.floor(Math.random() * FireballColors.length);
  setupFireball.style.background = FireballColors[colorNumber];
};
	// Изменение цвета фаербола
setupFireball.addEventListener('click', setupFireballColors);
