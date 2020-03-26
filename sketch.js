


var box1;
var box2;
var box3;
var box4;
var box5;


var ground;

function setup(){
    var canvas = createCanvas(400,400);
    

    box1 = createSprite(100,380,50,600);
    box2 = createSprite(350,380,50,600);
    box3 = createSprite(100,75,60,20);
    box4 = createSprite(225,380,200,400);
    box5 = createSprite(350,75,60,20);
    
    ground = createSprite(200,390,400,20);
}

function draw(){
    background(0,0,0);
   
    box1.shapeColor="red";
    box2.shapeColor="red";
    box4.shapeColor="orange";
    box3.shapeColor="yellow";
    box5.shapeColor="yellow";






    box1.display();
   box2.display();
   box3.display();
   box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 
   ground.display();



}

