const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: " Qual o seu nível de conhecimento sobre a desigualdade social?" 

alternativas: [
{
     texto: "Baixo",

              afirmacao: "Você está começando a aprender sobre a desigualdade social?. "
     },
     {

      texto: "Médio",

             afirmacao: "Você tem um conhecimento razoável sobre a desigualdade social. "

      },
      {
             texto: "Alto",

            afirmacao: "Você tem um conhecimento aprofundado sobre a desigualdade social . "

      }
    ]
 },
 {
       enunciado: "1.Qual é uma das principais causas da desigualdade social no Brasil?",

        alternativas: [
     {
         texto: " a) Desigualdade de renda",

     afirmacao: "correta "

    },
{
     texto: "b) Igualdade de oportunidades",

       afirmacao: "Incorreta "
},
{
texto: "c) Baixa inflação",

      afirmacao: "incorreta "
},
{
}

     ]
},
   {
enunciado: "2. O que é a desigualdade de renda?",

alternativas: [
   }

    texto: "a) Diferença nos níveis de educação",
afirmacao: " incorreta. "
},
{
texto: "b) Diferença na distribuição de renda entre diferentes grupos da população",

afirmacao: "Correta."

},
{
texto: " c) Acesso igualitário aos serviços de saúde",
afirmacao: "Incorreta. "

},
{
}
]
},
{
enunciado: "3. Qual é um dos indicadores mais utilizados para medir a desigualdade social?",

alternativas: [
{

    texto: "  a) Taxa de natalidade",

   afirmacao: "Incorreto."

},
{
texto: "b) Índice de Gini",

afirmacao: " Correto. "

},
{
texto: "c) Taxa de desemprego
",
afirmacao: "Incorreto. "

},

{

{
       enunciado: "4. Qual política pública pode ajudar a reduzir a desigualdade social?",

        alternativas: [
     {
         texto: " a) Programas de transferência de renda",

     afirmacao: "Correto "

    },
{
     texto: "b) Aumento dos impostos para a classe média",

       afirmacao: "Incorreto"
},
{
texto: "c) Redução dos serviços públicos",

      afirmacao: "Incorreto "
},
{
}

     ]
},
   {
}


{
  enunciado: "5. Como a educação pode impactar a desigualdade social?",

   alternativas: [
{
    texto: " a) Proporcionando mais oportunidades de emprego e melhores salários",

afirmacao: "Correto "

},
{
texto: "b) Aumentando a distância entre ricos e pobres",

  afirmacao: "Incorreto "
},
{
texto: "c) Não tem impacto significativo",

 afirmacao: "Incorreto"
},
{
}

]
},
{
  {
    enunciado: "6.Qual setor é mais afetado pela desigualdade social no Brasil?",

     alternativas: [
  {
      texto: "a) Tecnologia",

  afirmacao: "Incorreto "

 },
{
  texto: "b) Educação",

    afirmacao: "correto "
},
{
texto: "c) Agricultura",

   afirmacao: "incorreto "
},
{
}

  ]
},
{

 

  ]
},
{
]
}
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "Obrigado por completar o quiz!";
//*aqui eu coloco o uma mensagem para aparecer na última tela do quiz, esta
mensagem irá aparecer junto com o resultado final.
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();
