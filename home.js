console.log('this is home')

let pin=1234;

function getValue(id){
   
  return document.getElementById(id);
}

//function to get inner text
function getInnerTextMainBalance(id){

  let Money=getValue(id);
 let MoneyAmount=parseInt(Money.innerText);
 
  return MoneyAmount;

}

//setMain Balance
function setMainBalance(value)
{
   return  getValue('main-money').innerText=value

}

//Toggling features

function toggleWithButtons(id)
{
   const forms= document.getElementsByClassName('form')
  for (const form of forms) {
       
    form.style.display='none';
  }
   
  getValue(id).style.display='block';
}






getValue('submitButton').addEventListener('click',function(e){
    e.preventDefault();

 const bankName=getValue('Bank').value;

 const Amount=parseInt(getValue('Amount').value)
 const PinNumber=parseInt(getValue('Pin-number').value)
 const accountNumber=parseInt(getValue('Account-number').value)

 console.log(bankName,Amount,PinNumber,accountNumber)

 if(pin !==PinNumber){

    console.log('wrong pin number')
    return;
 }
  
//   if(accountNumber >=11){

//     console.log('wrong account number.it should be 11 digit')
//     return;
//  }
  
 if(Amount <0 || Amount ===0){
    
    console.log('this amount cant be add,sorry try again')
  
 }
 

 let totalMoney=getInnerTextMainBalance('main-money')+Amount
 console.log(totalMoney)


  
setMainBalance(totalMoney);


})



//Cash out section

getValue('withdraw-btn').addEventListener('click',function(e)
{
  e.preventDefault()
  const CashOutPin=parseInt( getValue('Pin').value)
  if(CashOutPin!== pin){
       
    console.log('wrong pin number')
  }
  let amount=parseInt(getValue('amount').value);
  console.log(amount)

  

 let totalMoney=getInnerTextMainBalance('main-money')-amount;
 
  setMainBalance(totalMoney)

})


// Toggle Functionality

getValue('add-money-btn').addEventListener('click',function(){
 
  

  toggleWithButtons('add-money')

})
getValue('cash-out-btn').addEventListener('click',function(){
   
toggleWithButtons('cash-out')

})

getValue('transfer-money-btn').addEventListener('click',function(){
   
toggleWithButtons('transfer-parent')

})
getValue('get-bonus-btn').addEventListener('click',function(){
   
toggleWithButtons('get-bonus-parent')

})