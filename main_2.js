// let a = +prompt("Введите ваш возраст");
// if (a < 0){
//     alert("Ты еще не родился(ась) :)")
// } else if (a >= 0 && a <= 12) {
//     alert("Ребенок")
// } else if (a > 12 && a <= 18){
//     alert ("Подросток")
// } else if (a > 18 && a <= 60){
//     alert("Взрослый")
// } else if (a > 60 && a <= 100) {
//     alert("Пенсионер")
// } else if (a > 100){
//     alert("Столько не живут :)")
// } else if (String(a) == "NaN"){
//     alert("Вводите цифрами)")
// }


// let a = +prompt("Введите цифру от 0 до 9");
// switch (a) {
//     case 0: alert("Соответствующий клавише символ    )");
//         break;
//     case 1: alert("Соответствующий клавише символ    !");
//         break;
//     case 2: alert("Соответствующий клавише символ    @");
//         break;
//     case 3: alert("Соответствующий клавише символ    #");
//         break;
//     case 4: alert("Соответствующий клавише символ    $");
//         break;
//     case 5: alert("Соответствующий клавише символ    %");
//         break;
//     case 6: alert("Соответствующий клавише символ    ^^");
//         break;
//     case 7: alert("Соответствующий клавише символ    &");
//         break;
//     case 8: alert("Соответствующий клавише символ    *");
//         break;
//     case 9: alert("Соответствующий клавише символ    (");
//         break;

//     default: alert("Нет таки клавиш)")
//         break;
// }


// let a = prompt("Введите трёхзначное число");
// if (a[0] == a[1] || a[1] == a[2] || a[2] == a[0]){
//     alert("Цифры повторяются")
// } else {
//     alert("Цифры не повторяются")
// }


// let a = +prompt("Проверить высокосный ли год");
// if (a%4 == 0 && a%100 !==0 || a%100 == 0 && a%400 == 0){
//     alert("Высокосный год")
// } else  {
//     alert("Не высокосный год")
// }


// let a = prompt("Введите пятизначное число/слово").toLowerCase();
// if (a.length > 5){
//     alert(`Число/слово должно быть пятизначным!`)
// }else if (a[0] == a[4] && a[1] == a[3]){
//     alert(` ${a} палиндром!`)
// } else {
//     alert (`${a} не палиндром!`)
// }


// let str = prompt("Введите текст или число");
// function palindrome(str){
//     str = str.toLowerCase().replace(/\s|[,.!?"/-]/g,""); // убираем символы из строки
//     // str = String(str).toLowerCase().replace(/\s|[,.!?"/-]/g,""); перевод числа в строку
//     return str === str.split('').reverse().join(''); //делаем из введенных данных массив, переворачиваем и собираем
// }
// console.log(str.split(''));
// if (palindrome(str) == true ){
//     alert("Палиндром")
// } else {
//     alert("Не палиндром")
// }


// let money = +prompt("Введите сумму usd");
// let select = +prompt("Введите номер нужной валюты");
// function transformMoney(money) {
//      switch (select){
//         case 1: alert (`Вам доступно ${money * 0.93} EURO`);
//             break;
//         case 2: alert (`Вам доступно ${money * 36.94} UAH`);
//             break;
//         case 3: alert (`Вам доступно ${money * 1.70} AZN`);
//             break;
//             default: alert ("Нет такой валюты!")
//      }
// }
// transformMoney(money);


// let a = +prompt("Введите сумму покупки");
// if (a>=200 && a<=300){
//     alert(`Сумма к оплате со скидкой: ${a-(a / 100)*3}`)
// } else if (a>=300 && a<=500){
//     alert(`Сумма к оплате со скидкой: ${a-(a / 100)*5}`)
// } else if (a>500){
//     alert(`Сумма к оплате со скидкой: ${a-(a / 100)*7}`)
// } else {
//     alert(`Некорректное значение!`)
// }


// let circle = +prompt("Введите длину круга");
// let rectangle = +prompt("Введите сторону квадрата");
// let d = circle/Math.PI;
// console.log(d);
// if (d <= rectangle){
//     alert("Круг поместится в квадрат")
// } else if (d > rectangle){
//     alert("Круг не поместится в квадрат")
// } else {
//     alert("Это не предусмотрено!")
// }


// let question1 = prompt("Летом тепло? (Да) (Нет) (Затрудняюсь)").toLocaleLowerCase();
// let question2 = prompt("Вода мокрая? (Да) (Нет) (Затрудняюсь)").toLocaleLowerCase();
// let question3 = prompt("Трава заленая? (Да) (Нет) (Затрудняюсь)").toLocaleLowerCase();
// let x = 0;
//     if (question1 === "да"){
//         x = 2;
//     } else if (question2 === "да"){
//         x = x+2;
//     } else if (question3 === "да"){
//         x = x+2;
//         alert(`Ваш бал за правильный ответ: ${x}`)
//     } else {
//     } 
//     console.log();


    // let question1 = prompt("Летом тепло? (Да) (Нет) (Затрудняюсь)").toLocaleLowerCase();
    // let question2 = prompt("Вода мокрая? (Да) (Нет) (Затрудняюсь)").toLocaleLowerCase();
    // let question3 = prompt("Трава заленая? (Да) (Нет) (Затрудняюсь)").toLocaleLowerCase();

    // if (question1 == "да"){
    //     var a = 2;
    // } else {
    //     a = 0;
    // }

    // if (question2 == "да"){
    //     var b = 2;
    // } else {
    //     b = 0;
    // }

    // if (question3 == "да"){
    //     var c = 2;
    // } else {
    //     c = 0;
    // }
    // console.log(a,b,c);
    // alert(`Ваш балл: ${Number(a + b + c)}`)




    //  let feb = 28;
    //  let day = +prompt("Введите день даты ");
    //  let mounth = +prompt("Введите месяц даты:");
    //  let year = +prompt("Введите год даты:");

    //  if(day < 1 || day > 31 || mounth < 1 || mounth > 12){
    //     alert("Внимательней вводите данные!")
    //  } else if (year%4 == 0 && year%100 !==0 && mounth == 2 && day > 29 || year%100 == 0 && year%400 == 0 && mounth == 2 && day > 29){
    //     alert("Этот год высокосный, в феврале 29 дней!")
    //  } 
    //   else{
    //     calendar();
    //  }

    //  function calendar(){

    //     if (year%4 == 0 && year%100 !==0 || year%100 == 0 && year%400 == 0){
    //         feb = 29;
    //     } else {
    //         feb = 28;
    //     }

    //     if (mounth == 2 && day == feb){
    //         day = 1;
    //         mounth = mounth+1;
    //         year = year;
    //     } else if (mounth == 12 && day == 31){
    //         day = 1;
    //         mounth = 1;
    //         year = year + 1;   
    //     } 
    //       else{
    //         day = day + 1;
    //         mounth = mounth;
    //         year = year;
    //     }
    //     alert(`Завтра будет ${day}.${mounth}.${year}`)
    // }    