function displayChart(timestamps, rates) {
    const ctx = document.getElementById('exchangeRateChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [{
                label: 'EUR/USD',
                data: rates,
                borderColor: 'rgba(111, 249, 0, 0.8)',
                backgroundColor: 'rgba(111, 249, 0, 0.2)',
                fill: true,
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'hour',
                        tooltipFormat: 'HH:mm',
                        displayFormats: {
                            hour: 'HH:mm',
                        }
                    },
                    title: {
                        display: true,
                        text: 'Time (24h)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Exchange Rate'
                    },
                    beginAtZero: false
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}