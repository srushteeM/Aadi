var database,form,game,player;
var gameState=0;
var playerCount;

function setup(){
  database = firebase.database();
  
  createCanvas(400,400);

 
}

function draw(){
  form=new Form();
    form.display();
  
}

