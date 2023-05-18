function setup(){
    video=createCapture(VIDEO)
    video.size(1300,500)

    canvas=createCanvas(550,550)
    canvas.position(1000,150)
    poseNet=ml5.poseNet(video, modelLoaded )
    poseNet.on('pose', gotPoses)
}

function draw(){
    background("#8dc995")
}

function modelLoaded(){
    console.log("PoseNet Initalized!")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}