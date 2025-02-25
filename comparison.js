let numbers = {
    firstFavNum: 24,
    secondFavNum: 18
};

let comparison = {
    greaterThan: (numbers.firstFavNum > numbers.secondFavNum),
    lessThan: (numbers.firstFavNum < numbers.secondFavNum),
    greaterThanOrEqualTo: (numbers.firstFavNum >= numbers.secondFavNum),
    lessThanOrEqualTo: (numbers.firstFavNum <= numbers.secondFavNum),
    strictEqual: (numbers.firstFavNum === numbers.secondFavNum),
    looseEqual: (numbers.firstFavNum == numbers.secondFavNum),
    strictInequality: (numbers.firstFavNum !== numbers.secondFavNum),
    looseInequality: (numbers.firstFavNum != numbers.secondFavNum)
};

console.log(numbers, comparison);
