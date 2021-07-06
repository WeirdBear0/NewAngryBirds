const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform, slingshot;
var posArray, fired, coordArray;
var time;
var bg = "sprites/bg.png"
var overlay;
var star1, star2, star3;
var gamestate;
var endcounter;
var overlaySize;
var birdArray;
window.score = 0;
function preload() {
    overlay = loadImage("sprites/Overlay.png");
    smoke = loadImage("sprites/smoke.png");
    star1 = loadImage("sprites/star1.png");
    star2 = loadImage("sprites/star2.png");
    star3 = loadImage("sprites/star3.png");
    backgroundImg = loadImage("sprites/bg.png");
//     dayNight();
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height,1600,20);
    platform = new Ground(150, 705, 300, 170);

    box1 = new Box(1000,720,70,70);
    box2 = new Box(1220,720,70,70);
    box6 = new Box(1440, 720, 70,70);
    pig1 = new Pig(1110, 750);
    log1 = new Log(1110,660,300, PI/2);

    box3 = new Box(1000,640,70,70);
    box4 = new Box(1220,640,70,70);
    pig3 = new Pig(1110, 620);

    log3 =  new Log(1110,580,300, PI/2);

    box5 = new Box(1110,560,70,70);
    log4 = new Log(1060,520,150, PI/7);
    log5 = new Log(1170,520,150, -PI/7);
    log6 = new Log(1400, 720, 150, 0);
    pig4 = new Pig(1440, 790);
    log7 = new Log(1270, 720, 150,0);
    box7 = new Box(1330, 720,70, 70);
    pig5 = new Pig(1330, 780);
    wall = new Ground(width, 400, 20,800);
    bird = new Bird(200,440);
    bird2 = new Bird(120,480);
    bird3 = new Bird(80,480);
    fired = false;
    slingshot = new Slingy(bird.body, {x:200,y:440});
    // log8 = new Log(1080, 480, 200,PI/2);
    stone1 = new Stone(900, 680,70,70);
    stone2 = new Stone(700, 680,70,70);
    log8 = new Log(800, 660, 250, PI/2);
    stone3 = new Stone(900, 630,70,70);
    stone4 = new Stone(700, 630,70,70);
    log9 = new Log(800, 610, 250, PI/2);
    stone5 = new Stone(900, 580,70,70);
    stone6 = new Stone(700, 580,70,70);
    log10 = new Log(800, 560, 250, PI/2);
    pig6 = new Pig(800,680);
    pig7 = new Pig(800,650);
    pig8 = new Pig(800,565);
    stone7 = new Stone(900, 530,70,70);
    stone8 = new Stone(700, 530,70,70);
    log11 = new Log(800, 510, 250, PI/2);
    stone9 = new Stone(900, 480,70,70);
    stone10 = new Stone(700, 480,70,70);
    log12 = new Log(800, 460, 250, PI/2);
    gamestate = "playing";
    endcounter = 0;
    overlaySize = 1;
    star1y = 1000;
    star2y = 1000;
    star3y = 1000;

    posArray = [];
    coordArray = [];
    birdArray = [bird3, bird2, bird];
    slope();



}

function draw(){
//     if(backgroundImg){
//         background(backgroundImg);
//     }
    background(backgroundImg)
  
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    box6.display();
    log6.display();

    platform.display();
    bird.display();
    slingshot.display();
    pig4.display();
    log7.display();
    pig5.display();
    box7.display();
    wall.display();
    log8.display();
    stone1.display();
    stone2.display();
    log9.display();
    stone3.display();
    stone4.display();
    log10.display();
    stone5.display();
    stone6.display();
    pig6.display();
    pig7.display();
    pig8.display();
    log11.display();
    stone7.display();
    stone8.display();
    log12.display();
    stone9.display();
    stone10.display();
    bird2.display();
    bird3.display();
    

    if(bird.body.position.x>220 && bird.body.velocity.x>10 && frameCount%2===0){
        posArray.push([bird.body.position.x, bird.body.position.y])
    }
    for(var i = 0; i<posArray.length; i++){
        image(smoke, posArray[i][0],posArray[i][1], 20,20);
    }
    text("Score:" + window.score, 50, 50);
    if(birdArray.length === 0){
        endcounter++
        if(endcounter >= 200){
            gamestate = "over";
            
           
        }
    }

    if(gamestate === "over"){
        if(overlaySize<100){
            overlaySize++
        }
        image(overlay, width/2-8*overlaySize, height/2-4*overlaySize, overlaySize*16, overlaySize*8);
      
    }
    imageMode(CENTER);
    image(star1,width/2-175, star1y,150,150);
    image(star2,width/2-10, star2y,150,150);
    image(star3,width/2+150, star3y,150,150);
    imageMode(CORNER);
    if(gamestate==="over"){
        if(window.score>=75 && star1y>400){
            star1y=star1y-6;
        }
        if(window.score>=225 && star3y>400){
            star3y=star3y-6;
        }
        if(window.score>=425 && star2y>380){
            star2y=star2y-6;
        }
    }
    slope();

 
   

    
}

function mouseDragged(){
    if(fired === false && mouseX>=0 && mouseX<200){
        Matter.Body.setPosition(birdArray[birdArray.length-1].body, {x:mouseX, y:mouseY});

    }

}

function mouseReleased(){
    if(fired === false){
        slingshot.fly();
        birdArray.pop();

        if(birdArray.length===0){
            fired=true;
        }
    }
}

function keyPressed(){
    if (keyCode === 32){
        
        if(birdArray.length>0){
            Matter.Body.setPosition(birdArray[birdArray.length-1].body, {x:200, y:440});
            slingshot.attach(birdArray[birdArray.length-1].body);
            posArray=[];
            birdArray[birdArray.length-1].body.velocity.x = 0;
        }
       
        

        
    }

}
async function dayNight(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/america/phoenix");
    var json = await response.json()
    console.log(json);
    time = json.datetime;
    var indexpos = time.slice(11,13);
    console.log(indexpos);
    if (indexpos>6 && indexpos<=17){
        bg = "sprites/bg.png"
        console.log("day");
    }
    else{
        bg = "sprites/halloween.png"
        console.log("night");

    }
    backgroundImg = loadImage(bg);
}

function slope(){
    var divisor1 = mouseY - 440;
    var divisor2 = mouseX - 200;
    // console.log(divisor1);
    // console.log(divisor2);
    var quotient = divisor1 / divisor2;
    // console.log(quotient);
    var other1 = mouseY + 440;
    var other2 = mouseX - 200;
    
}

