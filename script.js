let screen1 = document.querySelector('.first')
let screen2 = document.querySelector('.second')
let screen3 = document.querySelector('.third')
let button1 = document.querySelector('.first-btn')
// let button2 = document.querySelector('.second-btn')
let button3 = document.querySelector('.third-btn')

let buttonR = document.querySelector('.right')
let result_text = document.querySelector('.result')

let buttonsW = document.querySelectorAll('.wrong')

let question = document.querySelector('.question')

let text = document.querySelector('h2')

var questions = [
    ['5!', '120', '150', '1000', '300', 'пять!'],
    ['11 * 11', '121', '151', '1111', '111', '101'],
    ['3,14???', '159', '255', '132', '034', '638'],
]

var current_question = 0

function firstToSecond() {
    screen1.style.display = 'none'
    screen2.style.display = 'block'
}
button1.addEventListener('click', firstToSecond)

function thirdToFirst() {
    screen1.style.display = 'block'
    screen3.style.display = 'none'

}
button3.addEventListener('click', thirdToFirst)

function rightToThird() {
    screen2.style.display = 'none'
    result_text.innerHTML = 'Правильно!'
    screen3.style.display = 'block'
    button3.innerHTML = 'Дальше'
    current_question += 1
    text.innerHTML = 'Продолжайте викторину!'
    button1.innerHTML = 'Продолжить'
    if (current_question == questions.length){
        text.innerHTML = 'Вы выиграли!'
        button1.innerHTML = 'Заново'
        current_question = 0
    }
    ask()
}
buttonR.addEventListener('click', rightToThird)

function wrongToThird() {
    screen2.style.display = 'none'
    result_text.innerHTML = 'Неправильно!'
    screen3.style.display = 'block'
    button3.innerHTML = 'Заново'
    text.innerHTML = 'Выберите правильный вариант ответа!'
    button1.innerHTML = 'Начать'
    current_question = 0
    ask()
}

function ask() {
    question.innerHTML = questions[current_question][0]
    buttonR.innerHTML = questions[current_question][1]
    let wrong_counter = 2
    for (buttonW in buttonsW) {
        buttonsW[buttonW].innerHTML = questions[current_question][wrong_counter]
        wrong_counter += 1
}
}

var counter = 0

ask()

for (buttonW in buttonsW) {
    buttonsW[counter].addEventListener('click', wrongToThird)
    counter++
}
