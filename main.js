
status="";
gunu=[];
sound="";
function preload()
{
 sound= loadSound("mixkit-alert-alarm-1005-wav");
}
function setup()
{
    object=ml5.objectDetector("cocossd",sansku);
    document.getElementById("bro").innerHTML="detecting objects";
            canvas=createCanvas(360,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

}
function sansku(){
    console.log("modalloaded");
 status= true;
}
function gotresults(error,results){
    console.log("whatever");
if(error){
    console.error(error);
}
else{
    console.log(results);
    gunu=results;
}
}
function draw()
{
image(video,0,0,650,450);
object.detect(video,gotresults);
if(status!=""){
   
for (var i = 0; i < gunu.length; i++) {
    if(gunu[i].label=="person"){
        console.log("baby is safe")
    }else{
        sound.play();
    }
    document.getElementById("bro").innerHTML="detected";
    document.getElementById("no.").innerHTML="no. of objects : "+gunu.length;
    fill("#ac00e6");
    percnt=floor(gunu[i].confidence*100);
    text(gunu[i].label+" "+percnt+"%",gunu[i].x, gunu[i].y);
    noFill();
    stroke("#ac00e6");
    rect(gunu[i].x, gunu[i].y,gunu[i].width, gunu[i].height);
}
}
}