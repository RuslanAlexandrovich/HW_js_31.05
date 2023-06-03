// let a = +prompt("Введите число:");
// function styleNumber (a){
//     if (a>0){
//         alert("Число со значением плюс!")
//     } else if (a<0){
//         alert("Число со значением минус!")
//     } else if (a==0){
//         alert("0")
//     } else {
//         alert("Некорректно")
//     }
// }
// styleNumber (a);


// var a = +prompt("Введите число");
// function Number1 (a){
//     if (String(a) == "NaN"){
//         alert("Недопустимый формат")
//     } else if (a <= 0){
//         alert("Ошибка ввода")
//     } else if (a > 120){
//         alert("Не верю что столько живут")
//     } else {
//         alert("Very good!")
//     }
// }
// Number1 (a);


// let a = +prompt("Введите число:");
// if (a<0 || a == 0){
//     a = -a + 0
//     alert("Модуль равен: " + a)
// } else {
//     alert("Модуль равен: " + a)
// }


// var a = +prompt("Години:");
// var b = +prompt("Хвилини:");
// var c = +prompt("Секунди:");

// if (a<0 || a>24){
//     alert("Не верный формат времени (Часы)")
// } else if (b<0 || b>60){
//     alert("Не верный формат времени (Минуты)")
// } else if (c<0 || c>60){
//     alert("Не верный формат времени (Секунды)")
// } else {
//     alert(`Вы ввели ${a} часов ${b} минут ${c} секунд`)
// }


// let x = +prompt("Введите точку Х:");
// let y = +prompt("Введите точку Y:");
// if (x > 0 && y > 0){
//     alert(`Введенная точка ${x} : ${y} находится в первой четверти оси координат.`)
// } else if (x < 0 && y < 0){
//     alert(`Введенная точка ${x} : ${y} находится в третьей четверти оси координат.`)
// } else if (x < 0 && y > 0){
//     alert(`Введенная точка ${x} : ${y} находится во второй четверти оси координат.`)
// } else if (x > 0 && y < 0){
//     alert(`Введенная точка ${x} : ${y} находится в четвертой четверти оси координат.`)
// } else if (x == 0 && y > 0){
//     alert(`Введенная точка ${x} : ${y} находится между первой и второй четвертями оси координат.`)
// } else if (x == 0 && y < 0){
//     alert(`Введенная точка ${x} : ${y} находится между третьей и четвертой четвертями оси координат.`)
// } else if (x < 0 && y == 0){
//     alert(`Введенная точка ${x} : ${y} находится между второй и третьей четвертями оси координат.`)
// } else if (x > 0 && y == 0){
//     alert(`Введенная точка ${x} : ${y} находится между первой и четвертой четвертями оси координат.`)
// } else {
//     alert(`Точки X Y равны ${x} : ${y}`)
// }


// let numberMounth = +prompt("Введите номер месяца");
// switch (numberMounth){
//     case 1: alert("Январь");
//     break;
//     case 2: alert("Февраль");
//     break;
//     case 3: alert("Март");
//     break;
//     case 4: alert("Апрель");
//     break;
//     case 5: alert("Май");
//     break;
//     case 6: alert("Июнь");
//     break;
//     case 7: alert("Июль");
//     break;
//     case 8: alert("Август");
//     break;
//     case 9: alert("Сентябрь");
//     break;
//     case 10: alert("Октябрь");
//     break;
//     case 11: alert("Ноябрь");
//     break;
//     case 12: alert("Декабрь");
//     break;
//     default: alert("Нет такого месяца:)")
// }


// var num1 = +prompt("Введите первое число");
// var num2 = +prompt("Введите второе число");
//     if(String(num1) == "NaN" || String(num2) == "NaN"){
//         alert("Вы ввели не число!")
//     } else {
//         var action = +prompt("Введите номер действия  1: +  2: -  3: *  4: /");
//     switch (action) {
//         case 1: alert(num1+num2);
//             break;
//         case 2: alert(num1-num2);
//             break;
//         case 3: alert(num1*num2);
//             break;
//         case 4: alert(num1/num2);
//             break;
//         default: alert("Вы выбрали недопустимое решение!");
//             break;
//     }
// }


// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");
// if (a > b){
//     alert(`Число ${a} болше ${b}`)
// }else if (a < b){
//     alert(`Число ${b} болше ${a}`)
// } else if (a == b) {
//     alert(`Числа равны ${a} = ${b}`)
// } else {
// alert("Что то тут не так)))")
// }


// let a = +prompt("Введите число на проверку кратности 5");
// if (a % 5 == 0){
//  alert(`Число ${a} кратное 5`)
// } else {
//     alert("Не то что то, не подходит...")
// }


// let a = prompt("Введите название планеты").toLowerCase();
// const Earth = "земля";
// if ( a == Number(a)){
//     alert("Не номер а название!")
// } else if ( a == Earth){
// alert(`Привет ${a}нин!`)
// } else {
//     alert("Привет инопланетянин!")
// }