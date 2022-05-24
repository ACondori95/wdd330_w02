function getNum(numId) {
  const number = document.getElementById(numId).value;
  const numberFloat = parseFloat(number);
  if (numberFloat !== NaN) {
    return numberFloat;
  } else return 0;
}

function updateTotal(value) {
  const output = document.getElementById('stretch_output');
  output.innerHTML = 'Total: ' + value;
}

function add(num1, num2) {
  return num1 + num2;
}

const sub = function(num1, num2) {
  return num1 - num2;
}

const mult = (num1, num2) => num1 * num2;

function performOperation(operation) {
  const total = operation(
    getNum('stretch_one'),
    getNum('stretch_two')
  );
  updateTotal(total);
}