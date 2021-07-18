class ComputerArcher {
    constructor(x,y,width,height,angle) {
        var options = {
        isStatic:true

        }
        
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;
        this.body = Bodies.rectangle(x,y,width,height,options,angle);
        World.add(world,this.body);
        this.image=loadImage("./assets/computerArcher.png");
    }
    display() {
        push ();
        translate (this.x,this.y);
        rotate (this.angle);
        Matter.Body.setAngle(this.body,PI/2);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

}