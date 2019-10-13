const calculateResults = () =>{
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

        document.querySelector('.results').style.display = 'block';
        
        document.getElementById('loading').style.display = 'none';
    }else{
        displayError('Please check your numbers...');
    }
}
//Submit 
document.getElementById('calculate-result').addEventListener('submit', (e)=>{
      // Hide results
  document.querySelector('.results').style.display = 'none';
  
  // Show loader
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});


const displayError = (error)=>{
    const errorDiv = document.createElement('div');
    document.querySelector('.results').style.display = 'none';

    document.getElementById('loading').style.display = 'none';
    
    errorDiv.className ='alert';
    
    errorDiv.appendChild(document.createTextNode(error));

    const container = document.querySelector('.container');

    const heading = document.querySelector('.heading');
    
    container.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}
// Clear error
function clearError(){
    document.querySelector('.alert').remove();
  }
