function inflationCalculator() {
  let inflation = document.querySelector('#inflationRate').value;
  inflation = parseFloat(inflation);

  let money = document.querySelector('#money').value;
  money = parseFloat(money);

  let years = document.querySelector('#years').value;
  years = parseFloat(years);

  let worth = money + (money * (inflation / 100));
  console.log(worth);

  for (i = 1; i < years; i++) {
    worth += worth * (inflation / 100);
  }
  worth = worth.toFixed(2);
  console.log(worth);

  let newElement = document.createElement('div');
  newElement.className = 'text-output';
  newElement.innerText = `The inflation rate of ${inflation} percent for the value of ${money}$ will be ${worth}$ after ${years} years.`;

  document.querySelector('.container').appendChild(newElement);
}
