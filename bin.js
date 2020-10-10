class bin {
  constructor(x, y, height,angle) {
    var options = {
      isStatic: true,
        'restitution':0.8,
        'friction':10.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 120, height, options);
    this.image = loadImage("sprites/dustbingreen.png");
    this.width = 120;
    this.height = height;
    Matter.Body.setAngle(this.body, angle)

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};
