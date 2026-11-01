
// =====================================================
// BANCO DE DADOS QUÍMICOS
// ELEMENTOS 1 A 20
// =====================================================

const informacoesExtras = {

  H: {
    usos: [
      "Produção de amônia utilizada em fertilizantes.",
      "Células a combustível de hidrogênio.",
      "Combustíveis de foguetes, combinado com oxigênio."
    ],
    origem: [
      "Está presente na água, formando moléculas de H₂O.",
      "É encontrado em estrelas, incluindo o Sol.",
      "Na Terra, aparece combinado em água, hidrocarbonetos e outros compostos."
    ]
  },

  He: {
    usos: [
      "Balões decorativos e científicos.",
      "Refrigeração de equipamentos de ressonância magnética.",
      "Detecção de vazamentos e aplicações laboratoriais."
    ],
    origem: [
      "É encontrado em alguns depósitos subterrâneos de gás natural.",
      "É produzido naturalmente pelo decaimento radioativo de elementos pesados.",
      "Existe em pequenas quantidades na atmosfera."
    ]
  },

  Li: {
    usos: [
      "Baterias de celulares.",
      "Baterias de notebooks e veículos elétricos.",
      "Vidros e cerâmicas especiais."
    ],
    origem: [
      "É encontrado em minerais como espodumênio e lepidolita.",
      "Ocorre em salmouras subterrâneas ricas em lítio.",
      "Também aparece em pequenas quantidades em algumas águas naturais."
    ]
  },

  Be: {
    usos: [
      "Componentes especializados da indústria aeroespacial.",
      "Janelas de equipamentos de raios X.",
      "Ligas metálicas especiais utilizadas em equipamentos técnicos."
    ],
    origem: [
      "É encontrado em minerais como berilo e bertrandita.",
      "Ocorre em depósitos minerais associados a rochas pegmatíticas.",
      "Não é encontrado livre em quantidades significativas na natureza."
    ]
  },

  B: {
    usos: [
      "Vidros borossilicatos resistentes ao calor.",
      "Produtos de limpeza que utilizam compostos de boro.",
      "Fertilizantes que fornecem boro às plantas."
    ],
    origem: [
      "É encontrado em minerais como bórax e kernita.",
      "Ocorre em depósitos de evaporitos.",
      "Também pode estar presente em águas subterrâneas."
    ]
  },

  C: {
    usos: [
      "Grafite utilizado em lápis.",
      "Diamantes utilizados em joias e ferramentas de corte.",
      "Carvão e carvão ativado."
    ],
    origem: [
      "Está presente em todos os seres vivos conhecidos.",
      "É encontrado em carvão mineral, petróleo e gás natural.",
      "Ocorre em minerais como calcita e dolomita."
    ]
  },

  N: {
    usos: [
      "Fertilizantes agrícolas.",
      "Conservação de alimentos em atmosferas controladas.",
      "Nitrogênio líquido utilizado em refrigeração."
    ],
    origem: [
      "Compõe aproximadamente 78% do volume do ar atmosférico seco.",
      "Está presente no solo e em compostos orgânicos.",
      "Faz parte das proteínas e do DNA dos seres vivos."
    ]
  },

  O: {
    usos: [
      "Cilindros de oxigênio utilizados em hospitais.",
      "Equipamentos de oxigenação e tratamento de água.",
      "Processos industriais de fabricação de aço."
    ],
    origem: [
      "Compõe aproximadamente 20,95% do ar seco em volume.",
      "Está presente na água, formando moléculas de H₂O.",
      "É encontrado em muitos minerais e rochas da crosta terrestre."
    ]
  },

  F: {
    usos: [
      "Compostos utilizados em pastas de dente.",
      "Revestimentos antiaderentes feitos com materiais fluorados.",
      "Refrigerantes industriais específicos."
    ],
    origem: [
      "É encontrado em minerais como fluorita e fluorapatita.",
      "Está presente em pequenas quantidades em águas naturais.",
      "Não ocorre livre na natureza devido à sua elevada reatividade."
    ]
  },

  Ne: {
    usos: [
      "Letreiros luminosos de neon.",
      "Indicadores luminosos elétricos.",
      "Lasers de hélio-neônio."
    ],
    origem: [
      "É encontrado em pequenas quantidades na atmosfera terrestre.",
      "É obtido industrialmente pela separação do ar líquido.",
      "Também existe em estrelas."
    ]
  },

  Na: {
    usos: [
      "Lâmpadas de vapor de sódio.",
      "Produção de sabões e detergentes por meio de seus compostos.",
      "Sal de cozinha, na forma de cloreto de sódio."
    ],
    origem: [
      "É encontrado principalmente em minerais como halita.",
      "Está dissolvido na água do mar como íons sódio.",
      "Ocorre em depósitos naturais de sais."
    ]
  },

  Mg: {
    usos: [
      "Ligas metálicas utilizadas em automóveis.",
      "Fogos de artifício e sinalizadores luminosos.",
      "Suplementos e medicamentos que contêm compostos de magnésio."
    ],
    origem: [
      "É encontrado em minerais como magnesita e dolomita.",
      "Está presente na água do mar.",
      "Também ocorre em rochas e no solo."
    ]
  },

  Al: {
    usos: [
      "Latas de bebidas.",
      "Papel-alumínio e utensílios de cozinha.",
      "Aviões, bicicletas e estruturas metálicas."
    ],
    origem: [
      "É obtido principalmente da bauxita.",
      "Está presente em minerais de argila.",
      "É um dos elementos mais abundantes da crosta terrestre."
    ]
  },

  Si: {
    usos: [
      "Chips e componentes eletrônicos.",
      "Painéis solares.",
      "Vidros e materiais de construção, por meio da sílica."
    ],
    origem: [
      "É encontrado em minerais de silicatos.",
      "Está presente no quartzo, formado por dióxido de silício.",
      "É um dos elementos mais abundantes da crosta terrestre."
    ]
  },

  P: {
    usos: [
      "Fertilizantes agrícolas.",
      "Fósforos de segurança, em compostos presentes na superfície de atrito.",
      "Produtos químicos utilizados na indústria alimentícia."
    ],
    origem: [
      "É encontrado principalmente em minerais de fosfato.",
      "A apatita é uma importante fonte natural.",
      "Está presente nos ossos e dentes dos animais."
    ]
  },

  S: {
    usos: [
      "Fabricação de fertilizantes.",
      "Produção de pneus por meio da vulcanização da borracha.",
      "Fabricação de ácido sulfúrico."
    ],
    origem: [
      "Pode ser encontrado em regiões vulcânicas.",
      "Ocorre em minerais como pirita e gipsita, em compostos.",
      "Também está presente em petróleo e gás natural."
    ]
  },

  Cl: {
    usos: [
      "Desinfecção de água de piscinas.",
      "Tratamento de água potável.",
      "Fabricação de PVC, por meio de compostos de cloro."
    ],
    origem: [
      "Está presente na água do mar como íons cloreto.",
      "É encontrado em depósitos de halita.",
      "Ocorre em águas subterrâneas salinas."
    ]
  },

  Ar: {
    usos: [
      "Lâmpadas que utilizam atmosfera de argônio.",
      "Soldagem de metais com proteção gasosa.",
      "Conservação de materiais sensíveis à oxidação."
    ],
    origem: [
      "Compõe aproximadamente 0,934% do ar seco em volume.",
      "É obtido industrialmente pela separação do ar.",
      "Também pode ser liberado por processos naturais relacionados à crosta terrestre."
    ]
  },

  K: {
    usos: [
      "Fertilizantes agrícolas.",
      "Sabões produzidos com compostos de potássio.",
      "Substitutos de sal de cozinha que utilizam cloreto de potássio."
    ],
    origem: [
      "É encontrado em minerais como silvita e carnalita.",
      "Está presente em depósitos naturais de sais.",
      "É encontrado em solos e organismos vivos."
    ]
  },

  Ca: {
    usos: [
      "Cimento e concreto, por meio de compostos de cálcio.",
      "Giz e materiais à base de carbonato de cálcio.",
      "Suplementos e produtos alimentícios."
    ],
    origem: [
      "É encontrado em calcário, mármore e giz.",
      "Está presente em conchas e esqueletos.",
      "Ocorre em minerais como calcita e gipsita."
    ]
  }

};


