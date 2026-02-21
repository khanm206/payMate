document.getElementById(`addMoney-btn`).addEventListener(`click`, function () {
  const bank = getValue(`addBank`);
  if (bank === ``) {
    alert(`Select a bank before proceeding`);
    return;
  }

  const accountNum = getValue(`account-num`);
  if (isNaN(accountNum) || accountNum.length != 8) {
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
                 <div class="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div class="collapse-title font-semibold">Money Added <i class="fa-solid fa-angles-down"></i></div>
                    <div class="collapse-content text-sm">
                        <ul class="text-sm font-light">
                            <li><span class="font-medium">Amount:</span> £${amount}</li>
                            <li><span class="font-medium">Bank:</span> ${bank}</li>
                            <li><span class="font-medium">Account Number:</span> ${accountNum}</li>
                            <li><span class="font-medium">Date:</span> ${new Date()}</li>
                        </ul>
                    </div>
                </div>
    `;

    tranHistory.appendChild(tranCard);

    document.getElementById(`addMoney-form`).reset();
    return;
  } else {
    alert(`Pin is incorrect`);
    return;
  }
});
