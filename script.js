// =====================================================
// TABELA PERIÓDICA
// =====================================================

const elementos = [
  { nome: "Hidrogênio", simbolo: "H", numero: 1, massa: "1.008", Classificacao: "Não metal"},
  { nome: "Hélio", simbolo: "He", numero: 2, massa: "4.0026", Classificacao: "Gás nobre"},
  { nome: "Lítio", simbolo: "Li", numero: 3, massa: "6.94", Classificacao: "Metal alcalino"},
  { nome: "Berílio", simbolo: "Be", numero: 4, massa: "9.0122", Classificacao: "Metal alcalino-terroso"},
  { nome: "Boro", simbolo: "B", numero: 5, massa: "10.81", Classificacao: "Semimetal"},
  { nome: "Carbono", simbolo: "C", numero: 6, massa: "12.011", Classificacao: "Não metal"},
  { nome: "Nitrogênio", simbolo: "N", numero: 7, massa: "14.007", Classificacao: "Não metal"},
  { nome: "Oxigênio", simbolo: "O", numero: 8, massa: "15.999", Classificacao: "Não metal"},
  { nome: "Flúor", simbolo: "F", numero: 9, massa: "18.998", Classificacao: "Halogênio"},
  { nome: "Neônio", simbolo: "Ne", numero: 10, massa: "20.180", Classificacao: "Gás nobre"},
  { nome: "Sódio", simbolo: "Na", numero: 11, massa: "22.990", Classificacao: "Metal alcalino"},
  { nome: "Magnésio", simbolo: "Mg", numero: 12, massa: "24.305", Classificacao: "Metal alcalino-terroso"},
  { nome: "Alumínio", simbolo: "Al", numero: 13, massa: "26.982", Classificacao: "Metal pós-transição"},
  { nome: "Silício", simbolo: "Si", numero: 14, massa: "28.085", Classificacao: "Semimetal"},
  { nome: "Fósforo", simbolo: "P", numero: 15, massa: "30.974", Classificacao: "Não metal"},
  { nome: "Enxofre", simbolo: "S", numero: 16, massa: "32.06", Classificacao: "Não metal"},
  { nome: "Cloro", simbolo: "Cl", numero: 17, massa: "35.45", Classificacao: "Halogênio"},
  { nome: "Argônio", simbolo: "Ar", numero: 18, massa: "39.948", Classificacao: "Gás nobre"},
  { nome: "Potássio", simbolo: "K", numero: 19, massa: "39.098", Classificacao: "Metal alcalino"},
  { nome: "Cálcio", simbolo: "Ca", numero: 20, massa: "40.078", Classificacao: "Metal alcalino-terroso"},
  { nome: "Escândio", simbolo: "Sc", numero: 21, massa: "44.956", Classificacao: "Metal de transição"},
  { nome: "Titânio", simbolo: "Ti", numero: 22, massa: "47.867", Classificacao: "Metal de transição"},
  { nome: "Vanádio", simbolo: "V", numero: 23, massa: "50.942", Classificacao: "Metal de transição"},
  { nome: "Cromo", simbolo: "Cr", numero: 24, massa: "51.996", Classificacao: "Metal de transição"},
  { nome: "Manganês", simbolo: "Mn", numero: 25, massa: "54.938", Classificacao: "Metal de transição"},
  { nome: "Ferro", simbolo: "Fe", numero: 26, massa: "55.845", Classificacao: "Metal de transição"},
  { nome: "Cobalto", simbolo: "Co", numero: 27, massa: "58.933", Classificacao: "Metal de transição"},
  { nome: "Níquel", simbolo: "Ni", numero: 28, massa: "58.693", Classificacao: "Metal de transição"},
  { nome: "Cobre", simbolo: "Cu", numero: 29, massa: "63.546", Classificacao: "Metal de transição"},
  { nome: "Zinco", simbolo: "Zn", numero: 30, massa: "65.38", Classificacao: "Metal de transição"},
  { nome: "Gálio", simbolo: "Ga", numero: 31, massa: "69.723", Classificacao: "Metal pós-transição"},
  { nome: "Germânio", simbolo: "Ge", numero: 32, massa: "72.630", Classificacao: "Semimetal"},
  { nome: "Arsênio", simbolo: "As", numero: 33, massa: "74.922", Classificacao: "Semimetal"},
  { nome: "Selênio", simbolo: "Se", numero: 34, massa: "78.971", Classificacao: "Não metal"},
  { nome: "Bromo", simbolo: "Br", numero: 35, massa: "79.904", Classificacao: "Halogênio"},
  { nome: "Criptônio", simbolo: "Kr", numero: 36, massa: "83.798", Classificacao: "Gás nobre"},
  { nome: "Rubídio", simbolo: "Rb", numero: 37, massa: "85.468", Classificacao: "Metal alcalino"},
  { nome: "Estrôncio", simbolo: "Sr", numero: 38, massa: "87.62", Classificacao: "Metal alcalino-terroso"},
  { nome: "Ítrio", simbolo: "Y", numero: 39, massa: "88.906", Classificacao: "Metal de transição"},
  { nome: "Zircônio", simbolo: "Zr", numero: 40, massa: "91.224", Classificacao: "Metal de transição"},
  { nome: "Nióbio", simbolo: "Nb", numero: 41, massa: "92.906", Classificacao: "Metal de transição"},
  { nome: "Molibdênio", simbolo: "Mo", numero: 42, massa: "95.95", Classificacao: "Metal de transição"},
  { nome: "Tecnécio", simbolo: "Tc", numero: 43, massa: "[98]", Classificacao: "Metal de transição"},
  { nome: "Rutênio", simbolo: "Ru", numero: 44, massa: "101.07", Classificacao: "Metal de transição"},
  { nome: "Ródio", simbolo: "Rh", numero: 45, massa: "102.91", Classificacao: "Metal de transição"},
  { nome: "Paládio", simbolo: "Pd", numero: 46, massa: "106.42", Classificacao: "Metal de transição"},
  { nome: "Prata", simbolo: "Ag", numero: 47, massa: "107.87", Classificacao: "Metal de transição"},
  { nome: "Cádmio", simbolo: "Cd", numero: 48, massa: "112.41", Classificacao: "Metal de transição"},
  { nome: "Índio", simbolo: "In", numero: 49, massa: "114.82", Classificacao: "Metal pós-transição"},
  { nome: "Estanho", simbolo: "Sn", numero: 50, massa: "118.71", Classificacao: "Metal pós-transição"},
  { nome: "Antimônio", simbolo: "Sb", numero: 51, massa: "121.76", Classificacao: "Semimetal"},
  { nome: "Telúrio", simbolo: "Te", numero: 52, massa: "127.60", Classificacao: "Semimetal"},
  { nome: "Iodo", simbolo: "I", numero: 53, massa: "126.90", Classificacao: "Halogênio"},
  { nome: "Xenônio", simbolo: "Xe", numero: 54, massa: "131.29", Classificacao: "Gás nobre"},
  { nome: "Césio", simbolo: "Cs", numero: 55, massa: "132.91", Classificacao: "Metal alcalino"},
  { nome: "Bário", simbolo: "Ba", numero: 56, massa: "137.33", Classificacao: "Metal alcalino-terroso"},
  { nome: "Lantânio", simbolo: "La", numero: 57, massa: "138.91", Classificacao: "Lantanídeo"},
  { nome: "Cério", simbolo: "Ce", numero: 58, massa: "140.12", Classificacao: "Lantanídeo"},
  { nome: "Praseodímio", simbolo: "Pr", numero: 59, massa: "140.91", Classificacao: "Lantanídeo"},
  { nome: "Neodímio", simbolo: "Nd", numero: 60, massa: "144.24", Classificacao: "Lantanídeo"},
  { nome: "Promécio", simbolo: "Pm", numero: 61, massa: "[145]", Classificacao: "Lantanídeo"},
  { nome: "Samário", simbolo: "Sm", numero: 62, massa: "150.36", Classificacao: "Lantanídeo"},
  { nome: "Európio", simbolo: "Eu", numero: 63, massa: "151.96", Classificacao: "Lantanídeo"},
  { nome: "Gadolínio", simbolo: "Gd", numero: 64, massa: "157.25", Classificacao: "Lantanídeo"},
  { nome: "Térbio", simbolo: "Tb", numero: 65, massa: "158.93", Classificacao: "Lantanídeo"},
  { nome: "Disprósio", simbolo: "Dy", numero: 66, massa: "162.50", Classificacao: "Lantanídeo"},
  { nome: "Hólmio", simbolo: "Ho", numero: 67, massa: "164.93", Classificacao: "Lantanídeo"},
  { nome: "Érbio", simbolo: "Er", numero: 68, massa: "167.26", Classificacao: "Lantanídeo"},
  { nome: "Túlio", simbolo: "Tm", numero: 69, massa: "168.93", Classificacao: "Lantanídeo"},
  { nome: "Itérbio", simbolo: "Yb", numero: 70, massa: "173.05", Classificacao: "Lantanídeo"},
  { nome: "Lutécio", simbolo: "Lu", numero: 71, massa: "174.97", Classificacao: "Lantanídeo"},
  { nome: "Háfnio", simbolo: "Hf", numero: 72, massa: "178.49", Classificacao: "Metal de transição"},
  { nome: "Tântalo", simbolo: "Ta", numero: 73, massa: "180.95", Classificacao: "Metal de transição"},
  { nome: "Tungstênio", simbolo: "W", numero: 74, massa: "183.84", Classificacao: "Metal de transição"},
  { nome: "Rênio", simbolo: "Re", numero: 75, massa: "186.21", Classificacao: "Metal de transição"},
  { nome: "Ósmio", simbolo: "Os", numero: 76, massa: "190.23", Classificacao: "Metal de transição"},
  { nome: "Irídio", simbolo: "Ir", numero: 77, massa: "192.22", Classificacao: "Metal de transição"},
  { nome: "Platina", simbolo: "Pt", numero: 78, massa: "195.08", Classificacao: "Metal de transição"},
  { nome: "Ouro", simbolo: "Au", numero: 79, massa: "196.97", Classificacao: "Metal de transição"},
  { nome: "Mercúrio", simbolo: "Hg", numero: 80, massa: "200.59", Classificacao: "Metal de transição"},
  { nome: "Tálio", simbolo: "Tl", numero: 81, massa: "204.38", Classificacao: "Metal pós-transição"},
  { nome: "Chumbo", simbolo: "Pb", numero: 82, massa: "207.2", Classificacao: "Metal pós-transição"},
  { nome: "Bismuto", simbolo: "Bi", numero: 83, massa: "208.98", Classificacao: "Metal pós-transição"},
  { nome: "Polônio", simbolo: "Po", numero: 84, massa: "[209]", Classificacao: "Semimetal"},
  { nome: "Astato", simbolo: "At", numero: 85, massa: "[210]", Classificacao: "Halogênio"},
  { nome: "Radônio", simbolo: "Rn", numero: 86, massa: "[222]", Classificacao: "Gás nobre"},
  { nome: "Frâncio", simbolo: "Fr", numero: 87, massa: "[223]", Classificacao: "Metal alcalino"},
  { nome: "Rádio", simbolo: "Ra", numero: 88, massa: "[226]", Classificacao: "Metal alcalino-terroso"},
  { nome: "Actínio", simbolo: "Ac", numero: 89, massa: "[227]", Classificacao: "Actinídeo"},
  { nome: "Tório", simbolo: "Th", numero: 90, massa: "232.04", Classificacao: "Actinídeo"},
  { nome: "Protactínio", simbolo: "Pa", numero: 91, massa: "231.04", Classificacao: "Actinídeo"},
  { nome: "Urânio", simbolo: "U", numero: 92, massa: "238.03", Classificacao: "Actinídeo"},
  { nome: "Netúnio", simbolo: "Np", numero: 93, massa: "[237]", Classificacao: "Actinídeo"},
  { nome: "Plutônio", simbolo: "Pu", numero: 94, massa: "[244]", Classificacao: "Actinídeo"},
  { nome: "Amerício", simbolo: "Am", numero: 95, massa: "[243]", Classificacao: "Actinídeo"},
  { nome: "Cúrio", simbolo: "Cm", numero: 96, massa: "[247]", Classificacao: "Actinídeo"},
  { nome: "Berquélio", simbolo: "Bk", numero: 97, massa: "[247]", Classificacao: "Actinídeo"},
  { nome: "Califórnio", simbolo: "Cf", numero: 98, massa: "[251]", Classificacao: "Actinídeo"},
  { nome: "Einstênio", simbolo: "Es", numero: 99, massa: "[252]", Classificacao: "Actinídeo"},
  { nome: "Férmio", simbolo: "Fm", numero: 100, massa: "[257]", Classificacao: "Actinídeo"},
  { nome: "Mendelévio", simbolo: "Md", numero: 101, massa: "[258]", Classificacao: "Actinídeo"},
  { nome: "Nobélio", simbolo: "No", numero: 102, massa: "[259]", Classificacao: "Actinídeo"},
  { nome: "Laurêncio", simbolo: "Lr", numero: 103, massa: "[262]", Classificacao: "Actinídeo"},
  { nome: "Rutherfórdio", simbolo: "Rf", numero: 104, massa: "[267]", Classificacao: "Metal de transição"},
  { nome: "Dúbnio", simbolo: "Db", numero: 105, massa: "[268]", Classificacao: "Metal de transição"},
  { nome: "Seabórgio", simbolo: "Sg", numero: 106, massa: "[269]", Classificacao: "Metal de transição"},
  { nome: "Bóhrio", simbolo: "Bh", numero: 107, massa: "[270]", Classificacao: "Metal de transição"},
  { nome: "Hássio", simbolo: "Hs", numero: 108, massa: "[269]", Classificacao: "Metal de transição"},
  { nome: "Meitnério", simbolo: "Mt", numero: 109, massa: "[277]", Classificacao: "Metal de transição"},
  { nome: "Darmstádtio", simbolo: "Ds", numero: 110, massa: "[281]", Classificacao: "Metal de transição"},
  { nome: "Roentgênio", simbolo: "Rg", numero: 111, massa: "[282]", Classificacao: "Metal de transição"},
  { nome: "Copernício", simbolo: "Cn", numero: 112, massa: "[285]", Classificacao: "Metal de transição"},
  { nome: "Nihônio", simbolo: "Nh", numero: 113, massa: "[286]", Classificacao: "Metal pós-transição"},
  { nome: "Fleróvio", simbolo: "Fl", numero: 114, massa: "[290]", Classificacao: "Metal pós-transição"},
  { nome: "Moscóvio", simbolo: "Mc", numero: 115, massa: "[290]", Classificacao: "Metal pós-transição"},
  { nome: "Livermório", simbolo: "Lv", numero: 116, massa: "[293]", Classificacao: "Metal pós-transição"},
  { nome: "Tenessino", simbolo: "Ts", numero: 117, massa: "[294]", Classificacao: "Halogênio"},
  { nome: "Oganessônio", simbolo: "Og", numero: 118, massa: "[294]", Classificacao: "Gás nobre"}
];


