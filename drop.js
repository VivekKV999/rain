class drop{
    constructor(x, y,r) {
        var options = {
            isStatic:false,
           restitution:0.08,
          friction:4.0,
            density:2.0
        }
        this.tt=255;
        this.body = Bodies.circle(x, y, r, options);
        this.r = r
       // this.maxDrops=[];

        World.add(world, this.body);
       
      }
      st(){
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    
      }
      display(){
       // var maxDrops= 100;
      
        /*for(var i = 0; i<this.maxDrops; i++)
        {
            this.drop.push(new drop (random(0,400),random(0,400)));
        }  */
       
           push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke(0);
        fill ("blue")
        ellipse(0, 0, this.r);
        pop();
      }
    }
