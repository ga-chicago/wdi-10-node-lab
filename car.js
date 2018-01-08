module.exports.color = 'blue';
module.exports.convertable = false;
module.exports.currentSpeed = 0;


module.exports.accelerate = (speed)=>{
	return currentSpeed += speed;
}

module.exports.decelerate = (speed)=>{
		return currentSpeeed -= speed;
}

// module.exports.printVar = ()=>{
//  	console.log(color);
// 	console.log(convertable);
// }

// printVar();
