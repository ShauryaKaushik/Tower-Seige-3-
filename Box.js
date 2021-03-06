class Box{
  constructor(x, y, width, height, color) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed > 5)
      {
       World.remove(world,this.body);
       push();
       this.visibility = this.visibility - 5;
       pop();  
    
      

    } else{var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill(this.color);
      rectMode(CENTER);
      rect(0,0,this.width,this.height); 
      pop(); }
}

score(){
  if (this.visibility < 0 && this.visibility > -1005){
    score++;
  }

}
}  
