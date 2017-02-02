'user strict'

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
//Функция открытия формы
var setupOpenButton =  function() {
	setup.classList.remove('invisible');
};
//Функция закрытия формы
var setupCloseButton = function() {
	setup.classList.add('invisible');
};
//Открытие формы
setupOpen.addEventListener('click', setupOpenButton);
//Закрытие формы
setupClose.addEventListener('click', setupCloseButton);



var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
//Массив цветов мантии
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
//Функция изменения мантии 
var setupWizardCoat= function() {
	var colorNumber = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorNumber];
};
//Изменение мантии
wizardCoat.addEventListener('click', setupWizardCoat);


var wizardEyes = wizard.querySelector('#wizard-eyes');
//Массив цвета глаз
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
]
//Функция изменения глаз
var setupWizardEyes = function() {
	var colorNumber = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardEyesColors[colorNumber];
}
//Изменение цвета глаз
wizardEyes.addEventListener('click', setupWizardEyes);


var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupFireball = setupFireballWrap.querySelector('.setup-fireball');
//Массив цвета фаербола
var FireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
]
//Функция изменения фаербола
var setupFireballColors = function() {
	var colorNumber = Math.floor(Math.random() * FireballColors.length);
	setupFireball.style.background = FireballColors[colorNumber];
};
//Изменение цвета фаербола
setupFireball.addEventListener('click', setupFireballColors);