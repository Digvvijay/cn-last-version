noseX=0;
noseY=0;

function preload()
{

}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    cn=loadImage("https://i.postimg.cc/MKXJSRgC/Clown-Nose-PNG-Background-Image-removebg-preview.png");
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,500,500);
    image(cn,noseX-50,noseY-60,95,95)
}

function takesnapshot()
{
    save('myFilterImage');
}

function modelLoaded()
{
    console.log("PoseNet is initialised");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x ="+noseX);
        console.log("nose y ="+noseY);
    }
}