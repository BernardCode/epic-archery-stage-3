class PlayerArrow {
        constructor(x,y,width,height){
            var options={
                friction:1.0,
                density:1.0,
                isStatic:true
            }
            this.width=width;
            this.height=height;
            this.trajectory = [];
            this.body=Bodies.rectangle(x,y,width,height,options);
            this.image=loadImage("./assets/arrow.png");
            World.add(world,this.body);
        }
        display() {
            var pos = this.body.position;
            var angle = this.body.angle;

            push();
            translate(pos.x,pos.y);
            rotate (angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();

            var position = [this.body.position.x,this.body.position.y];
            this.trajectory.push(position);

            for(var i = 0; i<this.trajectory.length; i++) {
                ellipse(this.trajectory[i][0],this.trajectory[i][1],5,5);
            }
        }

        shoot() {
            //console.log("shooting");
            var vel = p5.Vector.fromAngle(playerArcher.angle-300);
            vel.mult(60);
            Matter.Body.setStatic(this.body,false);
            Matter.Body.setVelocity(this.body, {x:vel.x,y:vel.y});
        }




        
}