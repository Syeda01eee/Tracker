
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const totalExpense = document.getElementById('totalExpense');

let total = 0;

expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('expenseName').value;
  const amount = parseFloat(document.getElementById('expenseAmount').value);
  
  if (name && amount) {
    const li = document.createElement('li');
    li.innerHTML = `${name} - $${amount.toFixed(2)} <button onclick="removeExpense(this, ${amount})">X</button>`;
    expenseList.appendChild(li);
    
    total += amount;
    totalExpense.textContent = total.toFixed(2);
    
    expenseForm.reset();
  }
});

function removeExpense(element, amount) {
  expenseList.removeChild(element.parentElement);
  total -= amount;
  totalExpense.textContent = total.toFixed(2);
}
