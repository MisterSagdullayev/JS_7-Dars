/* slice in JS */
/*
let matn = "Qiyosh sharqdan chiqib g'arbga botadi."
document.write(matn.slice(-15));
*/

/* soString in JS (string formatiga tegishli bo'lmagan ma'lumotlarni stringlash) */
/*
let son = 7;
let matnSon = '8';
*/
/*console.log(typeof son.toString());*/
/*console.log(typeof parseInt(matnSon));*/

/* Pop & Push in JS (Arrayga objectga ma'lumot kiritish) */
/*
let list = [];
list.push('Adham');
list.push('16 yoshda');
list.push('islom');
list.push('20 yoshda');
list.push('Shahzoda');
list.push('18 yoshda');
console.log(list.length);
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
*/

/* unshift & shift in JS (Arrayga objectga ma'lumot kiritish) */
/*
let list = [];
list.unshift('Adham');
list.unshift('16 yoshda');
list.unshift('islom');
list.unshift('20 yoshda');
list.unshift('Shaxzoda');
list.unshift('18 yoshda');
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.length);
console.log(list);
*/

/* sort (tartibga keltirish) */
/*let list = ['Islom','Umid','Jahongir','Jasur','Aziza','Bilol','Alisher'];*/
/*console.log(list.sort().reverse());*/
/*let sonlar =[567,16,2610,945,11,2030,2,47];
let tartiblanganSonlar = sonlar.sort(function (a,b) {
    return a-b;
})
console.log(tartiblanganSonlar.reverse());*/

/*
let belgilar = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM";

function parolBer() {
    let i = 0;
    let parol = '';
    while (i < 6){
        let son = parseInt(Math.random() * belgilar.length);
        parol += belgilar[son];
        i++;
    }
    document.querySelector('input').value = parol;
}
*/

document.querySelector('.tugma').addEventListener('click',function () {
    let ekran = document.querySelector('.ekran');
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) +1;
})

document.querySelector('.nolga').addEventListener('click', function () {
    document.querySelector('.ekran').value = 0;
})