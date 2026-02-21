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
  document.getElementById(`balance`).innerText = newBalance.toFixed(2);
}

function setCashinBalance(amount) {
  const balance = getBalance();
  const newBalance = balance + Number(amount);
  document.getElementById(`balance`).innerText = newBalance.toFixed(2);
}

function setBonusBalance(coupon) {
  const balance = getBalance();
  let newBalance = balance;
  if (coupon === `mk100`) {
    newBalance += 100;
    alert(`£100 bonus added to your account`);
  } else if (coupon === `mk200`) {
    newBalance += 200;
    alert(`£200 bonus added to your account`);
  } else if (coupon === `mk300`) {
    newBalance += 300;
    alert(`£300 bonus added to your account`);
  } else {
    alert(`Incorrect coupon`);
    return;
  }
  document.getElementById(`balance`).innerText = newBalance.toFixed(2);
}

function showForm(id) {
  const tips = document.getElementById(`home-tips`);
  const addMoney = document.getElementById(`addMoney`);
  const cashout = document.getElementById(`cashout`);
  const transfer = document.getElementById(`transfer`);
  const bonus = document.getElementById(`getBonus`);
  const bill = document.getElementById(`pay-bill`);
  const transaction = document.getElementById(`transaction`);

  addMoney.classList.add(`hidden`);
  cashout.classList.add(`hidden`);
  transfer.classList.add(`hidden`);
  bonus.classList.add(`hidden`);
  bill.classList.add(`hidden`);
  transaction.classList.add(`hidden`);
  tips.classList.add(`hidden`);

  const showedForm = document.getElementById(id);
  showedForm.classList.remove(`hidden`);
}
