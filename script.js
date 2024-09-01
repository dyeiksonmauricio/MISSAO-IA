const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado:"Qual o seu nível de conhecimento sobre a desigualdade social?",
alternativas: [
{
texto: "Baixo",

afirmacao: [ "Você sabe apenas a base sobre a desiguladade social. ",
    "É necessário estudar mais sobre o assunto",
    "Realizar pesquisas e fazer exercícios pode ajudar."
]
},
{
texto: "Médio",

afirmacao: [ "Você tem um bom entendimento sobre a a desiguladade social. ",
    "Seu nivel de conhecimento para esse assunto é bom",
    "Realização de exercícios pode te dar ainda mais conhecimento sobre o assunto."
]
},
{
texto: "Alto",

afirmacao: [ "Você tem tem um conhecimento aprofundado sobre a desiguladade social.",
      "Parabéns pelo seu conhecimento, continue assim ",
      "Sempre deixe pelo menos 1h do seu dia para os estudos."
      ]
}
]
},
{
enunciado: "1.Qual é uma das principais causas da desigualdade social no Brasil?",
alternativas: [
{
texto: "a) Desigualdade de renda",

afirmacao: [ " Esta alternativa está correta." ,
       "Parabéns está correto, continue assim.! "
]

},
{
texto: "b) Igualdade de oportunidades",

afirmacao:"1-B) Esta alternativa está incorreta"
},[
          "Não foi dessa vez, mas continue se esforçando que irá conseguir!"],
{
texto: [ "c) Baixa inflação",
afirmacao: "Esta alternativa está incorreta.",

        "Não foi dessa vez, mas continue se esforçando que irá conseguir!"]
}

]
},
{
enunciado: "2. O que é a desigualdade de renda?",
alternativas: [
{
texto: "a) Diferença nos níveis de educação",
afirmacao: "2-A) Esta alternativa esta incorreta. "
},
{
texto: "b) Diferença na distribuição de renda entre diferentes grupos da população",

afirmacao: "Está altenativa está correta. "

},
{
texto: "c) Acesso igualitário aos serviços de saúde",
afirmacao: "Está altenativa está incorreta. "
},
]
},

enunciado: "3. Qual é um dos indicadores mais utilizados para medir a desigualdade social?",
alternativas: [
{
texto: " a) Taxa de natalidade",
afirmacao: "Está alternativa está incorreta. "
},
{
texto: "b) Índice de Gini",
afirmacao: "Está alternativa está correta. "
},
{
texto: "c) Taxa de desemprego",
afirmacao: "3-b) Esta alternativa esta correta. "

},


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
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();
