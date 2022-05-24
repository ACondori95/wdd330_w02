function reqTwo() {
  const input = document.getElementById('req2Input').value;
  const outputElement = document.getElementById('req2Output');
  // make sure input is a number...we can convert it from the string we get from the input value to a number with parseInt.  If this fails it's not a number
  const inputInt = parseInt(input);
  if (inputInt !== NaN) {
    outputElement.innerHTML = 'total: ' + sum(inputInt);
  }
}
function sum(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}