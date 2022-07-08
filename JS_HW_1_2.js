// 2*: Преобразовать задание 1* таким образом, 
// чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка.

const age_1 = 10
const age_2 = 18
const age_3 = 60

const checkAge = function(age){
    age = Number(age)
    console.log(age)
    if(age) {
if (age < age_2){
    console.log("You don't have access cause your age is"+ age + "It is less then" + age_2+ ".")
} else if (age >= age_2 && age < age_3){
    console.log("Welcome!")
} else if (age > age_3){
    console.log("Keep calm and look Culture channel.")
} else {
    console.log("Technical work.")
}
    }
}

checkAge(17)
checkAge(18)
checkAge(61)
checkAge('Other type')

// Результат:
// [Running] node "c:\Users\zvers\OneDrive\Рабочий стол\JS_HW_1_2.js"
// 17
// You don't have access cause your age is17It is less then18.
// 18
// Welcome!
// 61
// Keep calm and look Culture channel.
// NaN