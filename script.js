document.addEventListener('DOMContentLoaded', function() {
    const investments = [
        { name: 'Ação XYZ', value: 10000, returns: 500 },
        { name: 'Tesouro Direto', value: 5000, returns: 250 },
        { name: 'Fundo Imobiliário', value: 7000, returns: 350 }
    ];

    function updateDashboard() {
        const totalBalance = investments.reduce((sum, investment) => sum + investment.value, 0);
        const totalReturns = investments.reduce((sum, investment) => sum + investment.returns, 0);

        document.getElementById('total-balance').textContent = `R$ ${totalBalance.toFixed(2)}`;
        document.getElementById('total-returns').textContent = `R$ ${totalReturns.toFixed(2)}`;

        const investmentList = document.getElementById('investment-list');
        investments.forEach(investment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${investment.name}</td>
                <td>R$ ${investment.value.toFixed(2)}</td>
                <td>R$ ${investment.returns.toFixed(2)}</td>
            `;
            investmentList.appendChild(row);
        });
    }

    updateDashboard();
});
