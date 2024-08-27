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

afirmacao: [ "Você sabe apenas a base sobre a globalização. ",
    "É necessário estudar mais sobre o assunto",
    "Realizar pesquisas e fazer exercícios pode ajudar."
]
},
{
texto: "Médio",

afirmacao: [ "Você tem um bom entendimento sobre a globalização. ",
    "Seu nivel de conhecimento para esse assunto é bom",
    "Realização de exercícios pode te dar ainda mais conhecimento sobre o assunto."
]
},
{
texto: "Alto",

afirmacao: [ "Você tem tem um conhecimento aprofundado sobre a globalização.",
      "Parabéns pelo seu conhecimento, continue assim ",
      "Sempre deixe pelo menos 1h do seu dia para os estudos."
      ]
}
]
},
{
enunciado: "1) A globalização é um processo contínuo de integração, em especial, econômica do globo. Para tal, torna-se necessário a disponibilidade de ferramentas que permitem a organização das redes e dos fluxos entre as diferentes regiões do mundo. Desse modo, pode-se apontar que a globalização está amparada no:",
alternativas: [
{
texto: "a)   protecionismo econômico praticado pelos países desenvolvidos",

afirmacao: [ " Esta alternativa está incorreta." ,
       "Não foi dessa vez, mas continue se esforçando que irá conseguir! "
]

},
{
texto: "b) desenvolvimento dos meios de transporte e de comunicação",

afirmacao:"1-B) Esta alternativa está correta pois a globalização é um processo de integração econômica e social que necessita de uma rede de ligações entre os diferentes pontos do globo. "
},[
          "Parabéns está correto, continue assim."],
{
texto: [ "c) emprego de técnicas tradicionais de produção, como o fordismo",
afirmacao: "Esta alternativa está incorreta.",

        "Não foi dessa vez, mas continue se esforçando que irá conseguir!"]
},
{
texto: [ "d) comprometimento com o desenvolvimento sustentável das nações",
afirmacao: "Esta alternativa está incorreta.",
           "Não foi dessa vez, mas continue se esforçando que irá conseguir! "]
}

]
},
{
enunciado: "2 - As atividades industriais da globalização estão extremamente internacionalizadas e são baseadas em ferramentas tecnológicas de produção e comercialização. Sendo assim, destacam-se, no processo de globalização, as empresas ligadas à:",
alternativas: [
{
texto: "a) produção de conhecimento, como as de informática",
afirmacao: "2-A) Esta alternativa esta correta pois as principais indústrias desse período estão relacionadas ao desenvolvimento tecnológico, como as de informática. "
},
{
texto: "b) exploração de bens primários, como as madeireiras",

afirmacao: "Está altenativa está incorreta. "

},
{
texto: "c) atividade de produção artesanal, como as têxteis",
afirmacao: "Está altenativa está incorreta. "
},
{
texto: "d) alta exploração dos trabalhadores, como as de base",
afirmacao: "Está alternativa está incorreta. "
}
]
},
{
enunciado: "3 - Com relação ao espaço mundial, o processo de globalização provoca uma homogeneização da produção e do consumo em nível global, porém esse processo não é uniforme em todo o planeta. Desse modo, pode-se afirmar que a globalização resultou na: ",
alternativas: [
{
texto: "a) melhoria da qualidade de vida das populações periféricas",
afirmacao: "Está alternativa está incorreta. "
},
{
texto: "b) utilização de mão de obra com baixa qualificação profissional",
afirmacao: "Está alternativa está incorreta. "
},
{
texto: "c) acentuação da desigualdade social entre diferentes regiões",
afirmacao: "3-C) Esta alternativa esta correta pois a globalização não atua de maneira uniforme em todas as regiões do globo. "

},

{
texto: "d)diminuição dos impactos ambientais gerados no globo",
afirmacao: "Está alternativa está incorreta. "

}
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
