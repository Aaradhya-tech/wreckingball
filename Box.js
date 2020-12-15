class Box{
    constructor(a,b,c,d){
    var options = {
    resituation : 1

    }
   this.bodies= Bodies.rectangle(a,b,c,d,options);
   this.width = c;
   this.height = d;
    World.add(world, this.bodies);
    }

    display(){
        var pos = this.bodies.position;
        var angle = this.bodies.angle;
        push();
        translate(pos.x, pos.y);
         rotate(angle); 
         rectMode(CENTER); 
         strokeWeight(4);
         stroke("green");
         fill(255); 
         rect(0, 0, this.width, this.height);
          pop();

    }
}