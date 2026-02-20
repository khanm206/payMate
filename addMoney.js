document.getElementById(`addMoney-btn`).addEventListener(`click`, function () {
  const bank = getValue(`addBank`);
  if (bank === ``) {
    alert(`Select a bank`);
    return;
  }

  const accountNum = getValue(`account-num`);
  if (accountNum.length != 8) {
    alert(`Invalid account number`);
    return;
  }

  const amount = getValue(`addAmount`);

  if (amount == `` || amount == 0) {
    alert(`Invalid amount`);
    return;
  }

  const pin = getValue(`addMoneyPin`);

  if (pin == `1234`) {
    setCashinBalance(amount);
    alert(`Money added successfully`);
    return;
  } else {
    alert(`Pin is incorrect`);
    return;
  }
});
