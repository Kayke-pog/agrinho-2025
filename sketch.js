let player;
let city;
let field;
let road;

function setup() {
  createCanvas(600, 400);

  // Define o campo e a cidade
  field = createVector(50, 250);  // Campo no canto inferior esquerdo
  city = createVector(width - 150, 100);  // Cidade no canto superior direito

  // Criação do jogador após as variáveis estarem definidas
  player = new Player();

  road = new Road();
}

function draw() {
  background(200, 220, 255);

  // Desenhar o campo e a cidade
  drawFieldAndCity();

  // Desenha a estrada
  road.display();

  // Atualiza o jogador
  player.update();
  player.display();

  // Verifica se o jogador alcançou a cidade
  if (player.position.dist(city) < 20) {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Você chegou à cidade!", width / 2, height / 2);
  }
}

// Função para desenhar o campo e a cidade
function drawFieldAndCity() {
  // Desenha o campo
  fill(50, 200, 50);
  noStroke();
  rect(field.x, field.y, 150, 100);

  // Desenha a cidade
  fill(200, 50, 50);
  rect(city.x, city.y, 150, 100);
  
  // Texto para indicar campo e cidade
  fill(0);
  textSize(18);
  text("Campo", field.x + 50, field.y + 50);
  text("Cidade", city.x + 50, city.y + 50);
}

// Função para o personagem
class Player {
  constructor() {
    // Inicia o jogador no centro do campo
    this.position = createVector(field.x + 75, field.y + 50); 
    this.speed = 5;
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.position.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.position.x += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.position.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.position.y += this.speed;
    }
  }

  display() {
    fill(255, 255, 0); // Cor do jogador
    noStroke();
    ellipse(this.position.x, this.position.y, 20, 20); // Desenha o círculo (jogador)
  }
}

// Função para a estrada
class Road {
  constructor() {
    this.start = createVector(field.x + 150, field.y + 100); // Ponto de início da estrada
    this.end = createVector(city.x, city.y + 50);           // Ponto de chegada da estrada
  }

  display() {
    stroke(50);
    strokeWeight(3);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}
