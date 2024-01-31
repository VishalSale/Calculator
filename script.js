function insert(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function backspace() {
  var value = document.getElementById('result').value;
  document.getElementById('result').value = value.substr(0, value.length - 1);
}

function calculate() {
  var expression = document.getElementById('result').value;
  if (expression) {
    var result = eval(expression);
    document.getElementById('result').value = result;
  }
}