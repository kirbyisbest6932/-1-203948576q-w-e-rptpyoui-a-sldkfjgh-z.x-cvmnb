difference = 0;
rightWristX = 0
leftWristX = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Poseet Activated!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);   
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX +" rightWristX = "+ rightWristX + "difference = " + difference);
    }
}

function draw() {
background('#800000');

document.getElementById("square_side").innerHTML = "Font Size will be = " + difference +"px";
textSize(difference);
fill("#FF5800");
text('The quick brown fox jumps over the lazy dog.', 50, 400);
}