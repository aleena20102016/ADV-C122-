function preload()
{

}

function draw(){
    image(video, 250, 250, 300, 300);

    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(130, 80, 550, 50);
    rect(130, 680, 550, 50);
    rect(80, 120, 50, 550);
    rect(680, 120, 50, 550);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(100, 100, 100);
    circle(700, 100, 100);
    circle(100, 700, 100);
    circle(700, 700, 100);


    
}
function setup(){

    canvas = createCanvas(800, 800);
    canvas.position(150, 150);

    video = createCapture(VIDEO);
    video.hide();
}

function take_snapshot(){
    save('Project')
}