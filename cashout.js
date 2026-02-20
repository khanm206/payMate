document.getElementById(`cashout-btn`).addEventListener(`click`, function () {
  const amount = getValue(`cashout-amount`);
  if (amount === `` || amount == 0) {
    alert(`Invalid amount`);
    return;
  }
  const balance = getBalance();

  if (Number(amount) > balance) {
    alert(`Insufficient balance!`);
    return;
  }
  const agent = getValue(`cashout-agent`);
  const pin = getValue(`cashout-pin`);

  if (isNaN(agent) || agent.length !== 11) {
    alert(`Agent number is invalid!`);
    return;
  }

  if (pin === `1234`) {
    setCashoutBalance(amount);
    alert(`Cashout Successful!`);
    return;
  } else {
    alert(`Pin is incorrect!`);
  }
});
