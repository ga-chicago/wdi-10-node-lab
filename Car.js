module.exports.color = "red";
module.exports.convertible = true;
module.exports.speed = 0;

module.exports.accelerate = (newSpeed)=>{
	return "Old speed was "+(this.speed)+" and new speed is "+(this.speed+=newSpeed);
}

module.exports.decelerate = (newSpeed)=>{
	return "Old speed was "+(this.speed)+" and new speed is "+(this.speed-=newSpeed);
}
this.accelerate(5)
this.decelerate(2)