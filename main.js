noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;



function preload()
{
    
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose", gotPoses);
}

function draw()
{
    background("#A9A9A9");
    document.getElementById("valueOutput").innerHTML = "The width and height is " + difference;
    fill("#00FFFF");
    stroke("#00FFFF");
    square(noseX , noseY, difference);
}

function modelLoaded()
{
    console.log("Posenet is loaded");
}

function gotPoses(results)
{
    if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x " + noseX + "nose y "+noseY);

        leftWristX = results[0].pose.leftWrist.x
        RightWristX = results[0].pose.rightWrist.x

        difference = leftWristX - rightWristX;
        difference = floor(difference);
        console.log(difference);
    }
}