console.log('this is home')

let pin=1234;


document.getElementById('submitButton').addEventListener('click',function(e){
    e.preventDefault();

 const bankName=document.getElementById('Bank').value;

 const Amount=parseInt(document.getElementById('Amount').value)
 const PinNumber=parseInt(document.getElementById('Pin-number').value)
 const accountNumber=parseInt(document.getElementById('Account-number').value)

 console.log(bankName,Amount,PinNumber,accountNumber)

 if(pin !==PinNumber){

    console.log('wrong pin number')
    return;
 }
  
  if(accountNumber >11){

    console.log('wrong account number.it should be 11 digit')
    return;
 }
  
 if(Amount <0 || Amount ===0){
    
    console.log('this amount cant be add,sorry try again')
  
 }
 let Money=document.getElementById('main-money');
 let MoneyAmount=parseInt(Money.innerText)
 console.log(Money,MoneyAmount)

 let totalMoney=MoneyAmount+Amount
 console.log(totalMoney)


  
 document.getElementById('main-money').innerText=totalMoney


})

// Toggle Functionality

document.getElementById('add-money-btn').addEventListener('click',function(){

    document.getElementById('cash-out').style.display='none';
     document.getElementById('add-money').style.display='Block';


})
document.getElementById('cash-out-btn').addEventListener('click',function(){

  document.getElementById('add-money').style.display='none';
   let CashOut=document.getElementById('cash-out');
   CashOut.classList.remove('hidden')
   CashOut.style.display='block';

})