// =====================================================
// ELEMENTO ESPECIAL / DESCRIÇÃO DO SITE
// =====================================================

const descricaoSite =
  "Este site foi feito para ajudar você a entender melhor a tabela periódica. Muito obrigado por acessá-lo!";


// =====================================================
// REFERÊNCIAS DO HTML
// =====================================================

const input = document.getElementById("busca");
const sugestoes = document.getElementById("sugestoes");
const resultado = document.getElementById("resultado");
const atomo = document.getElementById("atomo");

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const toggle = document.getElementById("darkToggle");

let sugestaoSelecionada = -1;

let elementoAtual = null;


const curiosidades = [
  "O ouro é tão maleável que pode ser transformado em folhas extremamente finas.",
  "O mercúrio é um metal que permanece líquido em temperatura ambiente.",
  "O carbono está presente em todos os seres vivos conhecidos.",
  "O hélio é mais leve que o ar e é usado para encher balões.",
  "O tungstênio tem um dos maiores pontos de fusão entre os metais.",
  "O oxigênio é essencial para a respiração de muitos seres vivos.",
  "O ferro é um componente importante da hemoglobina do sangue.",
  "O símbolo químico do sódio é Na, derivado do nome latino natrium.",
  "O diamante e o grafite são formas diferentes do mesmo elemento: carbono.",
  "O símbolo W do tungstênio vem do nome wolfram.",
  "O hidrogênio é o elemento químico mais abundante no Universo.",
  "O número atômico de um elemento corresponde à quantidade de prótons em seu núcleo.",
  "A água pura é formada por hidrogênio e oxigênio, na proporção de dois átomos para um.",
  "O hélio foi identificado no espectro solar antes de ser encontrado na Terra.",
  "O símbolo químico do potássio é K, derivado do latim kalium.",
  "O cobre é um excelente condutor de eletricidade e é muito usado em fios elétricos.",
  "A ferrugem se forma quando o ferro reage com oxigênio e água.",
  "O nitrogênio compõe cerca de 78% do volume da atmosfera terrestre.",
  "O flúor é o elemento mais eletronegativo da tabela periódica.",
  "O gálio pode derreter próximo à temperatura de uma mão humana, pois seu ponto de fusão é cerca de 29,8 °C.",
  "O neônio é usado em algumas lâmpadas luminosas que produzem tons avermelhados ou alaranjados.",
  "O silício é fundamental na fabricação de muitos componentes eletrônicos.",
  "O fósforo branco pode entrar em combustão espontânea quando exposto ao ar.",
  "O bromo é um dos poucos elementos que são líquidos em temperatura ambiente.",
  "O césio é um metal muito reativo que pode reagir violentamente com água.",
  "O argônio é um gás nobre usado em algumas lâmpadas e processos de soldagem.",
  "A tabela periódica moderna organiza os elementos principalmente pelo número atômico.",
  "Os gases nobres ficam no grupo 18 da tabela periódica.",
  "Os isótopos de um elemento têm o mesmo número de prótons, mas diferentes números de nêutrons.",
  "A ferrugem não é o único resultado possível da corrosão: outros metais também formam compostos na superfície."
];