// =====================================================
// BANCO DE DADOS QUÍMICOS
// ELEMENTOS 21 A 40
// =====================================================

Object.assign(informacoesExtras, {

  Sc: {
    usos: [
      "Ligas de alumínio utilizadas na indústria aeroespacial.",
      "Lâmpadas especiais de alta intensidade.",
      "Equipamentos esportivos fabricados com ligas especiais."
    ],
    origem: [
      "É encontrado em pequenas quantidades em minerais como euxenita e gadolinita.",
      "Ocorre associado a outros elementos de terras raras.",
      "Pode ser obtido como subproduto do processamento de determinados minérios."
    ]
  },

  Ti: {
    usos: [
      "Próteses e implantes médicos.",
      "Peças de aviões e espaçonaves.",
      "Tintas, protetores solares e cosméticos, na forma de dióxido de titânio."
    ],
    origem: [
      "É encontrado principalmente nos minerais ilmenita e rutilo.",
      "Ocorre em rochas ígneas e depósitos de areia mineral.",
      "É um dos elementos metálicos relativamente abundantes na crosta terrestre."
    ]
  },

  V: {
    usos: [
      "Produção de aços resistentes utilizados em ferramentas.",
      "Componentes de automóveis e estruturas metálicas.",
      "Baterias de fluxo utilizadas para armazenamento de energia."
    ],
    origem: [
      "É encontrado em minerais como vanadinita e patronita.",
      "Ocorre em algumas rochas e depósitos minerais.",
      "Também pode estar presente em determinados depósitos de petróleo e carvão."
    ]
  },

  Cr: {
    usos: [
      "Revestimentos cromados de peças metálicas.",
      "Produção de aço inoxidável.",
      "Pigmentos utilizados em tintas e materiais cerâmicos."
    ],
    origem: [
      "É obtido principalmente do mineral cromita.",
      "Ocorre em rochas ígneas e depósitos minerais.",
      "É encontrado em pequenas quantidades em alguns solos e águas naturais."
    ]
  },

  Mn: {
    usos: [
      "Fabricação de aço e ligas metálicas.",
      "Pilhas e baterias, por meio de compostos de manganês.",
      "Fertilizantes e suplementos minerais para plantas."
    ],
    origem: [
      "É encontrado em minerais como pirolusita e rodocrosita.",
      "Ocorre em depósitos sedimentares e rochas.",
      "Também é encontrado em nódulos de manganês no fundo dos oceanos."
    ]
  },

  Fe: {
    usos: [
      "Estruturas de prédios e pontes feitas de aço.",
      "Ferramentas, pregos e parafusos.",
      "Automóveis, máquinas e equipamentos."
    ],
    origem: [
      "É encontrado principalmente em minerais como hematita e magnetita.",
      "Ocorre em grandes depósitos minerais na crosta terrestre.",
      "Também está presente no núcleo da Terra."
    ]
  },

  Co: {
    usos: [
      "Baterias recarregáveis de alguns celulares e veículos elétricos.",
      "Ímãs permanentes utilizados em equipamentos eletrônicos.",
      "Pigmentos azuis utilizados em vidros e cerâmicas."
    ],
    origem: [
      "É encontrado em minerais como cobaltita e eritrita.",
      "Ocorre frequentemente associado a minérios de níquel e cobre.",
      "Pode ser encontrado em depósitos minerais subterrâneos."
    ]
  },

  Ni: {
    usos: [
      "Moedas e revestimentos metálicos.",
      "Aço inoxidável e outras ligas resistentes à corrosão.",
      "Baterias recarregáveis."
    ],
    origem: [
      "É encontrado em minerais como pentlandita e garnierita.",
      "Ocorre em depósitos de rochas magmáticas.",
      "Também está presente em meteoritos metálicos."
    ]
  },

  Cu: {
    usos: [
      "Fios e cabos elétricos.",
      "Tubulações de água e componentes hidráulicos.",
      "Moedas, utensílios e componentes eletrônicos."
    ],
    origem: [
      "É encontrado em minerais como calcopirita e bornita.",
      "Pode ocorrer naturalmente na forma de cobre metálico.",
      "É encontrado em depósitos minerais associados à atividade geológica."
    ]
  },

  Zn: {
    usos: [
      "Galvanização de peças de aço para evitar ferrugem.",
      "Pilhas e baterias.",
      "Ligas metálicas, como o latão."
    ],
    origem: [
      "É obtido principalmente do mineral esfalerita.",
      "Ocorre em depósitos minerais associados ao chumbo e ao cobre.",
      "Também está presente em pequenas quantidades no solo e na água."
    ]
  },

  Ga: {
    usos: [
      "LEDs e dispositivos luminosos.",
      "Semicondutores utilizados em equipamentos eletrônicos.",
      "Painéis e componentes de sistemas de comunicação."
    ],
    origem: [
      "É encontrado em pequenas quantidades em minérios de alumínio e zinco.",
      "Pode ser recuperado durante o processamento da bauxita.",
      "Não costuma formar depósitos minerais próprios em grandes concentrações."
    ]
  },

  Ge: {
    usos: [
      "Fibra óptica utilizada em telecomunicações.",
      "Lentes e equipamentos de visão infravermelha.",
      "Semicondutores e componentes eletrônicos."
    ],
    origem: [
      "É encontrado em pequenas quantidades em minerais como germanita e argirodita.",
      "Ocorre associado a depósitos de zinco e carvão mineral.",
      "Pode ser recuperado como subproduto do processamento de outros minérios."
    ]
  },

  As: {
    usos: [
      "Semicondutores utilizados em dispositivos eletrônicos especializados.",
      "Componentes de lasers e equipamentos ópticos.",
      "Ligas metálicas utilizadas em aplicações técnicas."
    ],
    origem: [
      "É encontrado em minerais como arsenopirita e realgar.",
      "Ocorre associado a depósitos de ouro, cobre e outros metais.",
      "Pode ser liberado naturalmente por processos geológicos e vulcânicos."
    ]
  },

  Se: {
    usos: [
      "Células solares e componentes eletrônicos.",
      "Vidros especiais e pigmentos.",
      "Produção de ligas metálicas."
    ],
    origem: [
      "É encontrado em pequenas quantidades em minerais como claustalita.",
      "Ocorre associado a minérios de cobre.",
      "Também está presente em solos e alimentos em quantidades variáveis."
    ]
  },

  Br: {
    usos: [
      "Compostos utilizados em alguns medicamentos.",
      "Materiais químicos empregados em processos industriais.",
      "Compostos utilizados em determinados sistemas de tratamento de água."
    ],
    origem: [
      "É encontrado principalmente na água do mar na forma de brometo.",
      "Ocorre em salmouras subterrâneas naturais.",
      "Também está presente em depósitos de sais e lagos salgados."
    ]
  },

  Kr: {
    usos: [
      "Lâmpadas especiais de alta intensidade.",
      "Lasers utilizados em aplicações científicas.",
      "Equipamentos de iluminação e fotografia especializados."
    ],
    origem: [
      "Está presente em pequenas quantidades na atmosfera terrestre.",
      "Compõe aproximadamente 0,0001% do ar atmosférico em volume.",
      "É obtido industrialmente pela separação do ar líquido."
    ]
  },

  Rb: {
    usos: [
      "Relógios atômicos utilizados em pesquisas.",
      "Células fotoelétricas especializadas.",
      "Pesquisas científicas sobre física atômica."
    ],
    origem: [
      "É encontrado em minerais como lepidolita e polucita.",
      "Ocorre associado a minerais de lítio e potássio.",
      "Também está presente em pequenas quantidades em algumas águas minerais."
    ]
  },

  Sr: {
    usos: [
      "Fogos de artifício que produzem coloração vermelha.",
      "Ímãs cerâmicos utilizados em equipamentos.",
      "Vidros especiais e materiais cerâmicos."
    ],
    origem: [
      "É encontrado principalmente nos minerais celestita e estroncianita.",
      "Ocorre em depósitos sedimentares.",
      "Também pode estar presente em rochas, solos e águas naturais."
    ]
  },

  Y: {
    usos: [
      "LEDs e telas que utilizam materiais fosforescentes.",
      "Cerâmicas especiais resistentes ao calor.",
      "Lasers utilizados em medicina e indústria."
    ],
    origem: [
      "É encontrado em minerais como xenotímio e monazita.",
      "Ocorre associado a outros elementos de terras raras.",
      "Pode ser obtido durante o processamento de minérios desses elementos."
    ]
  },

  Zr: {
    usos: [
      "Cerâmicas utilizadas em próteses dentárias.",
      "Revestimentos e componentes resistentes ao calor.",
      "Equipamentos nucleares, em aplicações que utilizam ligas de zircônio."
    ],
    origem: [
      "É encontrado principalmente nos minerais zircão e badeleíta.",
      "Ocorre em rochas ígneas e depósitos de areia mineral.",
      "É relativamente abundante em determinados depósitos de minerais pesados."
    ]
},

// =====================================================
// BANCO DE DADOS QUÍMICOS
// ELEMENTOS 41 A 80
// =====================================================


  Nb: {
    usos: [
      "Ligas metálicas utilizadas em motores de aviões.",
      "Equipamentos de ressonância magnética.",
      "Estruturas de aço utilizadas em pontes e construções."
    ],
    origem: [
      "É encontrado principalmente nos minerais pirocloro e columbita.",
      "Ocorre em depósitos de rochas alcalinas e carbonatitos.",
      "O Brasil possui importantes reservas naturais de nióbio."
    ]
  },

  Mo: {
    usos: [
      "Aços resistentes utilizados em ferramentas.",
      "Peças de motores e equipamentos industriais.",
      "Lubrificantes especiais, na forma de dissulfeto de molibdênio."
    ],
    origem: [
      "É encontrado principalmente no mineral molibdenita.",
      "Ocorre associado a depósitos de cobre.",
      "Também aparece em pequenas quantidades em diferentes rochas."
    ]
  },

  Tc: {
    usos: [
      "Exames de medicina nuclear, especialmente com tecnécio-99m.",
      "Diagnósticos por imagem de órgãos e tecidos.",
      "Pesquisas científicas em medicina nuclear."
    ],
    origem: [
      "Não possui depósitos naturais significativos.",
      "Pode surgir naturalmente em quantidades minúsculas durante processos de fissão espontânea.",
      "É produzido principalmente em reatores nucleares, a partir de materiais como o molibdênio-99."
    ],
    producao: [
      "É produzido artificialmente em reatores nucleares ou aceleradores de partículas.",
      "O tecnécio-99m utilizado na medicina é geralmente obtido de geradores que contêm molibdênio-99.",
      "Seus átomos são formados por reações nucleares controladas."
    ]
  },

  Ru: {
    usos: [
      "Contatos elétricos e componentes eletrônicos.",
      "Catalisadores utilizados na indústria química.",
      "Ligas metálicas resistentes ao desgaste."
    ],
    origem: [
      "É encontrado associado a minérios de platina.",
      "Ocorre em depósitos minerais ricos em metais do grupo da platina.",
      "Também pode ser encontrado em alguns depósitos de níquel e cobre."
    ]
  },

  Rh: {
    usos: [
      "Catalisadores utilizados em escapamentos de automóveis.",
      "Revestimentos brilhantes de joias.",
      "Contatos elétricos de alta resistência."
    ],
    origem: [
      "É encontrado associado a minerais de platina.",
      "Ocorre em depósitos de metais do grupo da platina.",
      "Também pode ser recuperado durante o processamento de minérios de níquel e cobre."
    ]
  },

  Pd: {
    usos: [
      "Catalisadores de veículos automotores.",
      "Componentes eletrônicos.",
      "Joias e ligas metálicas especiais."
    ],
    origem: [
      "É encontrado em depósitos de metais do grupo da platina.",
      "Ocorre associado a minérios de níquel e cobre.",
      "Também pode ser encontrado em pequenas quantidades em alguns meteoritos."
    ]
  },

  Ag: {
    usos: [
      "Joias, anéis e colares.",
      "Componentes eletrônicos e contatos elétricos.",
      "Espelhos e materiais fotográficos especializados."
    ],
    origem: [
      "É encontrado em minerais como argentita e acantita.",
      "Pode ocorrer naturalmente na forma de prata metálica.",
      "Também é obtido como subproduto da mineração de chumbo, zinco e cobre."
    ]
  },

  Cd: {
    usos: [
      "Baterias recarregáveis de níquel-cádmio.",
      "Pigmentos especiais utilizados em materiais industriais.",
      "Revestimentos anticorrosivos em aplicações específicas."
    ],
    origem: [
      "É encontrado principalmente associado a minerais de zinco.",
      "Pode estar presente no mineral esfalerita.",
      "É obtido principalmente como subproduto do processamento de minérios de zinco."
    ]
  },

  In: {
    usos: [
      "Telas sensíveis ao toque de celulares e tablets.",
      "Monitores e televisores de tela plana.",
      "Soldas especiais utilizadas em eletrônicos."
    ],
    origem: [
      "É encontrado em pequenas quantidades em minerais de zinco.",
      "Ocorre associado a minérios de chumbo, estanho e cobre.",
      "É obtido principalmente como subproduto do processamento do zinco."
    ]
  },

  Sn: {
    usos: [
      "Soldas utilizadas em circuitos eletrônicos.",
      "Revestimento de latas de aço para alimentos.",
      "Produção de ligas metálicas, como o bronze."
    ],
    origem: [
      "É encontrado principalmente no mineral cassiterita.",
      "Ocorre em depósitos associados a rochas graníticas.",
      "Pode ser encontrado em depósitos de areia mineral."
    ]
  },

  Sb: {
    usos: [
      "Materiais retardantes de chama.",
      "Ligas metálicas utilizadas em baterias.",
      "Componentes semicondutores."
    ],
    origem: [
      "É encontrado principalmente no mineral estibina.",
      "Ocorre em depósitos hidrotermais.",
      "Também pode aparecer associado a minerais de prata e chumbo."
    ]
  },

  Te: {
    usos: [
      "Painéis solares de telureto de cádmio.",
      "Componentes semicondutores.",
      "Ligas metálicas utilizadas em aplicações industriais."
    ],
    origem: [
      "É encontrado em pequenas quantidades associado a minérios de cobre e ouro.",
      "Ocorre em minerais raros como a calaverita.",
      "É obtido frequentemente como subproduto do refino do cobre."
    ]
  },

  I: {
    usos: [
      "Antissépticos utilizados na limpeza da pele.",
      "Produtos farmacêuticos e medicamentos.",
      "Sal de cozinha iodado."
    ],
    origem: [
      "É encontrado em águas marinhas e organismos marinhos.",
      "Ocorre em depósitos subterrâneos de salmoura.",
      "Também é encontrado em depósitos de nitratos naturais."
    ]
  },

  Xe: {
    usos: [
      "Lâmpadas especiais utilizadas em projetores.",
      "Equipamentos de iluminação de alta intensidade.",
      "Propulsão de alguns satélites por motores iônicos."
    ],
    origem: [
      "Está presente em quantidades muito pequenas na atmosfera terrestre.",
      "Compõe aproximadamente 0,0000087% do ar seco em volume.",
      "É obtido industrialmente pela separação do ar líquido."
    ]
  },

  Cs: {
    usos: [
      "Relógios atômicos de alta precisão.",
      "Equipamentos utilizados em pesquisas científicas.",
      "Dispositivos especiais de detecção e medição."
    ],
    origem: [
      "É encontrado principalmente no mineral polucita.",
      "Ocorre em depósitos de pegmatitos.",
      "Também aparece associado a minerais contendo lítio e rubídio."
    ]
  },

  Ba: {
    usos: [
      "Exames radiológicos do sistema digestivo, utilizando sulfato de bário.",
      "Fogos de artifício que produzem coloração verde.",
      "Vidros especiais e cerâmicas."
    ],
    origem: [
      "É encontrado principalmente nos minerais barita e witherita.",
      "Ocorre em depósitos sedimentares e hidrotermais.",
      "Também está presente em pequenas quantidades em algumas rochas."
    ]
  },

  La: {
    usos: [
      "Lentes especiais utilizadas em câmeras.",
      "Baterias recarregáveis de níquel-hidreto metálico.",
      "Catalisadores utilizados no refino de petróleo."
    ],
    origem: [
      "É encontrado em minerais como monazita e bastnasita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É extraído de depósitos minerais específicos."
    ]
  },

  Ce: {
    usos: [
      "Polimento de vidros e lentes.",
      "Catalisadores utilizados em automóveis.",
      "Pedras de isqueiros, em ligas metálicas contendo cério."
    ],
    origem: [
      "É encontrado principalmente nos minerais monazita e bastnasita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É relativamente abundante entre os elementos desse grupo."
    ]
  },

  Pr: {
    usos: [
      "Pigmentos utilizados em vidros e cerâmicas.",
      "Ímãs especiais utilizados em equipamentos eletrônicos.",
      "Ligas metálicas utilizadas em equipamentos ópticos."
    ],
    origem: [
      "É encontrado nos minerais monazita e bastnasita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É extraído por processos de separação de minerais que contêm terras raras."
    ]
  },

  Nd: {
    usos: [
      "Ímãs potentes utilizados em fones de ouvido e alto-falantes.",
      "Motores elétricos de veículos e equipamentos industriais.",
      "Turbinas eólicas e discos rígidos."
    ],
    origem: [
      "É encontrado principalmente nos minerais monazita e bastnasita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É obtido por processos industriais de separação e purificação mineral."
    ]
  },

  
  Pm: {
    usos: [
      "Baterias nucleares especiais utilizadas em equipamentos de longa duração.",
      "Instrumentos de medição e sensores especializados.",
      "Pesquisas científicas em física nuclear."
    ],
    origem: [
      "Não possui fontes naturais significativas.",
      "Pode existir em quantidades extremamente pequenas em minérios de urânio.",
      "É produzido principalmente em reatores nucleares."
    ],
    producao: [
      "É produzido artificialmente por processos de fissão nuclear.",
      "Também pode ser obtido pela irradiação de outros elementos em reatores nucleares.",
      "Seus átomos são separados e identificados por processos especializados."
    ]
  },

  Sm: {
    usos: [
      "Ímãs permanentes de samário-cobalto.",
      "Equipamentos eletrônicos especializados.",
      "Materiais utilizados em aplicações nucleares."
    ],
    origem: [
      "É encontrado nos minerais monazita e bastnasita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É extraído de depósitos minerais e posteriormente separado industrialmente."
    ]
  },

  Eu: {
    usos: [
      "Telas de televisores e monitores.",
      "Lâmpadas fluorescentes e LEDs.",
      "Tintas de segurança utilizadas em documentos e notas."
    ],
    origem: [
      "É encontrado em minerais como monazita e bastnasita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É obtido por processos industriais de separação mineral."
    ]
  },

  Gd: {
    usos: [
      "Contrastes utilizados em exames de ressonância magnética.",
      "Materiais utilizados em reatores nucleares.",
      "Ímãs e componentes eletrônicos especializados."
    ],
    origem: [
      "É encontrado nos minerais monazita e bastnasita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É extraído de depósitos minerais naturais."
    ]
  },

  Tb: {
    usos: [
      "Telas e dispositivos eletrônicos com emissão de luz verde.",
      "Lâmpadas fluorescentes especiais.",
      "Ímãs especiais utilizados em equipamentos tecnológicos."
    ],
    origem: [
      "É encontrado em minerais como xenotima e monazita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É extraído por processos de separação e purificação mineral."
    ]
  },

  Dy: {
    usos: [
      "Ímãs de alto desempenho utilizados em motores elétricos.",
      "Turbinas eólicas.",
      "Equipamentos eletrônicos e aplicações nucleares."
    ],
    origem: [
      "É encontrado em minerais como xenotima e bastnasita.",
      "Ocorre associado a outros elementos de terras raras.",
      "Também pode ser extraído de depósitos de argilas iônicas."
    ]
  },

  Ho: {
    usos: [
      "Lasers utilizados em procedimentos médicos.",
      "Ímãs especiais de alta intensidade.",
      "Equipamentos científicos e ópticos."
    ],
    origem: [
      "É encontrado em minerais como monazita e gadolinita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É obtido por processos industriais de separação mineral."
    ]
  },

  Er: {
    usos: [
      "Fibras ópticas utilizadas em telecomunicações.",
      "Lasers utilizados em medicina e odontologia.",
      "Vidros especiais com coloração rosada."
    ],
    origem: [
      "É encontrado em minerais como xenotima e monazita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É extraído de depósitos minerais e separado industrialmente."
    ]
  },

  Tm: {
    usos: [
      "Equipamentos de raios X portáteis especializados.",
      "Lasers utilizados em aplicações médicas.",
      "Pesquisas científicas e equipamentos ópticos."
    ],
    origem: [
      "É encontrado em pequenas quantidades em minerais como monazita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É obtido por processos industriais de separação mineral."
    ]
  },

  Yb: {
    usos: [
      "Lasers de fibra utilizados na indústria.",
      "Relógios atômicos experimentais.",
      "Equipamentos científicos e materiais especiais."
    ],
    origem: [
      "É encontrado em minerais como xenotima e monazita.",
      "Ocorre associado a outros elementos de terras raras.",
      "É extraído de depósitos minerais naturais."
    ]
  },

  Lu: {
    usos: [
      "Detectores utilizados em exames de tomografia por emissão de pósitrons (PET).",
      "Catalisadores utilizados na indústria química.",
      "Pesquisas científicas e aplicações médicas."
    ],
    origem: [
      "É encontrado nos minerais monazita e bastnasita.",
      "Ocorre em pequenas quantidades associado a outras terras raras.",
      "É obtido por processos de separação e purificação mineral."
    ]
  },

  Hf: {
    usos: [
      "Barras de controle utilizadas em reatores nucleares.",
      "Componentes eletrônicos de alta tecnologia.",
      "Ligas metálicas resistentes a altas temperaturas."
    ],
    origem: [
      "É encontrado principalmente no mineral zircão.",
      "Ocorre associado ao zircônio em depósitos minerais.",
      "É separado industrialmente durante o processamento do zircônio."
    ]
  },

  Ta: {
    usos: [
      "Capacitores utilizados em celulares e computadores.",
      "Implantes médicos e instrumentos cirúrgicos.",
      "Componentes resistentes ao calor em equipamentos industriais."
    ],
    origem: [
      "É encontrado em minerais como tantalita e columbita.",
      "Ocorre em depósitos de pegmatitos.",
      "É extraído de minérios que também podem conter nióbio."
    ]
  },

  W: {
    usos: [
      "Ferramentas de corte e perfuração.",
      "Filamentos de lâmpadas incandescentes.",
      "Peças industriais resistentes a temperaturas elevadas."
    ],
    origem: [
      "É encontrado principalmente nos minerais wolframita e scheelita.",
      "Ocorre em depósitos hidrotermais.",
      "É extraído de rochas e depósitos minerais específicos."
    ]
  },

  Re: {
    usos: [
      "Turbinas de motores de aviões.",
      "Catalisadores utilizados no refino de petróleo.",
      "Ligas metálicas resistentes a temperaturas extremas."
    ],
    origem: [
      "É encontrado em pequenas quantidades associado a minerais de molibdênio.",
      "Ocorre principalmente na molibdenita.",
      "É obtido frequentemente como subproduto do processamento de minérios de cobre e molibdênio."
    ]
  },

  Os: {
    usos: [
      "Ligas metálicas extremamente resistentes ao desgaste.",
      "Contatos elétricos especializados.",
      "Instrumentos científicos e aplicações industriais específicas."
    ],
    origem: [
      "É encontrado associado a minérios de platina.",
      "Ocorre em depósitos de metais do grupo da platina.",
      "Também pode aparecer em ligas naturais com irídio."
    ]
  },

  Ir: {
    usos: [
      "Velas de ignição especiais para motores.",
      "Equipamentos científicos resistentes à corrosão.",
      "Componentes utilizados em aplicações industriais de alta temperatura."
    ],
    origem: [
      "É encontrado em depósitos de metais do grupo da platina.",
      "Ocorre associado a minerais de ósmio e platina.",
      "Também está presente em meteoritos metálicos."
    ]
  },

  Pt: {
    usos: [
      "Joias, anéis e relógios.",
      "Catalisadores utilizados em automóveis.",
      "Equipamentos médicos e instrumentos laboratoriais."
    ],
    origem: [
      "É encontrado em depósitos minerais associados a níquel e cobre.",
      "Ocorre em minerais e ligas naturais do grupo da platina.",
      "Também pode ser encontrado em depósitos aluviais."
    ]
  },

  Au: {
    usos: [
      "Joias, anéis e colares.",
      "Contatos elétricos e componentes eletrônicos.",
      "Revestimentos utilizados em equipamentos especializados."
    ],
    origem: [
      "É encontrado em veios de quartzo e depósitos minerais.",
      "Pode ocorrer na forma de pepitas em depósitos aluviais.",
      "Também é encontrado associado a outros minerais metálicos."
    ]
  },

  Hg: {
    usos: [
      "Termômetros e barômetros antigos.",
      "Algumas lâmpadas fluorescentes.",
      "Equipamentos científicos especializados."
    ],
    origem: [
      "É encontrado principalmente no mineral cinábrio.",
      "Ocorre em depósitos minerais associados a atividades geológicas.",
      "Pode ser liberado naturalmente por atividades vulcânicas."
    ]
  },
    });

    // =====================================================
