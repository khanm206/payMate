document.getElementById(`cashout-btn`).addEventListener(`click`, function () {
  const amount = document.getElementById(`cashout-amount`).value;
  const balance = document.getElementById(`balance`);

  if (Number(amount) > Number(balance.innerText)) {
    alert(`Insufficient balance!`);
    return;
  }
  const agent = document.getElementById(`cashout-agent`).value;
  const pin = document.getElementById(`cashout-pin`).value;

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
