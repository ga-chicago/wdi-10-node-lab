
module.exports.color = "Red";
module.exports.convertible = true;
module.exports.speed = 0;
module.exports.accelerate = (mph) => {
	let currentSpeed = mph
	this.speed = mph++;
	console.log("The car accelerated from ", this.speed, " to ", mph);
};
module.exports.decelerate = (mph) => {
	let currentSpeed = mph
	this.speed = mph--;
	console.log("The car decelerated from ", this.speed, " to ", mph);
};

