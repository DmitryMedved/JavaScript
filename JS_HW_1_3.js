// 3**: Преобразовать 2* таким образом, 
// чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, 
// преобразовываясь в number

let age_2 = 18
let age_3 = 60
const checkAge = function(age){
if (age && !isNaN(age)){
    if (age < age_2){
        console.log("You don't have access cause your age is", age, "It's less then", age_2)
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome !")
    } else if (age > age_3) {
    console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
} else console.log("Error. Type not number")
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge('Other type')
checkAge('0')
checkAge('')


// Результат:
// You don't have access cause your age is 17 It's less then 18
// Welcome !
// Keep calm and look Culture channel
// Error. Type not number
// You don't have access cause your age is 0 It's less then 18
// Error. Type not number