// BANCO DE DADOS QUÍMICOS
// ELEMENTOS 81 A 90
// =====================================================

Object.assign(informacoesExtras, {

  Tl: {
    usos: [
      "Detectores de radiação utilizados em equipamentos científicos.",
      "Componentes eletrônicos especializados.",
      "Vidros especiais utilizados em equipamentos ópticos."
    ],
    origem: [
      "É encontrado em pequenas quantidades em minerais de sulfetos.",
      "Ocorre associado a minérios de chumbo, zinco e cobre.",
      "É obtido principalmente como subproduto do processamento de outros metais."
    ]
  },

  Pb: {
    usos: [
      "Baterias automotivas de chumbo-ácido.",
      "Proteção contra radiação em equipamentos médicos.",
      "Revestimentos e materiais utilizados em aplicações industriais específicas."
    ],
    origem: [
      "É encontrado principalmente no mineral galena.",
      "Ocorre em depósitos minerais associados ao zinco e à prata.",
      "É extraído de rochas e depósitos minerais subterrâneos."
    ]
  },

  Bi: {
    usos: [
      "Medicamentos utilizados no tratamento de problemas digestivos.",
      "Ligas metálicas de baixo ponto de fusão.",
      "Cosméticos e pigmentos especiais."
    ],
    origem: [
      "É encontrado em minerais como bismutinita.",
      "Ocorre associado a minérios de cobre, chumbo e estanho.",
      "Também pode ser encontrado na natureza na forma metálica."
    ]
  },

  Po: {
    usos: [
      "Dispositivos especializados de eliminação de eletricidade estática.",
      "Pesquisas científicas sobre radioatividade.",
      "Fontes de partículas alfa em aplicações técnicas especializadas."
    ],
    origem: [
      "É encontrado naturalmente em quantidades muito pequenas em minérios de urânio.",
      "Pode ser formado durante cadeias naturais de decaimento radioativo.",
      "Também pode ser produzido artificialmente em reatores nucleares."
    ],
    producao: [
      "Pode ser produzido pela irradiação de bismuto em reatores nucleares.",
      "Seus isótopos são obtidos por processos nucleares controlados.",
      "A produção ocorre em instalações especializadas."
    ]
  },

  At: {
    usos: [
      "Pesquisas científicas em química nuclear.",
      "Estudos experimentais sobre tratamentos contra o câncer.",
      "Investigações sobre as propriedades dos elementos radioativos."
    ],
    origem: [
      "Pode ocorrer naturalmente em quantidades extremamente pequenas em minerais de urânio e tório.",
      "É formado em algumas cadeias naturais de decaimento radioativo.",
      "Não possui depósitos naturais significativos devido à sua instabilidade."
    ],
    producao: [
      "É produzido artificialmente em aceleradores de partículas.",
      "Pode ser obtido pelo bombardeamento de elementos pesados com partículas aceleradas.",
      "Seus isótopos são utilizados principalmente em pesquisas científicas."
    ]
  },

  Rn: {
    usos: [
      "Pesquisas científicas sobre radioatividade.",
      "Estudos sobre processos naturais de decaimento nuclear.",
      "Aplicações experimentais em física nuclear."
    ],
    origem: [
      "É produzido naturalmente pelo decaimento radioativo do rádio.",
      "Pode se acumular em pequenas quantidades no solo e em ambientes subterrâneos.",
      "É encontrado naturalmente em algumas rochas e águas subterrâneas."
    ]
  },

  Fr: {
    usos: [
      "Pesquisas científicas sobre estrutura atômica.",
      "Estudos das propriedades dos metais alcalinos.",
      "Experimentos especializados em física nuclear."
    ],
    origem: [
      "Pode surgir naturalmente durante o decaimento radioativo do actínio.",
      "É encontrado em quantidades extremamente pequenas na crosta terrestre.",
      "Não forma depósitos naturais devido à sua elevada instabilidade radioativa."
    ],
    producao: [
      "Pode ser produzido artificialmente em aceleradores de partículas.",
      "É obtido por reações nucleares envolvendo elementos mais pesados.",
      "Sua produção ocorre em quantidades extremamente pequenas para pesquisas."
    ]
  },

  Ra: {
    usos: [
      "Pesquisas científicas sobre radioatividade.",
      "Estudos de processos de decaimento nuclear.",
      "Aplicações históricas em tratamentos médicos, atualmente bastante limitadas."
    ],
    origem: [
      "É encontrado naturalmente em minérios de urânio.",
      "É produzido pelo decaimento radioativo de outros elementos.",
      "Pode estar presente em pequenas quantidades em rochas e solos."
    ]
  },

  Ac: {
    usos: [
      "Pesquisas em medicina nuclear.",
      "Estudos sobre radioatividade e estrutura nuclear.",
      "Desenvolvimento de tratamentos experimentais contra determinados tipos de câncer."
    ],
    origem: [
      "É encontrado naturalmente em quantidades muito pequenas em minerais de urânio.",
      "Pode ser formado durante o decaimento radioativo do urânio.",
      "Não possui depósitos naturais significativos."
    ],
    producao: [
      "Pode ser produzido artificialmente em reatores nucleares.",
      "Alguns isótopos são obtidos pela irradiação de materiais contendo rádio.",
      "É produzido em instalações especializadas para pesquisas e aplicações médicas."
    ]
  },

});

