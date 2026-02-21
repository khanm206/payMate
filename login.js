document.getElementById(`login-btn`).addEventListener(`click`, function () {
  const inputMobile = document.getElementById(`input-mobile`).value;
  const inputPin = document.getElementById(`input-pin`).value;

  if (
    inputMobile === `04710203040` &&
    inputMobile.length == 11 &&
    !isNaN(inputMobile) &&
    inputPin == `1234`
  ) {
    window.location.assign("home.html");
  } else {
    alert(`Login failed`);
    return;
  }
});