let favoritos = JSON.parse(
  localStorage.getItem("favoritosQuimicos") || "[]"
);


// =====================================================
// FUNÇÃO PARA REMOVER ACENTOS
// =====================================================

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}


// =====================================================
// BUSCAR ELEMENTO
// =====================================================

function buscarElemento() {

  const busca = normalizarTexto(input.value);

  if (busca === "") {
    resultado.innerHTML = `
      <p>Digite o nome, símbolo ou número atômico de um elemento.</p>
    `;

    atomo.innerHTML = "";
    atomo.style.display = "none";
    return;
  }

  const elemento = elementos.find(e =>
    normalizarTexto(e.nome) === busca ||
    normalizarTexto(e.simbolo) === busca ||
    String(e.numero) === busca
  );

  sugestoes.innerHTML = "";
  sugestaoSelecionada = -1;

  if (elemento) {
    mostrarElemento(elemento);
  } else {
    resultado.innerHTML = `
      <p>Elemento não encontrado.</p>
    `;

    atomo.innerHTML = "";
    atomo.style.display = "none";
  }
}


// =====================================================
// MOSTRAR ELEMENTO
// =====================================================


function mostrarElemento(elemento) {

  elementoAtual = elemento;

  resultado.innerHTML = `
    <h2>${elemento.nome}</h2>

    <p>
      <strong>Símbolo:</strong>
      ${elemento.simbolo}
    </p>

    <p>
      <strong>Número atômico:</strong>
      ${elemento.numero}
    </p>

    <p>
      <strong>Massa atômica:</strong>
      ${elemento.massa}
    </p>

    <button id="mais-detalhes">
      ＋ Mais detalhes
    </button>
  `;

  criarAtomo(elemento.numero);

  document
    .getElementById("mais-detalhes")
    .addEventListener("click", abrirDetalhes);

}



