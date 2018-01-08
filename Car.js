
module.exports.color = "Red";
module.exports.convertible = true;
module.exports.speed = 0;
module.exports.accelerate = (speedAdded) => {
	const newSpeed = this.speed + speedAdded;
	console.log("speed added is ", speedAdded);
	console.log("the car accelerated from ", this.speed, " to ", newSpeed)
	this.speed = newSpeed;
};
module.exports.decelerate = (SpeedDecrease) => {
	const newSpeed = this.speed - SpeedDecrease;
	console.log("speed lost is " , SpeedDecrease);
	console.log("the car slowed from ", this.speed, " to ", newSpeed)	
	this.speed = newSpeed;
};

