document.getElementById(`bonus-btn`).addEventListener(`click`, function () {
  const coupun = getValue(`bonus-coupon`);
  setBonusBalance(coupun);
  let amount = 0;
  if (coupun === `mk100`) {
    amount = 100;
  } else if (coupun === `mk200`) {
    amount = 200;
  } else if (coupun === `mk300`) {
    amount = 300;
  } else {
    return;
  }
  const tranHistory = document.getElementById(`tranHistory`);
  const noTranHis = document.getElementById(`noTranHistory`);
  noTranHis.classList.add(`hidden`);

  const tranCard = document.createElement(`div`);
  tranCard.innerHTML = `
                 <div class="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div class="collapse-title font-semibold">Bonus Money <i class="fa-solid fa-angles-down"></i></div>
                    <div class="collapse-content text-sm">
                        <ul class="text-sm font-light">
                            <li><span class="font-medium">Amount:</span> £${amount}</li>
                            <li><span class="font-medium">Coupon:</span> ${coupun}</li>
                            <li><span class="font-medium">Date:</span> ${new Date()}</li>
                        </ul>
                    </div>
                </div>
    `;

  tranHistory.appendChild(tranCard);
  document.getElementById(`bonus-form`).reset();
  return;
});
