class PlayerArcher {
    constructor(x,y,width,height,angle) {

        
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;
        this.body = Bodies.rectangle(x,y,width,height,angle);
        World.add(world,this.body);
        this.image=loadImage("./assets/playerArcher.png");
    }
    display() {
        if(keyIsDown(RIGHT_ARROW)&& this.angle<-1) {
            this.angle+=0.03;
          }
        
        if(keyIsDown(LEFT_ARROW)&& this.angle>-2) {
            this.angle-=0.03;
        }
        push ();
        translate (this.x,this.y);
        rotate (this.angle);
        Matter.Body.setAngle(this.body,PI/2);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

}