module.exports.color = 'red';
module.exports.convertible = true;
module.exports.speed = 0;
module.exports.accelerate = (speed) => {
	this.speed = this.speed + speed;
	return 'The speed was ' + (this.speed - speed) + ', the current speed is ' + this.speed;
};
module.exports.decelerate = (speed) => {
	this.speed = this.speed - speed;
	return 'The speed was ' + (this.speed + speed) + ', the current speed is ' + this.speed;
};

this.accelerate(60);
this.decelerate(5);