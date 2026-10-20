// =====================================================
// TABELA PERIÓDICA
// =====================================================

const elementos = [
  { nome: "Hidrogênio", simbolo: "H", numero: 1, massa: "1.008" },
  { nome: "Hélio", simbolo: "He", numero: 2, massa: "4.0026" },
  { nome: "Lítio", simbolo: "Li", numero: 3, massa: "6.94" },
  { nome: "Berílio", simbolo: "Be", numero: 4, massa: "9.0122" },
  { nome: "Boro", simbolo: "B", numero: 5, massa: "10.81" },
  { nome: "Carbono", simbolo: "C", numero: 6, massa: "12.011" },
  { nome: "Nitrogênio", simbolo: "N", numero: 7, massa: "14.007" },
  { nome: "Oxigênio", simbolo: "O", numero: 8, massa: "15.999" },
  { nome: "Flúor", simbolo: "F", numero: 9, massa: "18.998" },
  { nome: "Neônio", simbolo: "Ne", numero: 10, massa: "20.180" },
  { nome: "Sódio", simbolo: "Na", numero: 11, massa: "22.990" },
  { nome: "Magnésio", simbolo: "Mg", numero: 12, massa: "24.305" },
  { nome: "Alumínio", simbolo: "Al", numero: 13, massa: "26.982" },
  { nome: "Silício", simbolo: "Si", numero: 14, massa: "28.085" },
  { nome: "Fósforo", simbolo: "P", numero: 15, massa: "30.974" },
  { nome: "Enxofre", simbolo: "S", numero: 16, massa: "32.06" },
  { nome: "Cloro", simbolo: "Cl", numero: 17, massa: "35.45" },
  { nome: "Argônio", simbolo: "Ar", numero: 18, massa: "39.948" },
  { nome: "Potássio", simbolo: "K", numero: 19, massa: "39.098" },
  { nome: "Cálcio", simbolo: "Ca", numero: 20, massa: "40.078" },
  { nome: "Escândio", simbolo: "Sc", numero: 21, massa: "44.956" },
  { nome: "Titânio", simbolo: "Ti", numero: 22, massa: "47.867" },
  { nome: "Vanádio", simbolo: "V", numero: 23, massa: "50.942" },
  { nome: "Cromo", simbolo: "Cr", numero: 24, massa: "51.996" },
  { nome: "Manganês", simbolo: "Mn", numero: 25, massa: "54.938" },
  { nome: "Ferro", simbolo: "Fe", numero: 26, massa: "55.845" },
  { nome: "Cobalto", simbolo: "Co", numero: 27, massa: "58.933" },
  { nome: "Níquel", simbolo: "Ni", numero: 28, massa: "58.693" },
  { nome: "Cobre", simbolo: "Cu", numero: 29, massa: "63.546" },
  { nome: "Zinco", simbolo: "Zn", numero: 30, massa: "65.38" },
  { nome: "Gálio", simbolo: "Ga", numero: 31, massa: "69.723" },
  { nome: "Germânio", simbolo: "Ge", numero: 32, massa: "72.630" },
  { nome: "Arsênio", simbolo: "As", numero: 33, massa: "74.922" },
  { nome: "Selênio", simbolo: "Se", numero: 34, massa: "78.971" },
  { nome: "Bromo", simbolo: "Br", numero: 35, massa: "79.904" },
  { nome: "Criptônio", simbolo: "Kr", numero: 36, massa: "83.798" },
  { nome: "Rubídio", simbolo: "Rb", numero: 37, massa: "85.468" },
  { nome: "Estrôncio", simbolo: "Sr", numero: 38, massa: "87.62" },
  { nome: "Ítrio", simbolo: "Y", numero: 39, massa: "88.906" },
  { nome: "Zircônio", simbolo: "Zr", numero: 40, massa: "91.224" },
  { nome: "Nióbio", simbolo: "Nb", numero: 41, massa: "92.906" },
  { nome: "Molibdênio", simbolo: "Mo", numero: 42, massa: "95.95" },
  { nome: "Tecnécio", simbolo: "Tc", numero: 43, massa: "[98]" },
  { nome: "Rutênio", simbolo: "Ru", numero: 44, massa: "101.07" },
  { nome: "Ródio", simbolo: "Rh", numero: 45, massa: "102.91" },
  { nome: "Paládio", simbolo: "Pd", numero: 46, massa: "106.42" },
  { nome: "Prata", simbolo: "Ag", numero: 47, massa: "107.87" },
  { nome: "Cádmio", simbolo: "Cd", numero: 48, massa: "112.41" },
  { nome: "Índio", simbolo: "In", numero: 49, massa: "114.82" },
  { nome: "Estanho", simbolo: "Sn", numero: 50, massa: "118.71" },
  { nome: "Antimônio", simbolo: "Sb", numero: 51, massa: "121.76" },
  { nome: "Telúrio", simbolo: "Te", numero: 52, massa: "127.60" },
  { nome: "Iodo", simbolo: "I", numero: 53, massa: "126.90" },
  { nome: "Xenônio", simbolo: "Xe", numero: 54, massa: "131.29" },
  { nome: "Césio", simbolo: "Cs", numero: 55, massa: "132.91" },
  { nome: "Bário", simbolo: "Ba", numero: 56, massa: "137.33" },
  { nome: "Lantânio", simbolo: "La", numero: 57, massa: "138.91" },
  { nome: "Cério", simbolo: "Ce", numero: 58, massa: "140.12" },
  { nome: "Praseodímio", simbolo: "Pr", numero: 59, massa: "140.91" },
  { nome: "Neodímio", simbolo: "Nd", numero: 60, massa: "144.24" },
  { nome: "Promécio", simbolo: "Pm", numero: 61, massa: "[145]" },
  { nome: "Samário", simbolo: "Sm", numero: 62, massa: "150.36" },
  { nome: "Európio", simbolo: "Eu", numero: 63, massa: "151.96" },
  { nome: "Gadolínio", simbolo: "Gd", numero: 64, massa: "157.25" },
  { nome: "Térbio", simbolo: "Tb", numero: 65, massa: "158.93" },
  { nome: "Disprósio", simbolo: "Dy", numero: 66, massa: "162.50" },
  { nome: "Hólmio", simbolo: "Ho", numero: 67, massa: "164.93" },
  { nome: "Érbio", simbolo: "Er", numero: 68, massa: "167.26" },
  { nome: "Túlio", simbolo: "Tm", numero: 69, massa: "168.93" },
  { nome: "Itérbio", simbolo: "Yb", numero: 70, massa: "173.05" },
  { nome: "Lutécio", simbolo: "Lu", numero: 71, massa: "174.97" },
  { nome: "Háfnio", simbolo: "Hf", numero: 72, massa: "178.49" },
  { nome: "Tântalo", simbolo: "Ta", numero: 73, massa: "180.95" },
  { nome: "Tungstênio", simbolo: "W", numero: 74, massa: "183.84" },
  { nome: "Rênio", simbolo: "Re", numero: 75, massa: "186.21" },
  { nome: "Ósmio", simbolo: "Os", numero: 76, massa: "190.23" },
  { nome: "Irídio", simbolo: "Ir", numero: 77, massa: "192.22" },
  { nome: "Platina", simbolo: "Pt", numero: 78, massa: "195.08" },
  { nome: "Ouro", simbolo: "Au", numero: 79, massa: "196.97" },
  { nome: "Mercúrio", simbolo: "Hg", numero: 80, massa: "200.59" },
  { nome: "Tálio", simbolo: "Tl", numero: 81, massa: "204.38" },
  { nome: "Chumbo", simbolo: "Pb", numero: 82, massa: "207.2" },
  { nome: "Bismuto", simbolo: "Bi", numero: 83, massa: "208.98" },
  { nome: "Polônio", simbolo: "Po", numero: 84, massa: "[209]" },
  { nome: "Astato", simbolo: "At", numero: 85, massa: "[210]" },
  { nome: "Radônio", simbolo: "Rn", numero: 86, massa: "[222]" },
  { nome: "Frâncio", simbolo: "Fr", numero: 87, massa: "[223]" },
  { nome: "Rádio", simbolo: "Ra", numero: 88, massa: "[226]" },
  { nome: "Actínio", simbolo: "Ac", numero: 89, massa: "[227]" },
  { nome: "Tório", simbolo: "Th", numero: 90, massa: "232.04" },
  { nome: "Protactínio", simbolo: "Pa", numero: 91, massa: "231.04" },
  { nome: "Urânio", simbolo: "U", numero: 92, massa: "238.03" },
  { nome: "Netúnio", simbolo: "Np", numero: 93, massa: "[237]" },
  { nome: "Plutônio", simbolo: "Pu", numero: 94, massa: "[244]" },
  { nome: "Amerício", simbolo: "Am", numero: 95, massa: "[243]" },
  { nome: "Cúrio", simbolo: "Cm", numero: 96, massa: "[247]" },
  { nome: "Berquélio", simbolo: "Bk", numero: 97, massa: "[247]" },
  { nome: "Califórnio", simbolo: "Cf", numero: 98, massa: "[251]" },
  { nome: "Einstênio", simbolo: "Es", numero: 99, massa: "[252]" },
  { nome: "Férmio", simbolo: "Fm", numero: 100, massa: "[257]" },
  { nome: "Mendelévio", simbolo: "Md", numero: 101, massa: "[258]" },
  { nome: "Nobélio", simbolo: "No", numero: 102, massa: "[259]" },
  { nome: "Laurêncio", simbolo: "Lr", numero: 103, massa: "[262]" },
  { nome: "Rutherfórdio", simbolo: "Rf", numero: 104, massa: "[267]" },
  { nome: "Dúbnio", simbolo: "Db", numero: 105, massa: "[268]" },
  { nome: "Seabórgio", simbolo: "Sg", numero: 106, massa: "[269]" },
  { nome: "Bóhrio", simbolo: "Bh", numero: 107, massa: "[270]" },
  { nome: "Hássio", simbolo: "Hs", numero: 108, massa: "[269]" },
  { nome: "Meitnério", simbolo: "Mt", numero: 109, massa: "[277]" },
  { nome: "Darmstádtio", simbolo: "Ds", numero: 110, massa: "[281]" },
  { nome: "Roentgênio", simbolo: "Rg", numero: 111, massa: "[282]" },
  { nome: "Copernício", simbolo: "Cn", numero: 112, massa: "[285]" },
  { nome: "Nihônio", simbolo: "Nh", numero: 113, massa: "[286]" },
  { nome: "Fleróvio", simbolo: "Fl", numero: 114, massa: "[290]" },
  { nome: "Moscóvio", simbolo: "Mc", numero: 115, massa: "[290]" },
  { nome: "Livermório", simbolo: "Lv", numero: 116, massa: "[293]" },
  { nome: "Tenessino", simbolo: "Ts", numero: 117, massa: "[294]" },
  { nome: "Oganessônio", simbolo: "Og", numero: 118, massa: "[294]" }
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
  `;

  criarAtomo(elemento.numero);
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