// =====================================================
// SUGESTÕES
// =====================================================

input.addEventListener("input", () => {

  sugestaoSelecionada = -1;

  const valor = normalizarTexto(input.value);

  sugestoes.innerHTML = "";

  if (valor === "") {
    return;
  }

  const filtrados = elementos.filter(e => {

    const nome = normalizarTexto(e.nome);
    const simbolo = normalizarTexto(e.simbolo);
    const numero = String(e.numero);

    return (
      nome.includes(valor) ||
      simbolo.includes(valor) ||
      numero === valor
    );
  });

  filtrados.slice(0, 5).forEach(elemento => {

    const div = document.createElement("div");

    div.classList.add("sugestao-item");

    div.textContent =
      `${elemento.nome} (${elemento.simbolo})`;

    div.addEventListener("click", () => {

      input.value = elemento.nome;

      sugestoes.innerHTML = "";

      sugestaoSelecionada = -1;

      mostrarElemento(elemento);
    });

    sugestoes.appendChild(div);
  });
});


// =====================================================
// TECLADO: SETAS E ENTER
// =====================================================

input.addEventListener("keydown", (event) => {

  const itens =
    document.querySelectorAll(".sugestao-item");

  if (itens.length === 0) {

    if (event.key === "Enter") {
      buscarElemento();
    }

    return;
  }


  // SETA PARA BAIXO

  if (event.key === "ArrowDown") {

    event.preventDefault();

    sugestaoSelecionada++;

    if (sugestaoSelecionada >= itens.length) {
      sugestaoSelecionada = 0;
    }

    atualizarSugestao(itens);
  }


  // SETA PARA CIMA

  else if (event.key === "ArrowUp") {

    event.preventDefault();

    sugestaoSelecionada--;

    if (sugestaoSelecionada < 0) {
      sugestaoSelecionada = itens.length - 1;
    }

    atualizarSugestao(itens);
  }


  // ENTER

  else if (event.key === "Enter") {

    event.preventDefault();

    if (sugestaoSelecionada >= 0) {

      itens[sugestaoSelecionada].click();

    } else {

      buscarElemento();
    }
  }


  // ESC

  else if (event.key === "Escape") {

    sugestoes.innerHTML = "";

    sugestaoSelecionada = -1;
  }
});


