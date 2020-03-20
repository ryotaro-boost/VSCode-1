alert('外部ファイル');
var a = 1;
alert(a);
var b = 2;
var c = a + b;
alert(c);
var A = 'りんご';
var B = 'バナナ';
var C = A + B;
alert(C);
var fruits = ['りんご', 'バナナ'];
alert(fruits[0]); 
var fruits = {'name' : 'りんご', 'price' : 100};
alert(fruits['name']);
alert(fruits.name);
alert(fruits['price']);
alert(fruits.price);
var fruits = [
  {'name': 'りんご', 'price': 100},
  {'name': 'バナナ', 'price': 150},
  {'name': 'いちご', 'price': 200}
];
alert(fruits[1].price);
var fruits = ['りんご', 'バナナ', 'いちご', 'ぶどう', 'もも', 'キウイ', 'メロン', 'スイカ', 'みかん', 'さくらんぼ'];
for (var i = 0; i < fruits.length; i++){
  alert (fruits[i]);
}
var answer = prompt('晩ご飯は何を食べますか？');
if (answer=='カレー' || answer=='カレーライス'){
  alert ('いーっすねカレー！大好きです');
} else if (answer=='ステーキ'){
  alert ('贅沢！！');
} else {
  alert ('美味しそうですね');
}
function calc(x){
  return x * 2;
}
alert(calc(3));