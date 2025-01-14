let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let image64 = {
cat1:"./img/bg/bc1.png",
cat2:"./img/bg/bc2.png",
cat3:"./img/bg/bc3.png",
cat4:"./img/bg/bc4.png",
cat5:"./img/bg/bf1.png",
cat6:"./img/bg/bfish1.png",


}
let height = window.innerHeight, width=window.innerWidth;
let fixedImageDimension = 100

let TO_RADIANS =  Math.PI/180;
function resize() {
  context.clearRect ( 0 , 0 , canvas.width, canvas.height );

	height = canvas.height = window.innerHeight
 width = canvas.width = window.innerWidth
}

	// height = canvas.height = window.innerHeight
	// width = canvas.width = window.innerWidth
const imageDimen = () => {
  let ar;
  let fixedMaxDist, fixedMinDist = 10;
  if (height > width) {
    fixedMaxDist = height / 15
    ar = width / height
  } else {
    fixedMaxDist = width / 15
    ar = height / width
  }
  // console.log(fixedMaxDist)
  return fixedMaxDist * ar
    //min: fixedMinDist * ar  
}
let particles =[]

const Particle = function(x, y, i, t, img) {
  console.log("*")
  this.x = x;
  this.y = y;
  this.r = 10
  this.alp = 0
  this.i = i
  this.t = t
  this.img = img
}
//
Particle.prototype.render = function(randDist){
        // let randDist = imageDimen()

  var image = new Image()
  //
    // let randDist = imageDimen()
// console.log(randDist)
    image.src = this.img
  // save the current co-ordinate system 
	// before we screw with it
	context.save(); 
 
	// move to the middle of where we want to draw our image
	context.translate(this.x, this.y);
 this.alp+=this.i
	// rotate around that point, converting our 
	// angle from degrees to radians 
	context.rotate(this.t*this.alp * TO_RADIANS);
 // console.log(image.width, image.height)
	// draw it up and to the left by half the width
	// and height of the image (Since the image are croped before, just use fixed h/w)
	context.drawImage(image, -(fixedImageDimension/2), -(fixedImageDimension/2), randDist, randDist);
	// and restore the co-ords to how they were when we began
	context.restore(); 
  // context.drawImage( image, axisX, axisY, 50,50 );
}
console.log(height, width)
let a = width/2.5;
let b = height/2.5;
let theta = 30;
let t = 1
for (let i in image64) {
  let x = width/2+a * Math.cos(theta * Math.PI/180)
  let y = height/2+b * Math.sin(theta * Math.PI /180)
  let p = new Particle(x, y, (Math.random()*(3-1)+1)*0.05, t*=-1, image64[i])
  particles.push(p)
  // p.render()
  theta += 360/9
}


let g = 0
// requestAnimFrame polyfill
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ){
					window.setTimeout(callback, 1000 / 60);
				};
	})();////////


(function animloop(){
		requestAnimFrame(animloop);
  resize()
      let randDist = imageDimen()

  context.clearRect(0, 0, canvas.width, canvas.height);
 for (var i = 0; i < particles.length; i++) {
		particles[i].render(randDist);		
	}
  
	})();