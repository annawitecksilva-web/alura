PERGUNTAS = [
  {
    pergunta: "A IA pode substituir completamente o papel do professor?",
    alternativas: [
      "Sim, a IA sabe tudo.",
      "Não, a IA é ferramenta; o professor media o aprendizado.",
      "Sim, robôs darão aulas melhores.",
      "Depende apenas da escola."
    ],
    correta: 1,
    explicacao: "A IA apoia, mas não substitui o vínculo humano e a mediação pedagógica."
  },
  {
    pergunta: "Qual é um risco ético do uso de IA na escola?",
    alternativas: [
      "Aprender mais rápido.",
      "Automatizar correções.",
      "Vieses nos algoritmos afetarem avaliações.",
      "Ter acesso a mais conteúdo."
    ],
    correta: 2,
    explicacao: "Algoritmos treinados com dados enviesados podem reproduzir preconceitos."
  },
  {
    pergunta: "Como a IA pode ajudar estudantes com dificuldades?",
    alternativas: [
      "Fazendo a lição por eles.",
      "Personalizando o ritmo de aprendizado.",
      "Eliminando provas.",
      "Substituindo a leitura."
    ],
    correta: 1,
    explicacao: "Tutores inteligentes adaptam o conteúdo ao ritmo de cada aluno."
  },
  {
    pergunta: "O que é 'pensamento crítico' diante da IA?",
    alternativas: [
      "Aceitar tudo que a IA responde.",
      "Usar IA sem questionar.",
      "Questionar, verificar fontes e refletir sobre respostas.",
      "Ignorar a IA completamente."
    ],
    correta: 2,
    explicacao: "O pensamento crítico é a habilidade mais valiosa na era da IA."
  },
  {
    pergunta: "Quem deve participar das decisões sobre IA na escola?",
    alternativas: [
      "Apenas a direção.",
      "Apenas empresas de tecnologia.",
      "Toda a comunidade escolar: alunos, professores e famílias.",
      "Somente o governo."
    ],
    correta: 2,
    explicacao: "Decisões democráticas garantem uso ético e inclusivo da tecnologia."
  },
  {
    pergunta: "O que a IA NÃO consegue fazer na educação?",
    alternativas: [
      "Corrigir provas objetivas.",
      "Gerar exercícios personalizados.",
      "Substituir o afeto e a empatia do professor.",
      "Traduzir textos."
    ],
    correta: 2,
    explicacao: "A dimensão humana e afetiva do ensino é insubstituível."
  },
  {
    pergunta: "Como usar a IA com responsabilidade na escola?",
    alternativas: [
      "Usar sem critério, é só tecnologia.",
      "Verificando informações e citando fontes.",
      "Copiando respostas prontas.",
      "Deixando a IA decidir tudo."
    ],
    correta: 1,
    explicacao: "Verificar e citar fontes garante uso ético e transparente."
  }
];

 FRASES = [
  "Você já usou IA hoje? Como isso te fez sentir?",
  "Em que momento a IA te ajudou a aprender algo novo?",
  "Você confiaria em uma IA para corrigir sua prova? Por quê?",
  "Que tipo de IA você gostaria de ver na sua escola?",
  "Como seria a escola ideal numa era de IA?",
  "Você acha que a IA pode tornar o aprendizado mais justo?"
];

// ========================================
// ESTADO
// ========================================
let perguntasSorteadas = [];
let indice = 0;
let acertos = 0;
 TOTAL_PERGUNTAS = 5;

// ========================================
// NAVEGAÇÃO
// ========================================
function trocarTela(id) {
  document.querySelectorAll