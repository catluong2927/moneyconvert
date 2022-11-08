// fromValue = document.getElementById('fromCurrency').value;
// toValue = document.getElementById('toCurrency').value;

fromValue = document.getElementById('fromCurrency');
console.log(fromValue);

fromValue.option[0].text = toValue.option[1].text;
fromValue.option[1].text = toValue.option[0].text;