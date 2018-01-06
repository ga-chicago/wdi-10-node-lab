module.exports.color = 'red';
module.exports.convertible = true;
module.exports.speed = 0;
module.exports.accelerate = (speed) => {
	this.speed = this.speed + speed;
	return 'Current speed is ' + speed;
};
// module.exports.decelerate = (speed) => {
// 	speed = this.speed - 5;
// 	return 'Current speed is ' + speed;
// };

this.accelerate(60);
// this.decelerate();