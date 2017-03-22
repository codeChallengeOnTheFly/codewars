function formatMoney(amount){
  amount = amount.toFixed(2);
  amount = "$" + amount.toString();
  return amount;
}
