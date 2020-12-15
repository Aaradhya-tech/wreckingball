class Ball{
    constructor(a,b,c){
    var options = {
    resituation : 1

    }
   this.bodies= Bodies.circle(a,b,c,options);
   this.radius = c;
    World.add(world, this.bodies);
    }

    display(){
        var pos = this.bodies.position;
        var angle = this.bodies.angle;
        push();
        translate(pos.x, pos.y);
         rotate(angle); 
         ellipseMode(CENTER); 
         strokeWeight(4);
         stroke("green");
         fill(255); 
         ellipse(0, 0, this.radius, this.radius);
          pop();

    }
}