class dustbin{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.dustbinWidth=150;
		this.dustbinHeight=150;
		this.wallThickness=150;
		this.angle=0;	
		
		this.image = loadImage("dustbingreen.png");

		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
	
		World.add(world, this.bottomBody)

	} display(){
			var posBottom=this.bottomBody.position;

			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			image(this.image,0,0,this.dustbinWidth, this.wallThickness);
			pop()
	}
}