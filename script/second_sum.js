function secondSum() {
  const input = document.getElementById('second_input').value;
  const output = document.getElementById('second_output');
  const input_int = parseInt(input);
  if (input_int !== NaN) {
    output.innerHTML = 'Total: ' + sum(input_int);
  }
}

function sum(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}