// =====================================================
// DESTACAR SUGESTÃO
// =====================================================

function atualizarSugestao(itens) {

  itens.forEach(item => {
    item.classList.remove("sugestao-ativa");
  });

  if (sugestaoSelecionada >= 0) {

    const item = itens[sugestaoSelecionada];

    item.classList.add("sugestao-ativa");

    input.value =
      item.textContent.split(" (")[0];
  }
}


// =====================================================
// MENU
// =====================================================

menuBtn.addEventListener("click", (event) => {

  event.stopPropagation();

  menu.classList.toggle("hidden");
});


// Fecha o menu quando clicar fora

document.addEventListener("click", (event) => {

  if (
    !menu.contains(event.target) &&
    event.target !== menuBtn
  ) {
    menu.classList.add("hidden");
  }
});


// =====================================================
// MODO ESCURO
// =====================================================

function aplicarModoEscuro(ativo) {

  document.body.classList.toggle(
    "dark-mode",
    ativo
  );

  toggle.checked = ativo;
}


// Carregar preferência salva

const modoSalvo =
  localStorage.getItem("darkMode") === "true";

aplicarModoEscuro(modoSalvo);


// Salvar quando mudar

toggle.addEventListener("change", () => {

  const ativo = toggle.checked;

  aplicarModoEscuro(ativo);

  localStorage.setItem(
    "darkMode",
    ativo
  );
});


