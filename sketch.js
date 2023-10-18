function setup() {
	// setup runs once
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	background(128);
}

function draw() {
	// draw runs all the time
	point(50, 50);
}
