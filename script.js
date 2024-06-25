let transactionCount = 0;

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const desc = document.getElementById('desc').value;
  const amt = +document.getElementById('amt').value;
  const transactionTable = document.getElementById('transaction-table');
  
  transactionCount++;
  
  const newRow = transactionTable.insertRow();
  newRow.innerHTML = `
    <td>${transactionCount}</td>
    <td>${desc}</td>
    <td class="${amt < 0 ? 'minus' : 'plus'}">₹ ${amt.toFixed(2)}</td>
  `;
  
  updateBalance(amt);
  document.getElementById('form').reset();
});

function updateBalance(amt) {
  const balanceEl = document.getElementById('balance');
  const incomeEl = document.getElementById('inc-amt');
  const expenseEl = document.getElementById('exp-amt');
  
  let balance = parseFloat(balanceEl.innerText.replace('₹', '').replace(',', ''));
  let income = parseFloat(incomeEl.innerText.replace('₹', '').replace(',', ''));
  let expense = parseFloat(expenseEl.innerText.replace('₹', '').replace(',', ''));
  
  if (amt > 0) {
    income += amt;
    incomeEl.innerText = `₹ ${income.toFixed(2)}`;
  } else {
    expense += Math.abs(amt);
    expenseEl.innerText = `₹ ${expense.toFixed(2)}`;
  }
  
  balance += amt;
  balanceEl.innerText = `₹ ${balance.toFixed(2)}`;
}