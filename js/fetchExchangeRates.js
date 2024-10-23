async function fetchExchangeRates() {
    try {
        //const url = 'https://your-s3-bucket-or-api-url/data.json';
        //const response = await fetch(url);
        //const data = await response.json();

        const data = [
            { "timestamp": "2024-10-21T10:00:00Z", "conversion_rate": 1.1150 },
            { "timestamp": "2024-10-21T09:00:00Z", "conversion_rate": 1.1105 },
            { "timestamp": "2024-10-21T08:00:00Z", "conversion_rate": 1.1089 },
            { "timestamp": "2024-10-21T07:00:00Z", "conversion_rate": 1.1122 },
            { "timestamp": "2024-10-21T06:00:00Z", "conversion_rate": 1.1094 },
            { "timestamp": "2024-10-21T05:00:00Z", "conversion_rate": 1.1068 },
            { "timestamp": "2024-10-21T04:00:00Z", "conversion_rate": 1.1075 },
            { "timestamp": "2024-10-21T03:00:00Z", "conversion_rate": 1.1110 },
            { "timestamp": "2024-10-21T02:00:00Z", "conversion_rate": 1.1091 },
            { "timestamp": "2024-10-21T01:00:00Z", "conversion_rate": 1.1057 },
            { "timestamp": "2024-10-21T00:00:00Z", "conversion_rate": 1.1082 },
            { "timestamp": "2024-10-20T23:00:00Z", "conversion_rate": 1.1123 },
            { "timestamp": "2024-10-20T22:00:00Z", "conversion_rate": 1.1101 },
            { "timestamp": "2024-10-20T21:00:00Z", "conversion_rate": 1.1088 },
            { "timestamp": "2024-10-20T20:00:00Z", "conversion_rate": 1.1070 },
            { "timestamp": "2024-10-20T19:00:00Z", "conversion_rate": 1.1062 },
            { "timestamp": "2024-10-20T18:00:00Z", "conversion_rate": 1.1048 },
            { "timestamp": "2024-10-20T17:00:00Z", "conversion_rate": 1.1059 },
            { "timestamp": "2024-10-20T16:00:00Z", "conversion_rate": 1.1102 },
            { "timestamp": "2024-10-20T15:00:00Z", "conversion_rate": 1.1131 },
            { "timestamp": "2024-10-20T14:00:00Z", "conversion_rate": 1.1120 },
            { "timestamp": "2024-10-20T13:00:00Z", "conversion_rate": 1.1107 },
            { "timestamp": "2024-10-20T12:00:00Z", "conversion_rate": 1.1085 },
            { "timestamp": "2024-10-20T11:00:00Z", "conversion_rate": 1.1054 }
        ];

        const timestamps = data.map(entry => new Date(entry.timestamp));
        const rates = data.map(entry => entry.conversion_rate);

        const currentRate = rates[rates.length - 1];
        document.getElementById('currentRate').textContent = `${currentRate}`;

        displayChart(timestamps, rates);
    } catch (error) {
        console.log(error);
        document.getElementById('currentRate').textContent = 'Erreur lors du chargement';
    }
}

document.addEventListener('DOMContentLoaded', fetchExchangeRates);