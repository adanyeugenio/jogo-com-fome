const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoresultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma padaria, todos os seus amigos estão la , mas você esta cheia de dividas  já. você prefere ?",
        alternativas: [
            "morrer de fome",
            "matar sua fome"
        ]
    },
    {
        enunciado: "Chegando na padaria,  vocee se depara com uma vitrine cheia de doces deliciosos. mas você só tem R$ 5,00 e o valor dos doces é de R$ 6,00, o que faz?",
        alternativas: [
            "comprar algo mais barato ",
            "pagar fiado"
        ]
    },
    {
        enunciado: "você acabou escolhendo um pão de queijo no valor de R$ 2,00",
        alternativas: [
            "você guarda o dinheiro que sobrou ",
            "jogar tudo pro alto e gastar tudo que lhe restou"
        ]
    },
    {
        enunciado: "A caminho de casa você se depara com um morador de rua, você prefere?",
        alternativas: [
            "dar o que lhe restou para o mendigo",
            "guarda tudo pra si, e ser mão de vaca"
        ]
    },
    {
        enunciado: "Em casa,... Após passar por apuros, você percebe que ajudar aos outros é melhor do que matar sua propria gula ",
    
        
    },
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
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
