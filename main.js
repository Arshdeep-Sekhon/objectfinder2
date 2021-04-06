text ="";
status ="";

function setup() {
    canvas = createCanvas(480, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'STATUS : DETECTING OBJECTS';
}

function modelLoaded() {
    console.log("MODEL LOADED SUCCESSFULY");
    status = true;
    text = document.getElementById("inputXD");
}

function draw() {
    image(video, 0, 0, 480, 400);
}
