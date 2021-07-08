class Snow{
    constructor(x,y){
     var options = {
        restitution : 0.8,
        density: 0.01,
        friction : 0.3
     }
     this.x = x;
     this.y = y;
     this.ra = 20;
     this.body = Bodies.circle(this.x,this.y,this.ra, options);
     World.add(world,this.body);
     this.image = loadImage("snowflake-removebg-preview.png");
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.ra*2,this.ra*2);
        noStroke();
        pop();
       
    }    
}