// =====================================================
// BANCO DE DADOS QUÍMICOS
// ELEMENTOS 90 A 100
// =====================================================

Object.assign(informacoesExtras, {

  Th: {
    usos: [
      "Pesquisas sobre combustíveis nucleares alternativos.",
      "Fabricação de materiais cerâmicos resistentes a altas temperaturas.",
      "Aplicações especializadas em equipamentos ópticos e industriais."
    ],
    origem: [
      "É encontrado principalmente no mineral monazita.",
      "Ocorre associado a minerais de terras raras.",
      "Está presente naturalmente em pequenas quantidades em rochas e solos."
    ]
  },

  Pa: {
    usos: [
      "Pesquisas científicas sobre radioatividade.",
      "Estudos sobre a estrutura e o comportamento dos núcleos atômicos.",
      "Investigações sobre processos de decaimento nuclear."
    ],
    origem: [
      "É encontrado naturalmente em pequenas quantidades em minérios de urânio.",
      "Pode ser formado durante o decaimento radioativo do urânio-235.",
      "Não possui depósitos naturais significativos devido à sua raridade."
    ],
    producao: [
      "Pode ser obtido como produto intermediário em processos nucleares.",
      "Alguns isótopos podem ser produzidos artificialmente em reatores nucleares.",
      "Sua obtenção exige processos especializados de separação."
    ]
  },

  U: {
    usos: [
      "Produção de energia elétrica em usinas nucleares.",
      "Pesquisas científicas relacionadas à energia nuclear.",
      "Utilização em materiais especiais de proteção contra radiação."
    ],
    origem: [
      "É encontrado em minerais como uraninita e pechblenda.",
      "Ocorre naturalmente em rochas e solos.",
      "Também pode estar presente em pequenas quantidades em águas subterrâneas."
    ]
  },

  Np: {
    usos: [
      "Pesquisas científicas em física nuclear.",
      "Produção de determinados radioisótopos utilizados em pesquisas.",
      "Estudos sobre o comportamento de elementos transurânicos."
    ],
    origem: [
      "Não possui depósitos naturais significativos.",
      "Pode ocorrer naturalmente em quantidades extremamente pequenas em minérios de urânio.",
      "Foi identificado em materiais radioativos naturais e artificiais."
    ],
    producao: [
      "É produzido principalmente em reatores nucleares.",
      "Pode ser formado quando átomos de urânio capturam nêutrons.",
      "Seus isótopos são obtidos por processos nucleares especializados."
    ]
  },

  Pu: {
    usos: [
      "Combustível utilizado em determinados reatores nucleares.",
      "Fontes de energia para algumas sondas espaciais.",
      "Pesquisas científicas relacionadas à física nuclear."
    ],
    origem: [
      "Pode ser encontrado naturalmente em quantidades extremamente pequenas em minérios de urânio.",
      "Foi identificado em materiais provenientes de processos nucleares.",
      "Não possui depósitos naturais economicamente exploráveis."
    ],
    producao: [
      "É produzido principalmente em reatores nucleares.",
      "Pode ser formado pela transformação nuclear de átomos de urânio.",
      "Sua produção ocorre em instalações nucleares especializadas."
    ]
  },

  Am: {
    usos: [
      "Detectores de fumaça que utilizam amerício-241.",
      "Equipamentos especializados de medição industrial.",
      "Pesquisas científicas sobre radioatividade."
    ],
    origem: [
      "Não é encontrado em quantidades significativas na natureza.",
      "Pode surgir em pequenas quantidades em materiais provenientes de processos nucleares.",
      "É um elemento produzido principalmente artificialmente."
    ],
    producao: [
      "É produzido em reatores nucleares.",
      "Pode ser formado por transformações nucleares de outros elementos.",
      "Seus isótopos são separados e preparados para aplicações específicas."
    ]
  },

  Cm: {
    usos: [
      "Pesquisas científicas em química e física nuclear.",
      "Fontes de partículas alfa utilizadas em equipamentos especializados.",
      "Estudos sobre elementos radioativos e suas propriedades."
    ],
    origem: [
      "Não possui ocorrência natural significativa.",
      "Pode existir em quantidades muito pequenas em materiais nucleares.",
      "É obtido principalmente por processos artificiais."
    ],
    producao: [
      "É produzido em reatores nucleares.",
      "Pode ser obtido por reações nucleares envolvendo outros actinídeos.",
      "Sua produção exige instalações especializadas."
    ]
  },

  Bk: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre propriedades químicas dos actinídeos.",
      "Experimentos de física nuclear."
    ],
    origem: [
      "Não é encontrado naturalmente em quantidades significativas.",
      "É produzido artificialmente em instalações nucleares.",
      "Seus isótopos são extremamente radioativos."
    ],
    producao: [
      "Pode ser produzido em reatores nucleares.",
      "É obtido por irradiação de outros elementos actinídeos.",
      "Sua produção ocorre em quantidades muito pequenas para pesquisas."
    ]
  },

  Cf: {
    usos: [
      "Fontes de nêutrons utilizadas em equipamentos científicos.",
      "Análise de materiais por técnicas nucleares especializadas.",
      "Pesquisas em física e química nuclear."
    ],
    origem: [
      "Não possui ocorrência natural significativa.",
      "Foi produzido artificialmente em laboratório.",
      "Seus isótopos são encontrados em materiais nucleares produzidos artificialmente."
    ],
    producao: [
      "É produzido em reatores nucleares.",
      "Pode ser obtido pela irradiação de elementos actinídeos.",
      "Sua obtenção exige processos especializados de produção e separação."
    ]
  },

  Es: {
    usos: [
      "Pesquisas científicas sobre elementos transurânicos.",
      "Estudos sobre propriedades químicas e nucleares dos actinídeos.",
      "Experimentos especializados em física nuclear."
    ],
    origem: [
      "Não é encontrado naturalmente em quantidades significativas.",
      "Foi identificado pela primeira vez em materiais produzidos por explosões termonucleares.",
      "Atualmente é produzido artificialmente em instalações especializadas."
    ],
    producao: [
      "Pode ser produzido em reatores nucleares de alto fluxo.",
      "É obtido por reações nucleares envolvendo elementos mais leves.",
      "Sua produção ocorre em quantidades extremamente pequenas."
    ]
  },

  Fm: {
    usos: [
      "Pesquisas científicas sobre elementos transurânicos.",
      "Estudos sobre estabilidade e propriedades dos núcleos atômicos.",
      "Experimentos especializados em física nuclear."
    ],
    origem: [
      "Não possui ocorrência natural significativa.",
      "Foi identificado em resíduos de uma explosão termonuclear em 1952.",
      "É produzido artificialmente em laboratórios e instalações nucleares."
    ],
    producao: [
      "Pode ser produzido pelo bombardeamento de elementos mais leves com partículas nucleares.",
      "É obtido em quantidades extremamente pequenas.",
      "Sua produção é destinada principalmente a pesquisas científicas."
    ]
  }

});

