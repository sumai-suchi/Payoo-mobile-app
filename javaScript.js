document.getElementById('submitButton').addEventListener('click',function(e)
{  
    e.preventDefault()
    console.log('typed submit')
    const mobileNumber=1790747374;
   const pinNumber=1234;

   const LogInMobileNumber=parseInt(document.getElementById('Mobile-number').value);
   const LogInPinNumber=parseInt(document.getElementById('Pin-number').value);

   console.log(LogInMobileNumber,LogInPinNumber)

   if(mobileNumber===LogInMobileNumber && pinNumber===LogInPinNumber)
   {
    console.log('valid credencials')
    window.location.href="./home.html"
   }
   else
   {
    console.log('invalid credencials')
   }
})