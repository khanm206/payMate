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

  if (amount == `` || amount <= 0 || amount.startsWith("+")) {
    alert(`Invalid amount`);
    return;
  }

  const pin = getValue(`addMoneyPin`);

  if (pin == `1234`) {
    setCashinBalance(amount);
    alert(`£${amount} added successfully from ${bank}`);

    const tranHistory = document.getElementById(`tranHistory`);

    const tranCard = document.createElement(`div`);
    tranCard.innerHTML = `
    <div class=" bg-white p-5 rounded-2xl border border-neutral/10">
                    <h3 class="font-medium">Money Added</h3>
                    <ul class="text-sm font-light">
                        <li><span class="font-medium">Amount:</span> £${amount}</li>
                        <li><span class="font-medium">Bank:</span> ${bank}</li>
                        <li><span class="font-medium">Account Number:</span> ${accountNum}</li>
                        <li><span class="font-medium">Date:</span> ${new Date()}</li>
                    </ul>

                </div>
    `;

    tranHistory.appendChild(tranCard);
    return;
  } else {
    alert(`Pin is incorrect`);
    return;
  }
});