// =====================================================
// BANCO DE DADOS QUÍMICOS
// ELEMENTOS 101 A 111
// =====================================================

Object.assign(informacoesExtras, {

  Md: {
    usos: [
      "Pesquisas científicas sobre elementos transurânicos.",
      "Estudos sobre propriedades químicas dos actinídeos.",
      "Experimentos relacionados à estrutura dos núcleos atômicos."
    ],
    origem: [
      "Não é encontrado naturalmente na Terra.",
      "Foi descoberto em 1955 por pesquisadores da Universidade da Califórnia.",
      "É produzido artificialmente em laboratórios especializados."
    ],
    producao: [
      "É produzido pelo bombardeamento de outros elementos com partículas nucleares.",
      "Pode ser obtido em aceleradores de partículas.",
      "Sua produção ocorre em quantidades extremamente pequenas."
    ]
  },

  No: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados e transurânicos.",
      "Estudos sobre estabilidade dos núcleos atômicos.",
      "Investigações sobre as propriedades químicas dos actinídeos."
    ],
    origem: [
      "Não possui ocorrência natural significativa.",
      "Foi identificado pela primeira vez em 1958.",
      "É produzido artificialmente em laboratórios de pesquisa nuclear."
    ],
    producao: [
      "Pode ser produzido por colisões entre núcleos de elementos mais leves.",
      "É obtido em aceleradores de partículas.",
      "Seus átomos são produzidos individualmente em experimentos especializados."
    ]
  },

  Lr: {
    usos: [
      "Pesquisas científicas sobre elementos transurânicos.",
      "Estudos sobre propriedades dos actinídeos.",
      "Experimentos sobre a estrutura eletrônica dos elementos químicos."
    ],
    origem: [
      "Não é encontrado naturalmente na crosta terrestre.",
      "Foi produzido pela primeira vez em 1961.",
      "Sua existência é conhecida por experimentos realizados em laboratórios especializados."
    ],
    producao: [
      "É produzido artificialmente em aceleradores de partículas.",
      "Pode ser obtido por colisões nucleares envolvendo elementos mais leves.",
      "Sua produção ocorre em quantidades muito pequenas."
    ]
  },

  Rf: {
    usos: [
      "Pesquisas sobre elementos superpesados.",
      "Estudos sobre as propriedades químicas dos metais de transição.",
      "Investigações sobre a estabilidade dos núcleos atômicos."
    ],
    origem: [
      "Não ocorre naturalmente na Terra.",
      "Foi produzido artificialmente pela primeira vez em 1964.",
      "Seu nome homenageia o físico Ernest Rutherford."
    ],
    producao: [
      "É produzido em aceleradores de partículas.",
      "Pode ser obtido pela colisão de núcleos de elementos mais leves.",
      "Seus átomos são identificados por meio de técnicas de detecção nuclear."
    ]
  },

  Db: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre propriedades dos metais de transição.",
      "Investigações sobre reações e estabilidade nuclear."
    ],
    origem: [
      "Não possui ocorrência natural conhecida.",
      "Foi produzido artificialmente pela primeira vez em 1967.",
      "Seu nome homenageia a cidade de Dubna, na Rússia."
    ],
    producao: [
      "É produzido por colisões nucleares em aceleradores de partículas.",
      "Pode ser obtido pelo bombardeamento de elementos mais leves.",
      "Sua produção ocorre em laboratórios especializados."
    ]
  },

  Sg: {
    usos: [
      "Pesquisas sobre elementos superpesados.",
      "Estudos das propriedades químicas dos metais de transição.",
      "Investigações sobre a estabilidade dos elementos radioativos."
    ],
    origem: [
      "Não é encontrado naturalmente na natureza.",
      "Foi produzido artificialmente pela primeira vez em 1974.",
      "Seu nome homenageia o químico Glenn T. Seaborg."
    ],
    producao: [
      "É produzido em aceleradores de partículas.",
      "Pode ser formado pela colisão entre núcleos atômicos.",
      "Seus átomos são detectados por meio de equipamentos especializados."
    ]
  },

  Bh: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre as propriedades dos metais de transição.",
      "Experimentos relacionados à estabilidade nuclear."
    ],
    origem: [
      "Não ocorre naturalmente na Terra.",
      "Foi produzido artificialmente pela primeira vez em 1981.",
      "Seu nome homenageia o físico Niels Bohr."
    ],
    producao: [
      "É produzido em aceleradores de partículas.",
      "Pode ser obtido por colisões entre núcleos de elementos mais leves.",
      "Sua produção ocorre em quantidades extremamente pequenas."
    ]
  },

  Hs: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre propriedades químicas dos metais de transição.",
      "Investigações sobre estabilidade e decaimento radioativo."
    ],
    origem: [
      "Não é encontrado naturalmente na Terra.",
      "Foi produzido artificialmente pela primeira vez em 1984.",
      "Seu nome homenageia o estado alemão de Hesse."
    ],
    producao: [
      "É produzido em aceleradores de partículas.",
      "Pode ser obtido pela colisão de núcleos de elementos mais leves.",
      "Seus átomos são identificados por seus padrões de decaimento radioativo."
    ]
  },

  Mt: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre a estrutura dos núcleos atômicos.",
      "Investigações sobre propriedades dos elementos químicos de número atômico elevado."
    ],
    origem: [
      "Não possui ocorrência natural conhecida.",
      "Foi produzido artificialmente pela primeira vez em 1982.",
      "Seu nome homenageia a cidade de Darmstadt, na Alemanha."
    ],
    producao: [
      "É produzido artificialmente em aceleradores de partículas.",
      "Pode ser formado pela colisão de núcleos atômicos.",
      "Sua produção ocorre em quantidades extremamente pequenas."
    ]
  },

  Ds: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre propriedades dos metais de transição.",
      "Investigações sobre a estabilidade dos núcleos atômicos."
    ],
    origem: [
      "Não é encontrado naturalmente na Terra.",
      "Foi produzido artificialmente pela primeira vez em 1994.",
      "Seu nome homenageia a cidade de Darmstadt, na Alemanha."
    ],
    producao: [
      "É produzido em aceleradores de partículas.",
      "Pode ser obtido por colisões entre núcleos de elementos mais leves.",
      "Seus átomos são identificados por técnicas de detecção radioativa."
    ]
  },

  Rg: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre propriedades químicas dos metais.",
      "Investigações sobre o comportamento dos elementos de número atômico elevado."
    ],
    origem: [
      "Não possui ocorrência natural conhecida.",
      "Foi produzido artificialmente pela primeira vez em 1994.",
      "Seu nome homenageia o físico Wilhelm Conrad Röntgen."
    ],
    producao: [
      "É produzido em aceleradores de partículas.",
      "Pode ser formado pela colisão entre núcleos de elementos mais leves.",
      "Sua produção ocorre em quantidades extremamente pequenas."
    ]
  }

});

