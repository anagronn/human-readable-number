const NUMBERS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];


const TENS = {
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90,
}

function toReadableTens(n) {
  let units = n % 10;
  let tens = n - units;
  for (let key in TENS) {
    if (units === 0) {
      if (TENS[key] === tens) {
        return key;
      }
    } else {
      if (TENS[key] === tens) {
        return key + ' ' + NUMBERS[units];
      }
    }
  }
}

function toReadableHundreds(n){
  let tens = n % 100;
  let hundreds = Number(n.toString()[0]);
  if (tens !== 0 && tens < 20) {
    return NUMBERS[hundreds] + ' hundred ' +  NUMBERS[tens];
  } else if (tens === 0){
    return NUMBERS[hundreds] + ' hundred';
  }
  return NUMBERS[hundreds] + ' hundred ' + toReadableTens(tens);
}


module.exports = function toReadable(number) {
  if (number < 20) {
    return NUMBERS[number];
  } else if (number > 19 && number < 100) {
    return toReadableTens(number);
  } else if (number > 99 && number < 1000) {
    return toReadableHundreds(number);
  } else return 'Sorry, your number is too large';
}
