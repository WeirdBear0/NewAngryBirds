class Slingy{
    constructor(b1,point){
        var options = {
            bodyA: b1,
            pointB: point,
            length: 10,
            stiffness: 0.035
        }
        this.sling1 = loadImage("/sprites/sling1.png");
        this.sling2 = loadImage("/sprites/sling2.png");
        this.sling3 = loadImage("/sprites/sling3.png");
        this.slingy = Constraint.create(options);
        World.add(world, this.slingy);
    }
    display(){

        image(this.sling1, 200,423);
        image(this.sling2, 172,420);
        
        if (this.slingy.bodyA){
            var p1 = this.slingy.bodyA.position;
            var p2 = this.slingy.pointB;

            if(p1.x > 220){
                strokeWeight(3);
                stroke("#301608");
                line(p1.x+20, p1.y, p2.x+25, p2.y+10);
                line(p1.x+20, p1.y, p2.x-25, p2.y+10);
                image(this.sling3, p1.x+22,p1.y-11, 10,30);
            }
            else{
                strokeWeight(7);
                stroke("#301608");
                line(p1.x-20, p1.y, p2.x+25, p2.y+10);
                line(p1.x-20, p1.y, p2.x-25, p2.y+10);
                image(this.sling3, p1.x-26,p1.y-11, 10,30);
            }
        }
       

    }
    fly(){
        this.slingy.bodyA = null;
    }
    attach(body){
        this.slingy.bodyA = body;
    }
}
