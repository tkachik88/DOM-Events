// Напишите код, который будет выводить alert с надписью Привет! при нажатии на кнопку.
let btn = document.querySelector('.btn');
  btn.onclick = () => {
      alert('Привет!');
  }
   
// Напишите код, который будет менять текст в инпуте при нажатии на кнопку (изначально в инпуте уже должно быть задан текст).
function buttonClick() {
	let input = document.getElementById('input');
	input.value = 'Найс';
    alert(input.value);
}
// Напишите код, который будет выводить alert с содержимым инпута (изначально в инпуте уже должно быть задан текст).
function buttonClick2() {
	let input2 = document.getElementsByClassName('input2')[0];
	input2.value = "Что нового,бро?";
    alert(input2.value)
}
// Напишите код, который будет выводить alert  с содержимым инпута, возведенным в квадрат (для этого вам нужно создать инпут, в который пользователь будет вводить число).
function buttonClick3() {
	let input3 = document.getElementsByClassName('input3')[0];
	let number = Number(input3.value);
	let square = number*number;
	alert(square);
}
// Вам необходимо создать два инпута с заданными значениями и кнопку, при нажатии на которую будет осуществляться обмен содержимым между двумя инпутами (значение первого инпута должно записаться во второй, а значение второго — в первый).
function buttonClick4() {
	// alert ('fhdsgsgsjf')
	let input4 = document.getElementsByClassName('input4')[0];
	let input5 = document.getElementsByClassName('input5')[0];
	console.log(input4,input5);
	let input4Value = input4.value;
	let input5Value = input5.value;
	input4.value = input5Value;
	input5.value = input4Value;
}
// Напишите код, который будет при нажатии на кнопку менять текст в ней.
function buttonClick5(elem) {
	elem.value = 'Новый текст кнопки';
}
// Напишите код, который будет при нажатии на кнопку менять цвет текста в инпуте (изначально в инпуте уже должно быть задан текст).
function buttonClick6() {
	var input = document.getElementsByClassName('input6')[0];
	input.style.color = 'blue';
}