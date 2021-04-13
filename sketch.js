nivelDificuldade = Number(window.prompt ("Qual a dificuldade que você gostaria de jogar? Responda de 1 a 15."))

var corTabuleiro = 0;         //definir a cor do tabuleiro 
var corBolinha = "#0000FF";   //define a cor da bolinha

var largura = 600;           //define a largura
var altura = 400;            //define a altura

var xBolinha = 300;    //coordenada x do centro do círculo.
var yBolinha = 200;    //coordenada y do centro do círculo.
var dBolinha = 20;     //diâmetro do círculo.

var velocidadeXBolinha = nivelDificuldade;   //define a velocidade da bolinha de acordo com o usuario.
var velocidadeYBolinha = nivelDificuldade;   //define a velocidade da bolinha de acordo com o usuario.


//aqui começa
function setup() {
  createCanvas(largura, altura);   //define o tamanho do tabuleiro. 
}

function criarBolinha()                     //função para criar a bolinha.
{
  circle(xBolinha, yBolinha, dBolinha);      //define a posição e o tamanho da bolinha.
  fill(corBolinha);                         //define a corcor da bolinha.
}

function movimentarBolinha()                 //função para a bolinha movimentar
{
  xBolinha = xBolinha + velocidadeXBolinha;      //velocidade X da bolinha.
  yBolinha = yBolinha + velocidadeYBolinha;      //velocidade Y da bolinha.
}

function verificarColisao()           //devifica a colisão nas extremidades do tabuleiro
{
  if(xBolinha >= largura - (dBolinha/2) || xBolinha < (dBolinha/2))    //verifica se bateu na extemidade
  {
    velocidadeXBolinha = -1 * velocidadeXBolinha                       //se bateu muda a o laque esta esta indo
  }
  if(yBolinha >= altura - (dBolinha/2) || yBolinha < (dBolinha/2))    //verifica se bateu na extemidade
  {
    velocidadeYBolinha = -1 * velocidadeYBolinha                     //se bateu muda a o laque esta esta indo
  }
}

function draw() {
  background(corTabuleiro);  //chama a corTabuleiro e a coloca.
  criarBolinha();            //chama a função criarBolinha e a coloca pra funcionar.
  movimentarBolinha();       //chama a função movimentarBolinha e a coloca pra funcionar.
  verificarColisao();        //chama a função verificarColisao e a coloca pra funcionar.
  
  
}