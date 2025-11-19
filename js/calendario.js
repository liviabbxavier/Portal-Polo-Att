// Seletores
const currentDate = document.querySelector(".current-date");
const daysContainer = document.getElementById("days");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Data atual
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

// Nomes dos meses
const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function gerarCalendario(mes, ano) {
  const diasNoMes = new Date(ano, mes + 1, 0).getDate(); // total de dias
  const primeiroDiaSemana = new Date(ano, mes, 1).getDay(); // 0=Dom, 6=Sáb
  const ultimoDiaSemana = new Date(ano, mes, diasNoMes).getDay();
  const diasMesAnterior = new Date(ano, mes, 0).getDate();

  daysContainer.innerHTML = "";

  // Atualiza cabeçalho
  currentDate.textContent = `${months[mes]} ${ano}`;

  // Dias do mês anterior (inativos)
  for (let i = primeiroDiaSemana; i > 0; i--) {
    const li = document.createElement("li");
    li.textContent = diasMesAnterior - i + 1;
    li.classList.add("inactive");
    daysContainer.appendChild(li);
  }

  // Dias do mês atual
  for (let dia = 1; dia <= diasNoMes; dia++) {
    const li = document.createElement("li");
    li.textContent = dia;

    // Destacar o dia atual
    if (
      dia === date.getDate() &&
      mes === date.getMonth() &&
      ano === date.getFullYear()
    ) {
      li.classList.add("active");
    }

    daysContainer.appendChild(li);
  }

  // Dias do próximo mês (inativos)
  for (let i = ultimoDiaSemana; i < 6; i++) {
    const li = document.createElement("li");
    li.textContent = i - ultimoDiaSemana + 1;
    li.classList.add("inactive");
    daysContainer.appendChild(li);
  }
}

// Botões de navegação
prevBtn.addEventListener("click", () => {
  currMonth--;
  if (currMonth < 0) {
    currMonth = 11;
    currYear--;
  }
  gerarCalendario(currMonth, currYear);
});

nextBtn.addEventListener("click", () => {
  currMonth++;
  if (currMonth > 11) {
    currMonth = 0;
    currYear++;
  }
  gerarCalendario(currMonth, currYear);
});

// Inicialização
gerarCalendario(currMonth, currYear);