const per5Button = document.getElementById('per5');
const per10Button = document.getElementById('per10');
const per15Button = document.getElementById('per15');
const billValue = document.getElementById('billValue');
const output = document.getElementById('tipOutput');

per5Button.addEventListener('click', getBillValue5);
per10Button.addEventListener('click', getBillValue10);
per15Button.addEventListener('click', getBillValue15);

function getBillValue5() {
  let billValueText = document.getElementById('billValue').value;
  output.innerHTML = (billValueText * 5) / 100;
}

function getBillValue10() {
  let billValueText = document.getElementById('billValue').value;
  output.innerHTML = (billValueText * 10) / 100;
}

function getBillValue15() {
  let billValueText = document.getElementById('billValue').value;
  output.innerHTML = (billValueText * 15) / 100;
}
