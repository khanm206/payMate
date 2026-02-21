document.getElementById(`payBill-btn`).addEventListener(`click`, function () {
  const biller = getValue(`add-biller`);
  if (biller === ``) {
    alert(`Select a biller before proceeding`);
    return;
  }

  const amount = getValue(`bill-amount`);
  const balance = getBalance();
  if (Number(amount) > balance) {
    alert(`Insufficient balance!`);
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert(`Invalid amount`);
    return;
  }

  const billerAcc = getValue(`biller-account`);

  if (isNaN(billerAcc) || billerAcc.length != 8) {
    alert(`Invalid account number`);
    return;
  }

  const pin = getValue(`pay-bill-pin`);
  if (pin === `1234`) {
    setCashoutBalance(amount);
    alert(`£${amount} paid to ${biller} successfully`);

    const tranHistory = document.getElementById(`tranHistory`);
    const noTranHis = document.getElementById(`noTranHistory`);
    noTranHis.classList.add(`hidden`);

    const tranCard = document.createElement(`div`);
    tranCard.innerHTML = `
                 <div class="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div class="collapse-title font-semibold">Bill Paid <i class="fa-solid fa-angles-down"></i></div>
                    <div class="collapse-content text-sm">
                        <ul class="text-sm font-light">
                            <li><span class="font-medium">Amount:</span> £${amount}</li>
                            <li><span class="font-medium">Biller:</span> ${biller}</li>
                            <li><span class="font-medium">Biller Account Number:</span> ${billerAcc}</li>
                            <li><span class="font-medium">Date:</span> ${new Date()}</li>
                        </ul>
                    </div>
                </div>
    `;

    tranHistory.appendChild(tranCard);

    document.getElementById(`payBill-form`).reset();
    return;
  } else {
    alert(`Pin is incorrect`);
    return;
  }
});
