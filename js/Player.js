class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "yellow";
    this.life3 = "red";

    World.add(world, this.body);
  }

  life() {
    push();
   //write a correct code to show lives as three green rectangles in a strainght line.
   fill(this.life3)
   rect(180,50,70,30)
   fill(this.life2)
   rect(250,50,70,30)
   fill(this.life1)
   rect(320,50,70,30)
    pop();
  }

 


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
