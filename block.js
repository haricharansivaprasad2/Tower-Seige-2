class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.vis = 255;
      }
      display(){
        if(this.body.speed < 3){
          var pos= this.body.position;
          rectMode(CENTER);
          rect(pos.x,pos.y,this.width, this.height);
        }else{
          World.remove(world,this.body);
          push();
          tint(255,this.vis-=5);
          rect(-20,0,this.width, this.height);
          pop();
        }
      }
}
