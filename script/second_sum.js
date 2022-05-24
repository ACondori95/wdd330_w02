function secondSum() {
  const input = document.getElementById('second_input').value;
  const output = document.getElementById('second_output');
  const inputInt = parseInt(input);
  if (inputInt !== NaN) {
    output.innerHTML = 'total: ' + sum(inputInt);
  }
}
function sum(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}