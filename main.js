noseX=0
noseY=0
leftWristX=0
rightWristX=0
difference=0

function setup(){
    video=createCapture(VIDEO)
    video.size(700,500)

    canvas=createCanvas(1200,600)
    canvas.position(700,150)
    poseNet=ml5.poseNet(video, modelLoaded )
    poseNet.on('pose', gotPoses)
}

function draw(){
    background("#8dc995")
    document.getElementById("font_size").innerHTML="Width and Height ="+difference+"px."
    fill("#e31489")
    stroke("#e31489")
    text('LaL',noseX,noseY)
    textSize(difference)
}

function modelLoaded(){
    console.log("PoseNet Initalized!")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("noseX = "+noseX + " | noseY = "+noseY)

        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        difference=floor(leftWristX-rightWristX)
        console.log("leftWristX = "+leftWristX + " | rightWristX = "+rightWristX + " | Difference = "+difference)
    }
}