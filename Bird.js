class Bird extends Superclass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("images-main/bird.png");
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}