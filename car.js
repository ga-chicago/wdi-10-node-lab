module.exports.color = 'blue';
module.exports.convertable = false;
module.exports.currentSpeed = 20;


module.exports.accelerate = (speed)=>{
	return this.currentSpeed += speed;
}

module.exports.decelerate = (speed)=>{
	this.currentSpeed = this.currentSpeed - speed;
	return this.currentSpeed;
}