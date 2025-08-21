document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculatorForm');
    const resultsDiv = document.getElementById('results');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateOwnership();
    });
    
    // Add real-time calculation on input change
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (areAllInputsValid()) {
                calculateOwnership();
            }
        });
    });
    
    function areAllInputsValid() {
        const options = parseFloat(document.getElementById('options').value);
        const sharesAuthorized = parseFloat(document.getElementById('sharesAuthorized').value);
        const sharesOutstanding = parseFloat(document.getElementById('sharesOutstanding').value);
        
        return !isNaN(options) && !isNaN(sharesAuthorized) && !isNaN(sharesOutstanding) &&
               options >= 0 && sharesAuthorized > 0 && sharesOutstanding > 0;
    }
    
    function calculateOwnership() {
        // Get input values
        const options = parseFloat(document.getElementById('options').value);
        const sharesAuthorized = parseFloat(document.getElementById('sharesAuthorized').value);
        const sharesOutstanding = parseFloat(document.getElementById('sharesOutstanding').value);
        
        // Validate inputs
        if (isNaN(options) || isNaN(sharesAuthorized) || isNaN(sharesOutstanding)) {
            hideResults();
            return;
        }
        
        if (options < 0 || sharesAuthorized <= 0 || sharesOutstanding <= 0) {
            hideResults();
            showError('Please enter valid positive numbers');
            return;
        }
        
        if (sharesOutstanding > sharesAuthorized) {
            hideResults();
            showError('Shares outstanding cannot exceed shares authorized');
            return;
        }
        
        // Calculate ownership based on outstanding shares
        const ownershipPercent = (options / sharesOutstanding) * 100;
        const basisPoints = ownershipPercent * 100;
        
        // Calculate fully diluted ownership based on authorized shares
        const fullyDilutedPercent = (options / sharesAuthorized) * 100;
        const fullyDilutedBasisPoints = fullyDilutedPercent * 100;
        
        // Display results
        displayResults({
            ownershipPercent,
            basisPoints,
            fullyDilutedPercent,
            fullyDilutedBasisPoints
        });
        
        hideError();
    }
    
    function displayResults(results) {
        document.getElementById('ownershipPercent').textContent = formatPercentage(results.ownershipPercent);
        document.getElementById('basisPoints').textContent = formatBasisPoints(results.basisPoints);
        document.getElementById('fullyDilutedPercent').textContent = formatPercentage(results.fullyDilutedPercent);
        document.getElementById('fullyDilutedBasisPoints').textContent = formatBasisPoints(results.fullyDilutedBasisPoints);
        
        resultsDiv.style.display = 'block';
    }
    
    function hideResults() {
        resultsDiv.style.display = 'none';
    }
    
    function formatPercentage(value) {
        if (value >= 0.01) {
            return value.toFixed(2) + '%';
        } else if (value >= 0.001) {
            return value.toFixed(3) + '%';
        } else {
            return value.toFixed(4) + '%';
        }
    }
    
    function formatBasisPoints(value) {
        if (value >= 1) {
            return Math.round(value).toLocaleString() + ' bps';
        } else if (value >= 0.1) {
            return value.toFixed(1) + ' bps';
        } else {
            return value.toFixed(2) + ' bps';
        }
    }
    
    function showError(message) {
        let errorDiv = document.getElementById('error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'error-message';
            errorDiv.style.cssText = `
                background: #f8d7da;
                color: #721c24;
                padding: 12px;
                border-radius: 8px;
                margin: 15px 0;
                border: 1px solid #f5c6cb;
            `;
            form.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
    
    function hideError() {
        const errorDiv = document.getElementById('error-message');
        if (errorDiv) {
            errorDiv.style.display = 'none';
        }
    }
    
    // Add some example calculations on page load
    function loadExample() {
        document.getElementById('options').value = '10000';
        document.getElementById('sharesAuthorized').value = '10000000';
        document.getElementById('sharesOutstanding').value = '8000000';
        calculateOwnership();
    }
    
    // Uncomment the line below to load an example on page load
    // loadExample();
});