// =====================================================
// BANCO DE DADOS QUÍMICOS
// ELEMENTOS 112 A 118
// =====================================================

Object.assign(informacoesExtras, {

  Cn: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre as propriedades dos metais de transição.",
      "Investigações sobre o comportamento químico de elementos radioativos."
    ],
    origem: [
      "Não é encontrado naturalmente na Terra.",
      "Foi produzido artificialmente pela primeira vez em 1996.",
      "Seu nome homenageia o cientista Nicolau Copérnico."
    ],
    producao: [
      "É produzido em aceleradores de partículas.",
      "Pode ser formado pela colisão de núcleos de elementos mais leves.",
      "Seus átomos são identificados por meio de técnicas especializadas de detecção nuclear."
    ]
  },

  Nh: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre propriedades químicas dos metais do grupo 13.",
      "Investigações sobre a estabilidade dos núcleos atômicos."
    ],
    origem: [
      "Não possui ocorrência natural conhecida.",
      "Foi produzido artificialmente pela primeira vez em 2004.",
      "Seu nome homenageia o Japão, cujo nome em japonês é Nihon."
    ],
    producao: [
      "É produzido artificialmente em aceleradores de partículas.",
      "Pode ser obtido pela colisão de núcleos de elementos mais leves.",
      "Sua produção ocorre em quantidades extremamente pequenas."
    ]
  },

  Fl: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre as propriedades químicas dos elementos do grupo 14.",
      "Investigações sobre a estabilidade nuclear e o comportamento dos átomos pesados."
    ],
    origem: [
      "Não é encontrado naturalmente na Terra.",
      "Foi produzido artificialmente pela primeira vez em 1998.",
      "Seu nome homenageia o Laboratório Flerov de Reações Nucleares, na Rússia."
    ],
    producao: [
      "É produzido em aceleradores de partículas.",
      "Pode ser formado pela colisão de núcleos atômicos.",
      "Seus átomos são detectados por meio de seus padrões de decaimento radioativo."
    ]
  },

  Mc: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre as propriedades dos elementos do grupo 15.",
      "Investigações sobre a estabilidade dos núcleos atômicos."
    ],
    origem: [
      "Não possui ocorrência natural conhecida.",
      "Foi produzido artificialmente pela primeira vez em 2003.",
      "Seu nome homenageia a cidade de Moscou, na Rússia."
    ],
    producao: [
      "É produzido artificialmente em aceleradores de partículas.",
      "Pode ser obtido pela colisão de núcleos de elementos mais leves.",
      "Sua produção ocorre em quantidades extremamente pequenas."
    ]
  },

  Lv: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre as propriedades químicas dos elementos do grupo 16.",
      "Investigações sobre estabilidade e decaimento radioativo."
    ],
    origem: [
      "Não é encontrado naturalmente na Terra.",
      "Foi produzido artificialmente pela primeira vez em 2000.",
      "Seu nome homenageia o Laboratório Nacional Lawrence Livermore, nos Estados Unidos."
    ],
    producao: [
      "É produzido em aceleradores de partículas.",
      "Pode ser formado pela colisão entre núcleos de elementos mais leves.",
      "Seus átomos são identificados por técnicas especializadas de detecção nuclear."
    ]
  },

  Ts: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre as propriedades dos halogênios.",
      "Investigações sobre o comportamento químico dos elementos de número atômico elevado."
    ],
    origem: [
      "Não possui ocorrência natural conhecida.",
      "Foi produzido artificialmente pela primeira vez em 2010.",
      "Seu nome deriva de Tennessee, estado norte-americano onde estão importantes instituições de pesquisa nuclear."
    ],
    producao: [
      "É produzido artificialmente em aceleradores de partículas.",
      "Pode ser obtido pela colisão de núcleos de cálcio com núcleos de berquélio.",
      "Sua produção ocorre em quantidades extremamente pequenas."
    ]
  },

  Og: {
    usos: [
      "Pesquisas científicas sobre elementos superpesados.",
      "Estudos sobre as propriedades dos gases nobres.",
      "Investigações sobre os limites da estabilidade dos elementos químicos."
    ],
    origem: [
      "Não é encontrado naturalmente na Terra.",
      "Foi produzido artificialmente pela primeira vez em 2002.",
      "Seu nome homenageia o físico nuclear Yuri Oganessian."
    ],
    producao: [
      "É produzido artificialmente em aceleradores de partículas.",
      "Pode ser formado pela colisão de núcleos de cálcio com núcleos de califórnio.",
      "Seus átomos são produzidos em quantidades extremamente pequenas e possuem vida muito curta."
    ]
  }

});