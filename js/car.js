module.exports.color = red;

module.exports.convertible = false;

module.exports.speed = 0;

module.exports.accelerate = (spd) => {
	let newSpeed = speed + spd
	console.log('the old speed is ', speed, 'the new speed is ', newSpeed);
}

module.exports.decelerate = (spd) => {
	let newSpeed = speed - spd
	console.log('the old speed is ', speed, 'the new speed is ', newSpeed);
}
