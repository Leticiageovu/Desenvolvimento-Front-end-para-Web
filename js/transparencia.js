function initTransparencia() {
  console.log("✅ initTransparencia iniciado!");

  const ctx1 = document.getElementById('graficoDoacoes');
  if (ctx1) {
    new Chart(ctx1, {
      type: 'pie',
      data: {
        labels: ['Dinheiro', 'Brinquedos', 'Livros'],
        datasets: [{
          data: [50, 30, 20],
          backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
        }]
      }
    });
  }

  const ctx2 = document.getElementById('graficoImpacto');
  if (ctx2) {
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['2024', '2025'],
        datasets: [
          {
            label: 'Crianças atendidas',
            data: [600, 850],
            backgroundColor: '#36A2EB'
          },
          {
            label: 'Horas de voluntariado',
            data: [1450, 1800],
            backgroundColor: '#FF6384'
          }
        ]
      }
    });
  }

  const ctx3 = document.getElementById('graficoProjetos');
  if (ctx3) {
    new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['Jan-Mar', 'Abr-Jun', 'Jul-Set', 'Out-Dez'],
        datasets: [{
          label: 'Projetos realizados',
          data: [5, 6, 5, 7],
          borderColor: '#4BC0C0',
          fill: false
        }]
      }
    });
  }
}
