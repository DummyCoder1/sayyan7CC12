var white,black,red;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background("white");
  header();
}

function draw() {
  
  white = new ColorBox(0, 50, 50, 50, "white");
  white.appear();
  black = new ColorBox(0, 100, 50, 50, "black");
  black.appear();
  //code for red box :
  red = new ColorBox(0,150,50,50,"RED");
   red.appear();
   pink = new ColorBox(0,200,50,50,"pink");
   pink.appear();
yellow = new ColorBox(0,250,50,50,"yellow
yellow.appear();
}

function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}