// =====================================================
// CRIAR ÁTOMO
// =====================================================

function criarAtomo(numeroAtomico) {

  atomo.style.display = "block";

  // Reinicia animação

  atomo.style.animation = "none";

  void atomo.offsetWidth;

  atomo.style.animation =
    "surgirAtomo 0.6s ease";


  // Limpa átomo anterior

  atomo.innerHTML = "";


  // ===================================================
  // NÚCLEO
  // ===================================================

  const nucleo =
    document.createElement("div");

  nucleo.classList.add("nucleo");

  nucleo.textContent =
    numeroAtomico;

  atomo.appendChild(nucleo);


  // ===================================================
  // DISTRIBUIÇÃO ELETRÔNICA SIMPLIFICADA
  // ===================================================

  const camadas = [
    2,
    8,
    18,
    32,
    32,
    18,
    8
  ];

  let eletronsRestantes =
    Number(numeroAtomico);

  let tamanhoOrbita = 100;


  // ===================================================
  // CRIAR CAMADAS
  // ===================================================

  for (
    let i = 0;
    i < camadas.length;
    i++
  ) {

    if (eletronsRestantes <= 0) {
      break;
    }

    const quantidade =
      Math.min(
        eletronsRestantes,
        camadas[i]
      );


    // ===============================================
    // ÓRBITA
    // ===============================================

    const orbita =
      document.createElement("div");

    orbita.classList.add("orbita");

    orbita.style.width =
      tamanhoOrbita + "px";

    orbita.style.height =
      tamanhoOrbita + "px";


    // Velocidade da órbita

    orbita.style.animationDuration =
      (4 + i * 2) + "s";


    // Alterna direção

    if (i % 2 === 0) {

      orbita.style.animationDirection =
        "reverse";
    }


    atomo.appendChild(orbita);


    // ===============================================
    // ELÉTRONS
    // ===============================================

    for (
      let j = 0;
      j < quantidade;
      j++
    ) {

      const eletron =
        document.createElement("div");

      eletron.classList.add("eletron");


      // Ângulo de cada elétron

      const angulo =
        (360 / quantidade) * j;


      // Raio da órbita

      const raio =
        tamanhoOrbita / 2;


      // Posição

      const x =
        raio +
        raio *
        Math.cos(
          angulo * Math.PI / 180
        );

      const y =
        raio +
        raio *
        Math.sin(
          angulo * Math.PI / 180
        );


      eletron.style.left =
        (x - 6) + "px";

      eletron.style.top =
        (y - 6) + "px";


      orbita.appendChild(eletron);
    }


    eletronsRestantes -= quantidade;

    tamanhoOrbita += 60;
  }
}


