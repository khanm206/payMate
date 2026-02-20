function getValue(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}

function getBalance() {
  const text = document.getElementById(`balance`).innerText;
  const balance = Number(text);
  return balance;
}

function setCashoutBalance(amount) {
  const balance = getBalance();
  const newBalance = balance - Number(amount);
  document.getElementById(`balance`).innerText = newBalance;
}

function setCashinBalance(amount) {
  const balance = getBalance();
  const newBalance = balance + Number(amount);
  document.getElementById(`balance`).innerText = newBalance;
}
