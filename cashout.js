document.getElementById(`cashout-btn`).addEventListener(`click`, function () {
  const amount = getValue(`cashout-amount`);
  if (amount === ``) {
    alert(`Invalid amount`);
    return;
  }
  const balance = getText(`balance`);

  if (Number(amount) > Number(balance.innerText)) {
    alert(`Insufficient balance!`);
    return;
  }
  const agent = getValue(`cashout-agent`);
  const pin = getValue(`cashout-pin`);

  if (agent.length != 11) {
    alert(`Agent number is invalid!`);
    return;
  }

  if (pin === `1234`) {
    const newBalance = Number(balance.innerText) - Number(amount);

    balance.innerText = newBalance;
    alert(`Cashout Successful!`);
    return;
  } else {
    alert(`Pin is incorrect!`);
  }
});
