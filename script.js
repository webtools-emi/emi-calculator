body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
}

h1 {
    color: #333;
}

h2 {
    margin-top: 30px;
    color: #333;
}

.input-container {
    margin-bottom: 20px;
}

input[type="number"], input[type="range"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

/* Tab Links */
.tabs {
    margin-bottom: 20px;
}

.tab-link {
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #f4f4f4;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.tab-link.active {
    background-color: #4CAF50;
    color: white;
}

/* Loan Tab Content */
.loan-tab {
    display: none;
}

.loan-tab.active {
    display: block;
}
