document.getElementById(`cashout-btn`).addEventListener(`click`, function () {
  const amount = getValue(`cashout-amount`);
  if (amount === `` || amount <= 0) {
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
    alert(`£${amount} cashout Successful!`);
    const tranHistory = document.getElementById(`tranHistory`);

    const tranCard = document.createElement(`div`);
    tranCard.innerHTML = `
                 <div class="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div class="collapse-title font-semibold">Money Withdrawn <i class="fa-solid fa-angles-down"></i></div>
                    <div class="collapse-content text-sm">
                        <ul class="text-sm font-light">
                            <li><span class="font-medium">Amount:</span> £${amount}</li>
                            <li><span class="font-medium">Agent Number:</span> ${agent}</li>
                            <li><span class="font-medium">Date:</span> ${new Date()}</li>
                        </ul>
                    </div>
                </div>
    `;

    tranHistory.appendChild(tranCard);
    return;
  } else {
    alert(`Pin is incorrect!`);
  }
});
