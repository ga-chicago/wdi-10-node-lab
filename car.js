module.exports.color = 'red';
module.exports.convertible = false;
module.exports.speed = 0;
// module.exports.accelerateCar = (speed) => {
// 	let oldSpeed = this.speed;
// 	this.speed = this.speed + this.speed;
// 	return 'the car\'s speed was '+ oldSpeed +', the car\'s speed is now ' + this.speed;
// }
module.exports.decelerateCar = (speed) => {
	let oldSpeed = this.speed;
	this.speed = this.speed - this.speed;
	return 'the car\'s speed was ' + oldSpeed +', the car\'s speed is now ' + this.speed;
}

this.speed = 10;
// this.accelerateCar(20);
this.decelerateCar(5);