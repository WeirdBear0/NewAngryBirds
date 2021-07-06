class Pig extends BaseClass {
  // Extra
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.smoke1 = loadImage("sprites/smoke1.png");
    this.smoke2 = loadImage("sprites/smoke2.png");
    this.smoke3 = loadImage("sprites/smoke3.png");
    this.smoke4 = loadImage("sprites/smoke4.png");
    this.counter = 0;
    this.damageLevel = 0;
    this.dead = false;
    this.hundred = loadImage("/sprites/+100.png");
    this.posx = null;
    this.posy = null;
  }
  display(){
    if(this.body.speed> 2.91&& this.damageLevel === 0){
      this.image = loadImage("sprites/enemyDamaged.png");
      this.damageLevel = 1;

    }
    else if(this.body.speed> 3 && this.damageLevel === 1){
      this.image = loadImage("sprites/enemyCritical.png");
      this.damageLevel = 2;
    }
    else if(this.body.speed< 4 && this.dead === false){
      super.display();
      
    }
    else{
      this.dead = true;
      console.log("dead");
      this.fade();
    }
    // console.log(this.body.speed);
  }
  fade(){
    this.counter++
    if(this.counter === 1){
      this.posx = this.body.position.x;
      this.posy = this.body.position.y;
      window.score=window.score+100;

    }
    if (this.counter < 35){
      image(this.hundred, this.posx - 12 + this.counter, this.posy - 23 + this.counter, 60, 30);
    }
    if(this.counter< 7){
      image(this.smoke1, this.posx, this.posy, 40, 40)
    }
    else if(this.counter< 14){
      image(this.smoke2, this.posx, this.posy, 50, 50)
    }
    else if(this.counter< 21){
      image(this.smoke3, this.posx, this.posy, 60, 60)
    }
    else if(this.counter< 28){
      image(this.smoke4, this.posx, this.posy, 70, 70)
    }
    else if(this.counter < 35){
      World.remove(world, this.body);

    }
    
  }
  // Tint Functionality and Normal Class
  // constructor(x, y){
  //   super(x,y,50,50);
  //   this.image = loadImage("sprites/enemy.png");
  //   this.visibility = 255;
  // }
  // display(){
  //   console.log(this.body.speed);
  //   if(this.body.speed> 3){
  //     World.remove(world, this.body);
  //     push()
  //     tint(255, this.visibility);
  //     image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
  //     pop();
  //     this.visibility = this.visibility - 5;
  //   } 
  //   else{
  //     super.display();
  //   }
  // }

};