class Ground{
    constructor(a,b,c,d){
    var options = {
        isStatic: true 

    }
   this.bodies= Bodies.rectangle(a,b,c,d,options);
   this.width = c;
   this.height = d;
    World.add(world, this.bodies);
    }

    display(){
        var pos = this.bodies.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y,this.width, this.height);
    }
}