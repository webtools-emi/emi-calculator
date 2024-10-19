// Update the rate display dynamically
function updateRate() {
    let rate = document.getElementById('rate').value;
    document.getElementById('rate-display').textContent = rate + "%";
}

// Update the tenure display dynamically
function updateTenure() {
    let tenure = document.getElementById('tenure').value;
    document.getElementById('tenure-display').textContent = tenure + " Years";
}

// Calculate EMI
function calculateEMI() {
    let principal = document.getElementById('principal').value;
    let rate = document.getElementById('rate').value;
    let tenure = document.getElementById('tenure').value;

    let monthlyRate = rate / 12 / 100; // Convert annual rate to monthly rate
    let months = tenure * 12; // Convert years to months

    // EMI calculation formula
    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    
    document.getElementById('emi-result').textContent = emi.toFixed(2);
}
