class Stone extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/stone.png");
    this.visibility = 255;
    this.hundred = loadImage("/sprites/+25.png");
    this.posx = null;
    this.posy = null;
    this.counter = 0;
  } 
  display(){
     
      if(this.body.speed> 6){
        World.remove(world, this.body);
        this.fade();
      } 
      else{
        super.display();
      }
    }
    fade(){
      this.counter++
      if(this.counter === 1){
        this.posx = this.body.position.x;
        this.posy = this.body.position.y;
        window.score=window.score+25;
  
      }
      if (this.counter < 35){
        image(this.hundred, this.posx - 12 + this.counter, this.posy - 23 + this.counter, 60, 50);
      }


      
    }

};
  