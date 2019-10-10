let mic;

function setup() {
  createCanvas(400, 400);
  background('#9AFF33');
  noStroke();
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
  var boca_w = width/3;

    micLevel = mic.getLevel();
    
    mov = map(micLevel, 0, 1, 10, 300);
  
  noStroke();
  
  push();
  translate(width/2, height/2);
  rectMode(CENTER);
  
  //fons de la boca
  fill('#930F2E');
  rect(0, 100, boca_w, 60, 5+mov);
  
  //llengua
  fill('white')
  rect(0, 150, boca_w, 90, 10+mov);
  
  //dents
  fill('withe')
  rect(0, 80, boca_w, 20, 10+mov);
  
  //barbeta
  stroke('#9AFF33')
  fill('#9AFF33');
  rect(0, 180, boca_w, 100 );
  pop();
  
  //front
  fill('#9AFF33');
  rect(0, 0, width, height/1.8); 
  
  //ull esquerre
  fill('white');
  ellipse(width*0.25, height/2.5, 40+mov+0.5);
  fill('black');
  ellipse(width*0.25, height/2.5, 0.5+mov);
  
  //ull dret
  fill('white');
  ellipse(width*0.75, height/2.5, 40+mov+0.5);
  fill('black');
  ellipse(width*0.75, height/2.5, 0.5+mov);
  
  //nas
  noFill();
  stroke('#309C0E');
  strokeWeight(10);
  ellipse(width*0.5, height/1.95, 10, 10, radians(230), radians(310));

  //cella esquerre
  noStroke()
  fill('#005203');
  rect(50, 100, 90, 10);

  //cella dreta
  noStroke()
  fill('#005203');
  rect(255, 100, 90, 10);
  
  //galta esquerre
  fill('#FF83F2');
  ellipse(width*0.83, height/1.5, 15+mov+0.5);
    
  //galta dreta
  fill('#FF83F2');
  ellipse(width*0.15, height/1.5, 15+mov+0.5);
}


function touchStarted () {
    getAudioContext().resume();
}