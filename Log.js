class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.vanish = 255;
  }
  display(){
     if(this.body.speed<5){
       super.display();
     } else {
       World.remove(world,this.body)
      push();
       this.vanish=this.vanish-5;
       tint(255,this.vanish)
       image(this.image,this.body.position.x,this.body.position.y,50,50);
       pop();
     }
    }
}