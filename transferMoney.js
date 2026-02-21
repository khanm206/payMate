document.getElementById(`transfer-btn`).addEventListener(`click`, function () {
  const amount = getValue(`transfer-amount`);

  if (amount == `` || amount <= 0) {
    alert(`Invalid amount`);
    return;
  }

  const balance = getBalance();

  if (Number(amount) > balance) {
    alert(`Insufficient balance!`);
    return;
  }

  const userAcc = getValue(`transfer-account`);

  if (isNaN(userAcc) || userAcc.length != 11) {
    alert(`Invalid account number`);
    return;
  }

  const pin = getValue(`transfer-pin`);

  if (pin === `1234`) {
    setCashoutBalance(amount);
    alert(`£${amount} successfully transfered to ${userAcc}`);

    const tranHistory = document.getElementById(`tranHistory`);
    const noTranHis = document.getElementById(`noTranHistory`);
    noTranHis.classList.add(`hidden`);

    const tranCard = document.createElement(`div`);
    tranCard.innerHTML = `
                 <div class="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div class="collapse-title font-semibold">Money Transfered <i class="fa-solid fa-angles-down"></i></div>
                    <div class="collapse-content text-sm">
                        <ul class="text-sm font-light">
                            <li><span class="font-medium">Amount:</span> £${amount}</li>
                            <li><span class="font-medium">Account Number:</span> ${userAcc}</li>
                            <li><span class="font-medium">Date:</span> ${new Date()}</li>
                        </ul>
                    </div>
                </div>
    `;

    tranHistory.appendChild(tranCard);

    document.getElementById(`transfer-form`).reset();
    return;
  } else {
    alert(`Pin is incorrect!`);
    return;
  }
});
