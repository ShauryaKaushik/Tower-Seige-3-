class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("rgb(48, 22, 8)")
            
             strokeWeight(5);   
             line(pointA.x+5, pointA.y+15, pointB.x, pointB.y);
             pop();
            
        }

    }
    
    attach(body1){

        this.sling.bodyA = body1;
     
}

}
