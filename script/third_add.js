function add() {
  const number1 = document.getElementById('third_number1').value;
  const number2 = document.getElementById('third_number2').value;
  const output = document.getElementById('third_output');
  const num1Float = parseFloat(number1);
  const num2Float = parseFloat(number2);
  if ((num1Float !== NaN) & (num2Float !== NaN)) {
    const total = num1Float + num2Float;
    output.innerHTML = 'Total: ' + total;
  }
}