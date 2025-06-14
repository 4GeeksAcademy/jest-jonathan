const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}



const fromEuroToDollar = (ValueInEuros) =>{
    let ValueInDollar = ValueInEuros * oneEuroIs.USD
    return ValueInDollar
};


console.log(fromEuroToDollar(10));

const fromDollarToYen = (valueInDollar) => {
    let ValueInEuros = valueInDollar / oneEuroIs.USD;
    let valueInYen = ValueInEuros * oneEuroIs.JPY;
    return valueInYen;
};


console.log(fromDollarToYen(10));

const fromYenToPound = (valueInYen) => {
    let ValueInEuros = valueInYen / oneEuroIs.JPY;
    let valueInPound = ValueInEuros * oneEuroIs.GBP;
    return valueInPound;
};

module.exports = { fromEuroToDollar, sum, fromDollarToYen, fromYenToPound};

console.log(fromYenToPound(10));