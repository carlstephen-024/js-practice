let number = {
    firstFavNum: 24,
    secondFavNum: 18,
};

let computation = {
    addition: (number.firstFavNum + number.secondFavNum),
    subtraction: (number.firstFavNum - number.secondFavNum),
    division: (number.firstFavNum / number.secondFavNum),
    multiplication: (number.firstFavNum * number.secondFavNum),
    modulus: (number.firstFavNum % number.secondFavNum),
    exponentiation: (number.firstFavNum ** number.secondFavNum)
};

console.log(number, computation);