// =====================================================
// EVITAR ERROS CASO ALGUM ELEMENTO DO HTML NÃO EXISTA
// =====================================================

if (!menuBtn) {
  console.warn("Botão do menu não encontrado.");
}

if (!input) {
  console.warn("Campo de busca não encontrado.");
}

if (!resultado) {
  console.warn("Área de resultado não encontrada.");
}

// =====================================================
// CURIOSIDADES QUÍMICAS
// =====================================================

const curiosidadeBtn = document.getElementById("curiosidade-btn");
const painelCuriosidade = document.getElementById("painel-curiosidade");
const textoCuriosidade = document.getElementById("texto-curiosidade");
const outraCuriosidadeBtn = document.getElementById("outra-curiosidade");

function mostrarCuriosidade() {
  const indice = Math.floor(Math.random() * curiosidades.length);
  textoCuriosidade.textContent = curiosidades[indice];
}

curiosidadeBtn.addEventListener("click", () => {
  painelCuriosidade.classList.toggle("hidden");

  document.getElementById("painel-favoritos").classList.add("hidden");

  if (!painelCuriosidade.classList.contains("hidden")) {
    mostrarCuriosidade();
  }
});

outraCuriosidadeBtn.addEventListener("click", mostrarCuriosidade);

// =====================================================
// FAVORITOS
// =====================================================

const favoritosBtn = document.getElementById("favoritos-btn");
const painelFavoritos = document.getElementById("painel-favoritos");
const salvarAtualBtn = document.getElementById("salvar-atual");
const listaFavoritos = document.getElementById("lista-favoritos");
const avisoFavoritos = document.getElementById("aviso-favoritos");

function atualizarFavoritos() {
  listaFavoritos.innerHTML = "";

  avisoFavoritos.style.display =
    favoritos.length === 0 ? "block" : "none";

  favoritos.forEach(elemento => {
    const item = document.createElement("div");
    item.className = "favorito-item";

    const abrir = document.createElement("button");
    abrir.textContent = `${elemento.nome} (${elemento.simbolo})`;
    abrir.addEventListener("click", () => {
      input.value = elemento.nome;
      mostrarElemento(elemento);
      painelFavoritos.classList.add("hidden");
    });

    const remover = document.createElement("button");
    remover.textContent = "✕";
    remover.setAttribute("aria-label", `Remover ${elemento.nome} dos favoritos`);

    remover.addEventListener("click", () => {
      favoritos = favoritos.filter(
        favorito => favorito.numero !== elemento.numero
      );

      localStorage.setItem(
        "favoritosQuimicos",
        JSON.stringify(favoritos)
      );

      atualizarFavoritos();
    });

    item.append(abrir, remover);
    listaFavoritos.appendChild(item);
  });
}

