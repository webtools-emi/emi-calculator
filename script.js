// Update the rate and tenure display dynamically
function updateRate(rateId, displayId) {
    let rate = document.getElementById(rateId).value;
    document.getElementById(displayId).textContent = rate + "%";
}

function updateTenure(tenureId, displayId) {
    let tenure = document.getElementById(tenureId).value;
    document.getElementById(displayId).textContent = tenure + " Years";
}

// Function to switch between loan types
function openLoanType(evt, loanType) {
    var i, loanTab, tabLink;

    // Hide all loan tabs
    loanTab = document.getElementsByClassName("loan-tab");
    for (i = 0; i < loanTab.length; i++) {
        loanTab[i].style.display = "none";
    }

    // Remove active class from all tab links
    tabLink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }

    // Show the current loan tab and add active class to clicked tab link
    document.getElementById(loanType).style.display = "block";
    evt.currentTarget.className += " active";
}

// EMI Calculation Function
function calculateEMI(type) {
    let principal, rate, tenure, emiResultId;

    if (type === 'home') {
        principal = document.getElementById('home-principal').value;
        rate = document.getElementById('home-rate').value;
        tenure = document.getElementById('home-tenure').value;
        emiResultId = 'home-emi-result';
    } else if (type === 'car') {
        principal = document.getElementById('car-principal').value;
        rate = document.getElementById('car-rate').value;
        tenure = document.getElementById('car-tenure').value;
        emiResultId = 'car-emi-result';
    } else if (type === 'personal') {
        principal = document.getElementById('personal-principal').value;
        rate = document.getElementById('personal-rate').value;
        tenure = document.getElementById('personal-tenure').value;
        emiResultId = 'personal-emi-result';
    }

    let monthlyRate = rate / 12 / 100;
    let months = tenure * 12;

    // EMI calculation formula
    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    
    document.getElementById(emiResultId).textContent = emi.toFixed(2);
}
