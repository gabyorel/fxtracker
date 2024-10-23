function convertCurrency() {
    const eurAmount = document.getElementById('euroAmount').value;
    const conversionResult = document.getElementById('conversionResult');

    if (eurAmount && currentRate) {
        const usdAmount = (eurAmount * parseFloat(currentRate.innerHTML)).toFixed(2);
        conversionResult.textContent = `${eurAmount} EUR = ${usdAmount} USD`;
    } else {
        conversionResult.textContent = 'Please enter a valid amount.';
    }
}