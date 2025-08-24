console.log('this is home')

document.getElementById('submitButton').addEventListener('click',function(e){
    e.preventDefault();

 const bankName=document.getElementById('Bank').value;

 const Amount=parseInt(document.getElementById('Amount').value)
 const PinNumber=parseInt(document.getElementById('Pin-number').value)
 const accountNumber=parseInt(document.getElementById('Account-number').value)

 console.log(bankName,Amount,PinNumber,accountNumber)

 let Money=document.getElementById('main-money');
 let MoneyAmount=parseInt(Money.innerText)
 console.log(Money,MoneyAmount)

 let totalMoney=MoneyAmount+Amount
 console.log(totalMoney)


  
 document.getElementById('main-money').innerText=totalMoney


})