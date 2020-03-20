//課題 1. 2. 
var answer = prompt('数値を入力してください');
if (answer > 0) {
  alert ('正の数です');
} else if (answer === 0) {
  alert ('正でも負でもありません');
} else if (answer < 0) {
  alert ('負の数です');
} else {
  alert ('数値を入力してください');
}

//課題 3. 4. 5.
var animals = ['パンダ', 'ライオン', 'キリン'];
var i = 0;
var answer = prompt('パンダorライオンorキリン?');
while (true) {
  if (answer === 'ライオン') {
    alert ('ライオン');
    break;
  }else if (i >= animals.length) {
    break;
  }
  alert (animals[i]);
  i++;
}

//課題 6. 7.
var animals = [
  {'name' : 'パンダ', 'weight' : '80kg'},
  {'name' : 'ライオン', 'weight' : '200kg'},
  {'name' : 'キリン', 'weight' : '300kg'}
];
var answer = prompt('パンダorライオンorキリン');
switch (answer) {
  case 'パンダ':
    alert (animals[0].weight);
    break;
  case 'ライオン':
    alert (animals[1].weight);
    break;
    case 'キリン':
      alert (animals[2].weight);
      break;
}

//課題 8.
function circle(x) {
  return x * x * 3.14;
}
alert (circle(5));