function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = (amount / persons).toFixed(2);
    document.getElementById('result').innerText = bill;
}