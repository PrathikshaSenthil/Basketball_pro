

    class Dustbin{

        constructor(x,y,width,height){
            var Doptions = {
      isStatic : true,
         'restitution' : 0,
        'friction': 0,
        'density' : 2
    
    
            }
    
               this.body=Bodies.rectangle(x,y,width,height,Doptions);
           this.image=loadImage("basket.png");
          
               this.width=width;
               this.height=height;
               this.depth=1;
               World.add(world,this.body);
        }
    
        display(){
    
          var pos=this.body.position;
    
          push();
          imageMode(CENTER);
          rectMode(CENTER);
          fill(75);
          image(this.image,this.body.position.x-15,this.body.position.y-50,300,300);
         // rect(pos.x,pos.y,this.width,this.height);
          pop();
        }
    
    
    
    
    }


