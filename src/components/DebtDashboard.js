import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

function DebtDashboard() {
    const [publicDebt, setPublicDebt] = useState([]);
    const [debtLimit, setDebtLimit] = useState([]);
    const [operatingCash, setOperatingCash] = useState([]);
    const [depositsWithdrawals, setDepositsWithdrawals] = useState([]);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        axios.get('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/dts/public_debt_transactions')
            .then(response => {
                setPublicDebt(response.data);
            })
            .catch(error => {
                console.error("Error fetching public debt data", error);
            });

        axios.get('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/dts/debt_subject_to_limit')
            .then(response => {
                setDebtLimit(response.data);
            })
            .catch(error => {
                console.error("Error fetching debt limit data", error);
            });

        axios.get('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/dts/operating_cash_balance')
            .then(response => {
                setOperatingCash(response.data);
            })
            .catch(error => {
                console.error("Error fetching operating cash data", error);
            });

        axios.get('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/dts/deposits_withdrawals_operating_cash')
            .then(response => {
                setDepositsWithdrawals(response.data);
            })
            .catch(error => {
                console.error("Error fetching deposits/withdrawals data", error);
            });

        axios.get('http://localhost:5000/api/debt')
            .then(response => {
                const data = response.data;
                setChartData({
                    labels: data.dates,
                    datasets: [{
                        label: 'National Debt Over Time',
                        data: data.debtValues,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        tension: 0.1
                    }]
                });
            })
            .catch(error => {
                console.error("Error fetching chart data", error);
            });

    }, []);

    return (
        <div>
            <h1>National Debt Dashboard</h1>
            <h2>Public Debt Transactions</h2>
            <pre>{JSON.stringify(publicDebt, null, 2)}</pre>

            <h2>Debt Subject to Limit</h2>
            <pre>{JSON.stringify(debtLimit, null, 2)}</pre>

            <h2>Operating Cash Balance</h2>
            <pre>{JSON.stringify(operatingCash, null, 2)}</pre>

            <h2>Deposits & Withdrawals Operating Cash</h2>
            <pre>{JSON.stringify(depositsWithdrawals, null, 2)}</pre>

            {chartData && (
                <Line data={chartData} />
            )}
        </div>
    );
}

export default DebtDashboard;