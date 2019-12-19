// 課題1、2

var number = prompt('数字を入力してください');
if (isNaN(number)) {
  alert('数値を入力してください');
}else if (number < 0) {
  alert('負の数です');
} else {
  alert('正の数です');
}

// 課題3、4、5

var animals = ['パンダ', 'ライオン', 'キリン'];

var i = 0;
var animal = prompt('動物の名前を入力してください')
if (animal == 'ライオン') {
  alert(1);
} else {
  while (i < animals.length) {
    alert(animals[i]);
    i++;
  }
}

// 課題6、7

var animals2 = [
  {'name': 'パンダ', 'weight': 80},
  {'name': 'ライオン', 'weight': 200},
  {'name': 'キリン', 'weight': 300}
];

var animal_name = prompt('動物の名前を入力してください！！！');

switch (animal_name) {
  case animals2[0].name:
    var animal_weight = animals2[0].weight + 'kg';
    alert(animal_weight);
    break;

  case animals2[1].name:
    var animal_weight = animals2[1].weight + 'kg';
    alert(animal_weight);
    break;

  case animals2[2].name:
    var animal_weight = animals2[2].weight + 'kg';
    alert(animal_weight);
    break;

  default:
    alert('パンダ、ライオン、キリンの中から入力してください')
}

// 課題8

function calc_area(rad) {
  var area = rad * rad * 3.14;
  return area;
}

var radius = prompt('数字を入力してください')
if (isNaN(radius)) {
  alert('数字を入力してください');
} else {
  alert(calc_area(radius));
}