favoritosBtn.addEventListener("click", () => {
  painelFavoritos.classList.toggle("hidden");
  painelCuriosidade.classList.add("hidden");
  atualizarFavoritos();
});

salvarAtualBtn.addEventListener("click", () => {
  if (!elementoAtual) {
    avisoFavoritos.textContent = "Pesquise um elemento antes de salvá-lo.";
    avisoFavoritos.style.display = "block";
    return;
  }

  const jaExiste = favoritos.some(
    elemento => elemento.numero === elementoAtual.numero
  );

  if (jaExiste) {
    avisoFavoritos.textContent = "Esse elemento já está nos favoritos.";
    avisoFavoritos.style.display = "block";
    return;
  }

  favoritos.push(elementoAtual);

  localStorage.setItem(
    "favoritosQuimicos",
    JSON.stringify(favoritos)
  );

  atualizarFavoritos();
});

atualizarFavoritos();


 // =====================================================
 // JANELA DE MAIS DETALHES
 // =====================================================

const modalDetalhes =
  document.getElementById("modal-detalhes");

const fecharDetalhes =
  document.getElementById("fechar-detalhes");

function abrirDetalhes() {

  if (!elementoAtual) return;

  const elemento = elementoAtual;

  // Informações do elemento

  document.getElementById("detalhe-nome")
    .textContent = elemento.nome;

  document.getElementById("detalhe-simbolo")
    .textContent = elemento.simbolo;

  document.getElementById("detalhe-numero")
    .textContent = elemento.numero;

  document.getElementById("detalhe-massa")
    .textContent = elemento.massa;

  document.getElementById("detalhe-protons")
    .textContent = elemento.numero;

  document.getElementById("detalhe-eletrons")
  .textContent = elemento.Classificacao;

  mostrarInformacoesExtras(elemento);

  // Mostrar janela

  modalDetalhes.classList.remove("hidden");

  document.body.style.overflow = "hidden";

}

// =====================================================
// FECHAR JANELA
// =====================================================

function fecharModalDetalhes() {

  modalDetalhes.classList.add("hidden");

  document.body.style.overflow = "";

}

fecharDetalhes.addEventListener(
  "click",
  fecharModalDetalhes
);

// Fechar clicando fora da janela

modalDetalhes.addEventListener("click", (event) => {

  if (event.target === modalDetalhes) {
    fecharModalDetalhes();
  }

});

// Fechar com ESC

document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    !modalDetalhes.classList.contains("hidden")
  ) {
    fecharModalDetalhes();
  }

});


// =====================================================
// INFORMAÇÕES EXTRAS DOS ELEMENTOS
// =====================================================


// =====================================================
// MOSTRAR INFORMAÇÕES EXTRAS NA JANELA
// =====================================================


function mostrarInformacoesExtras(elemento) {

  const area = document.querySelector(".detalhes-futuro");

  if (!area) return;

  const dados = informacoesExtras[elemento.simbolo];

  area.replaceChildren();

  function criarSecao(titulo, itens, mensagem) {

    const secao = document.createElement("section");

    const h4 = document.createElement("h4");
    h4.textContent = titulo;

    secao.appendChild(h4);

    if (itens && itens.length > 0) {

      const lista = document.createElement("ul");

      itens.forEach(texto => {

        const item = document.createElement("li");
        item.textContent = texto;

        lista.appendChild(item);

      });

      secao.appendChild(lista);

    } else {

      const aviso = document.createElement("p");
      aviso.textContent = mensagem;

      secao.appendChild(aviso);

    }

    area.appendChild(secao);
  }

  const titulo = document.createElement("h3");
  titulo.textContent = "Informações complementares";

  area.appendChild(titulo);

  criarSecao(
    "🧰 Uso no dia a dia",
    dados?.usos,
    "Não há aplicações cotidianas conhecidas ou cadastradas para este elemento."
  );

  criarSecao(
    "🌎 Fonte natural",
    dados?.origem,
    "Não há uma fonte natural conhecida ou cadastrada para este elemento."
  );

  if (dados?.producao) {

    criarSecao(
      "🔬 Produção artificial",
      dados.producao,
      "Não há informações de produção cadastradas."
    );

  }

}
