var $div = document.getElementById('result')
var maleArr = ['Кот','Тигр','Лев','Медведь','Кит','Олень','Лис','Ягуар','Гепард','Слон','Бегемот','Ястреб','Орёл', 'Пингвин','Бурундук','Бык','Волк','Жираф'];
var femaleArr = ['Лиса','Пантера','Кошка','Медведица','Львица','Белка','Антилопа','Тигрица','Акула','Фламинго','Синица','Волчица','Сова','Зебра','Жирафа', 'Рысь'];
var maProperty = ['Быстрый','Сильный','Стремительный','Хитрый','Грациозный','Задумчивый','Мудрый','Смелый', 'Храбрый', 'Энергичный','Дружелюбный','Общительный']
var feProperty = ['Быстрая','Сильная','Стремительная','Хитрая','Грациозная','Задумчивая','Мудрая','Смелая', 'Храбрая', 'Энергичная','Дружелюбная','Общительная']

function getRandomElement(arr){
  return arr[Math.floor(Math.random()*arr.length)]
}

function fResult() {
  return getRandomElement(feProperty) + ' ' + getRandomElement(femaleArr) }

function mResult() {
  return getRandomElement(maProperty) + ' ' + getRandomElement(maleArr)}

document.getElementById('buttons').addEventListener('click', function(event) {
  var a = event.target.name
  if(a ==='male') {
    $div.innerHTML = ''
    $div.insertAdjacentHTML('afterbegin',`<p>Ваш результат: </p> ${mResult()}`)
  } else if (a ==='female') {
    $div.innerHTML = ''
    $div.insertAdjacentHTML('afterbegin',`<p>Ваш результат: </p> ${fResult()}`)
  }
})


